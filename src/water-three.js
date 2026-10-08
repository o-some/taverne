import { Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, Vector2, WebGLRenderer } from 'three';

export function mountWater(stage, reduceMotion) {
  const canvas = document.createElement('canvas');
  canvas.className = 'water-three-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  stage.append(canvas);

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  } catch {
    canvas.remove();
    return;
  }

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, innerWidth < 760 ? 1 : 1.5));

  const uniforms = {
    uTime: { value: 0 },
    uHeat: { value: .4 },
    uAspect: { value: 1 },
    uPoint: { value: new Vector2(-4, -4) },
    uPulse: { value: 1 },
  };
  const geometry = new PlaneGeometry(2, 2);
  const material = new ShaderMaterial({
    uniforms,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    vertexShader: `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uHeat;
      uniform float uAspect;
      uniform vec2 uPoint;
      uniform float uPulse;
      varying vec2 vUv;
      void main() {
        vec2 uv = vUv;
        float flowA = sin(uv.x * 23.0 + uv.y * 11.0 + sin(uv.y * 12.0 - uTime * .45) * 1.4);
        float flowB = sin(uv.x * 13.0 - uv.y * 29.0 - uTime * .62 + sin(uv.x * 9.0) * .7);
        float caustic = pow(max(0.0, flowA * flowB), 5.0) * .48;
        float contour = smoothstep(.87, 1.0, sin(uv.y * 39.0 + uv.x * 14.0 + sin(uv.x * 8.0 + uTime * .25) * 1.6 - uTime * .4)) * .14;
        float distanceToTouch = length((uv - uPoint) * vec2(uAspect, 1.0));
        float ripple = exp(-pow((distanceToTouch - uPulse * .55) * 27.0, 2.0)) * (1.0 - uPulse) * .9;
        float water = smoothstep(.2, .62, uv.y);
        float warmth = clamp(uHeat * (.55 + (1.0 - uv.y) * .24), 0.0, 1.0);
        vec3 light = mix(vec3(.72, .93, .87), vec3(1.0, .78, .51), warmth);
        float alpha = clamp((caustic + contour + ripple) * water, 0.0, .72);
        gl_FragColor = vec4(light, alpha);
      }
    `,
  });
  const scene = new Scene();
  scene.add(new Mesh(geometry, material));
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  let pulseAt = -2000;
  let lastFrame = 0;
  let visible = false;
  let disposed = false;

  function resize() {
    const { width, height } = stage.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, innerWidth < 760 ? 1 : 1.5));
    renderer.setSize(width, height, false);
    uniforms.uAspect.value = width / height;
  }

  function frame(time) {
    if (time - lastFrame < (innerWidth < 760 ? 1000 / 30 : 1000 / 45)) return;
    lastFrame = time;
    uniforms.uTime.value = time * .001;
    const heat = Number.parseFloat(stage.style.getPropertyValue('--heat'));
    uniforms.uHeat.value = Number.isFinite(heat) ? heat : .4;
    uniforms.uPulse.value = Math.min(1, (time - pulseAt) / 1450);
    renderer.render(scene, camera);
    stage.classList.add('has-water-three');
  }

  function sync() {
    const play = visible && !document.hidden && !reduceMotion.matches;
    renderer.setAnimationLoop(play ? frame : null);
    stage.classList.toggle('has-water-three', play);
  }

  function ripple(event) {
    const rect = stage.getBoundingClientRect();
    uniforms.uPoint.value.set((event.clientX - rect.left) / rect.width, Math.max(.68, 1 - (event.clientY - rect.top) / rect.height));
    pulseAt = performance.now();
  }

  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { rootMargin: '100px' });
  const resizer = new ResizeObserver(resize);
  function dispose() {
    if (disposed) return;
    disposed = true;
    renderer.setAnimationLoop(null);
    observer.disconnect();
    resizer.disconnect();
    stage.removeEventListener('pointerdown', ripple);
    document.removeEventListener('visibilitychange', sync);
    reduceMotion.removeEventListener('change', sync);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    canvas.remove();
    stage.classList.remove('has-water-three');
  }

  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); dispose(); }, { once: true });
  window.addEventListener('pagehide', dispose, { once: true });
  stage.addEventListener('pointerdown', ripple, { passive: true });
  document.addEventListener('visibilitychange', sync);
  reduceMotion.addEventListener('change', sync);
  resizer.observe(stage);
  observer.observe(stage);
  resize();
}
