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
- Confirm the business's legal notice, privacy contact and any cookie or analytics decision. There are no analytics or third-party embeds; Google Fonts is loaded externally.

## Art direction and image provenance

CAF 1.21.1 / premium-web Module 146 informed the plan. The primary source design is **[134] Coastal Fire** in the user's Chelonaki *The Quiet Author* library. Its calm editorial typography, pale surfaces and fire accent were translated into an original web layout for Agios Ioannis. No book-design image is published in the site.

All 20 JPEGs in `assets/images/` were newly generated for this project using the built-in Imagegen tool on 2026-10-06, then encoded at JPEG quality 82 for web use. Scenes 01–04 were individually prompted for an open-air taverna by flowing water, charcoal souvlaki, a small waterfall and a sharing table. Scenes 05–20 were individually prompted for plated and grilling souvlaki, an active grill, terrace, gathering, water and stone, small falls, plane trees, pita, salad, vegetables, potatoes, kitchen craft, dusk terrace, drinks and last light. Shared constraints: northern Greek setting, cinematic editorial photography, warm fire and water palette, no signs, text or logos. Public photographs of the area were used as geographic research only; no third-party photo was copied into the project. These images are *concept artwork*, not documentary photos of the actual venue or confirmed menu.

Location research: [Municipality of Serres](https://www.serres.gr/en/agios_ioannis/), [Visit Central Macedonia](https://www.visit-centralmacedonia.gr/en/where-to-go/60/1-serres/444/ai-giannis-of-serres), [Serres tourism guide](https://tourism.serres.gr/thematikes_empiries/agios-ioannis-serres/).
