# Taverne · Agios Ioannis, Serres

Static, responsive preview website in Greek, English and German. Designed for GitHub Pages at `o-some/taverne`.

## Local preview

From this directory run `python3 -m http.server 8080`, then open `http://localhost:8080/`.

## Publication

The workflow in `.github/workflows/pages.yml` publishes the static files on each push to `main`. In GitHub repository settings, set **Pages → Build and deployment → Source: GitHub Actions**. No framework build or secret is required.

## Before a public restaurant launch

- Replace the working title with the confirmed restaurant name and logo.
- Add the exact address and Maps place, opening hours, phone number, booking route and menu only after the business confirms them.
- Replace or approve the concept pictures against real photographs. The current pictures are clearly identified as visualizations on the page.
- Confirm the business's legal notice, privacy contact and any cookie or analytics decision. There are no analytics, third-party embeds or externally loaded fonts.
- Remove the temporary `noindex, nofollow` meta tag only after the venue details and imagery are approved for public search.

## Art direction and image provenance

CAF 1.21.1 / premium-web Module 146 informed the original plan. The current redesign uses **[049] Raus. Erleben. Wachsen.** as the main reference for bold type and image-led pacing, **[064] Ankommen. Atmen. Aufblühen.** and **[078] Forest Atlas** for forest green and water-blue atmosphere, and **[112] Riviera** for alternating light and deep-blue chapters. These are design references only; no book-design image is published in the site.

The original mark in `assets/mark.svg` combines the X-braced timber bridge, short falling-water strokes and a single ember above them. It is used in the header, invitation and favicon.

All 24 JPEGs in `assets/images/` were generated for this project using the built-in Imagegen tool on 2026-10-06, then encoded at JPEG quality 82 for web use. The first 20-image series was replaced after five user-supplied Agios Ioannis reference photos showed the real setting: a flat green creek and pond, low straight weirs, wooden X-rail bridge, plane trees and ducks. The original reference files are preserved in the customer `[User Input]/Ortsreferenzen` folder and are not published. The current series avoids the sea, stone arches, mountain gorges and large rock waterfalls that appeared in the first version. These images remain *concept artwork*, not documentary photos of the actual venue or confirmed menu.

The complete scene prompt set is in [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md).

The editorial place chapter uses only documented facts: Agios Ioannis is about two kilometres from Serres; the wooded springs and flowing water form small waterfalls and ponds; the municipality hosted a Water Festival there in 2017. The available municipal material does not date or explain the construction or formation of each low water step, so the website says so explicitly. Sources: [Municipality of Serres](https://www.serres.gr/toyrismos/axiotheata/ai-giannis/), [Serres tourism guide](https://tourism.serres.gr/thematikes_empiries/ai-giannis/), [2017 Water Festival](https://www.serres.gr/apolayste-deyteri-giorti-neroy-25-26-27-maiou-ston-ai-gianni-serron/).

The self-hosted Roboto variable font is distributed under the [SIL Open Font License](assets/fonts/OFL-Roboto.txt); no font service is called at runtime. The scroll chapter uses native CSS and a small amount of JavaScript, with a static mobile layout and reduced-motion fallbacks.
