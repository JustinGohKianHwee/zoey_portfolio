# Zoey Portfolio — Agreed Plan

## Project Goal

Build a premium architecture portfolio website for **Sze Zo Ey (Zoey)**, a Master of Architecture graduate from NUS. The site should feel like a $10k custom architecture portfolio — quiet, refined, spatial, image-led — and serve as a primary tool for job applications to architecture firms and studios.

It should feel distinctly better than the current Adobe Portfolio at: https://szezoey.myportfolio.com/

---

## Reference Sites

| Purpose | URL |
|---|---|
| Current Adobe Portfolio | https://szezoey.myportfolio.com/ |
| Living Layers | https://szezoey.myportfolio.com/living-layers |
| Beyond Earth | https://szezoey.myportfolio.com/beyond-earth |
| Windwave | https://szezoey.myportfolio.com/windwave |
| Boundless Horizons | https://szezoey.myportfolio.com/boundless-horizons |
| DynamicScape | https://szezoey.myportfolio.com/dynamicscape |
| **TropiVillaR (correct link)** | **https://szezoey.myportfolio.com/tropical-villar** |
| Diverging Paths | https://szezoey.myportfolio.com/diverging-paths |

---

## Approved Design Direction: Muted Architectural Editorial / Architecture Monograph

**Context:** An initial "Swiss Modernist Editorial" direction was proposed (warm trace-paper tones, Cormorant Garamond + Inter) but Zoey found it too loud — too graphic-poster, too typographically aggressive. This direction is a refinement, not a full rejection: the warm palette and serif typography are retained, but applied in a quieter, more image-led, monograph-like register.

**References:** El Croquis spreads, Phaidon architecture publications, Kengo Kuma Associates web presence, Pezo von Ellrichshausen studio pages — calm, editorial, image-forward.

**The core principle:** Let the architecture speak. Typography is navigation, not spectacle.

**What to avoid:**
- Swiss poster-style oversized typography
- Bold accent color blocks
- Aggressive grid statements
- Text overlaid on images
- Direction-aware hover overlays
- Blur reveal animations
- Anything that competes with the architectural work

### Color System

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F6F4EF` | Site background (warm linen / trace paper) |
| `--color-surface` | `#FAF8F4` | Card backgrounds, elevated surfaces |
| `--color-text` | `#1C1917` | Primary text (warm near-black) |
| `--color-text-2` | `#72706B` | Secondary text, metadata, captions |
| `--color-text-3` | `#A8A49F` | Labels, small captions |
| `--color-accent` | `#8B7355` | Thin rules, pull-quote left borders, subtle hover — never as a color block |
| `--color-border` | `#D9D5CE` | Thin horizontal rules, dividers |
| `--color-white` | `#FFFFFF` | Image backgrounds, form fields |

### Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Project titles, pull quotes, name | `Cormorant Garamond` | 400, italic for quotes | Max 2.5rem on desktop — never oversized |
| All body, UI, labels, metadata | `Inter` | 300 / 400 | Clean, recessive, carries most text |
| Section labels ("Overview", "Plans") | `Inter` | 400, small-caps tracked | Very small — navigation, not statements |
| Captions | `Inter` | 300 | Smallest text, --color-text-2 |

**Type scale (desktop):**
- Hero name: `2.25rem` Cormorant 400
- Project titles on cards: `1rem` Inter 400
- Pull quotes: `1.25–1.4rem` Cormorant italic 400
- Body prose: `1rem` Inter 300/400
- Metadata: `0.8125rem` Inter 300
- Captions: `0.75rem` Inter 300

---

## Portfolio Strategy

- 3 **featured** projects on homepage: Living Layers, Windwave, Boundless Horizons
- 4 **selected** projects: DynamicScape, Diverging Paths, Beyond Earth, TropiVillaR
- Projects ordered by impact on homepage, by year (newest first) on /work
- Each project page: concept → site → strategy → technical → spatial outcome
- Plans, sections, diagrams given equal billing to renders — presented as careful drawings
- No project forced into a single rigid template — image blocks adapt to available assets

---

## Zoey's Bio

**Provided by Zoey:**
> "I am passionate about designing environments that foster social connection and support human well-being, with a particular interest in understanding how architecture can enhance everyday experiences through sustainable design strategies."

**Academic status:** BA (Architecture) + M.Arch, National University of Singapore

**One-line statement:**
> *Designing for social connection, human well-being, and environmental resilience.*

**Homepage bio:**
> Sze Zo Ey (Zoey) is an architect and Master of Architecture graduate from the National University of Singapore. Her work sits at the intersection of social design and environmental performance — architecture that responds to place, supports community, and takes its climate seriously.

**About page bio:**
> Sze Zo Ey (Zoey) is a Master of Architecture graduate from the National University of Singapore, where her work explored the relationship between social connection, human well-being, and climate-responsive design. Across projects spanning Singapore, South Korea, and Germany, she has approached each commission as an exercise in close reading — understanding a site's ecology, culture, and community before proposing form.
>
> Her projects range from a regenerative co-living retreat in Sabah's RAMSAR-listed wetlands, to a wind-harvesting cultural centre at Gardens by the Bay, to a cultural library in the historic Seoul neighbourhood of Seochon. Whether working with Mass Engineered Timber and prefabricated construction, rammed earth and passive thermal mass, or computational analysis and adaptive facades, her consistent interest is in architecture that makes everyday life better — for the people who use it and the landscapes it inhabits.
>
> She is seeking opportunities to work within practices that value environmental responsibility, contextual design thinking, and the careful translation of ideas into built form.

---

## Projects

| # | Slug | Title | Year | Featured | Assets |
|---|---|---|---|---|---|
| 1 | `living-layers` | Living Layers | 2025 | Yes | 12 images |
| 2 | `windwave` | Windwave | 2024 | Yes | 11 images |
| 3 | `boundless-horizons` | Boundless Horizons | 2023 | Yes | 12 images |
| 4 | `dynamicscape` | DynamicScape | 2023 | No | 8 images |
| 5 | `diverging-paths` | Diverging Paths | 2022 | No | 12 images (4 without extensions — excluded until fixed) |
| 6 | `beyond-earth` | Beyond Earth | 2025 | No | 4 images |
| 7 | `tropivilla-r` | TropiVillaR | 2023 | No | 1 image |

---

## Image Folder Structure

Source images in `/images/` at repo root. Copied to `/public/images/projects/[slug]/` with spaces replaced by dashes.

```
public/images/projects/
├── living-layers/
├── windwave/
├── boundless-horizons/
├── dynamicscape/
├── diverging-paths/
├── beyond-earth/
└── tropivilla-r/
```

All images via `next/image` for automatic WebP + lazy loading.

---

## Homepage Structure

```
NAV
  "Sze Zo Ey" left — Inter 400, small
  "Work · About · Contact" right — Inter 300, tracked
  Thin bottom border on scroll

INTRO (~50vh, quiet)
  Name — Cormorant 400, 2.25rem
  Title + positioning statement — Inter 300, small
  Thin horizontal rule

FEATURED PROJECTS (image-led, 3 cards)
  Full-bleed image → thin rule → typology label → title → year
  Hover: image scale(1.02), title → accent color

SELECTED WORKS (4 cards, compact)
  Same quiet treatment, smaller aspect ratio

ABOUT STRIP
  Short bio, link to /about

FOOTER
  Thin top rule, name, email, copyright
```

---

## Project Page Structure

```
HERO IMAGE
  Full-bleed, ~90vh, no text overlay

TITLE BLOCK (below hero)
  Thin rule → project title (Cormorant 400, ~2rem)
  → subtitle (Inter 300) → thin rule
  → metadata strip (Year · Studio · Location)

CONCEPT STATEMENT
  Left-aligned pull quote
  2px left border in --color-accent
  Cormorant italic 400, ~1.3rem

OVERVIEW
  Prose — Inter 300/400, ~650px max-width

IMAGE SEQUENCE (adapts per project)
  full / half / third layouts
  No borders on images
  Captions: Inter 300, 0.75rem, --color-text-2

NEXT PROJECT
  Thin rule → "Next — [Name]  →" (Inter 300)
```

---

## Motion & Animation Principles

**Rule:** If you notice the animation, it is too much.

| Effect | Implementation | Duration |
|---|---|---|
| Scroll fade-in | `opacity 0→1`, `translateY 10px→0` (Framer Motion `useInView`) | 550ms ease-out |
| Project card hover | Image `scale(1.02)` in `overflow:hidden` container; title → accent color | 500ms CSS transition |
| Page transition | `opacity 0.9→1` (Framer Motion `AnimatePresence`) | 150ms |

**Never:** blur reveals, direction-aware hover, parallax, text animations, shimmer, spotlight, marquees, 3D card effects.

---

## Technical Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Animation | Framer Motion |
| Fonts | Google Fonts: Cormorant Garamond + Inter |
| Images | `next/image` (WebP, lazy, responsive) |
| Deployment | Vercel |

---

## Site Structure

```
/                  Homepage
/work              All projects
/work/[slug]       Individual project case study
/about             Bio, skills, CV
/contact           Email / form
```

---

## Content Data Structure

All project content in `src/content/projects.ts`. Each project:

```typescript
{
  slug, title, subtitle, year, course, studio,
  institution, location, typology,
  collaborators?: string[],
  featured: boolean, order: number,
  heroImage, thumbnailImage,
  concept,        // pull quote (Cormorant italic)
  overview,       // main prose narrative
  strategy?,      // design/technical strategy text
  tags: string[],
  images: {
    src, alt, caption?,
    type: 'hero'|'render'|'plan'|'section'|'diagram'|'process'|'context',
    layout: 'full'|'half'|'third'|'two-thirds'
  }[]
}
```

**To add a project:** add one object + one image folder. No other code changes.

---

## Implementation Principles

- No invented awards, internships, metrics, or achievements
- No permanent reliance on Adobe CDN images
- `next/image` for all project images
- Responsive at 375px, 768px, 1024px, 1440px
- WCAG AA minimum (4.5:1 contrast)
- Keyboard accessible throughout
- `prefers-reduced-motion` respected
- Static generation (SSG) — all pages pre-rendered
- Clean, maintainable component structure

---

## Things Zoey Should Complete Before Publishing

- [ ] CV/resume PDF → `/public/zoey-cv.pdf`
- [ ] LinkedIn URL
- [ ] Public email address (NUS student email expires post-graduation)
- [ ] DynamicScape: facade design description — what does it look like?
- [ ] Beyond Earth: spatial description + her specific contribution
- [ ] TropiVillaR: confirm or expand project description
- [ ] Diverging Paths: fix 4 extensionless files (rename with .jpg or .png)
- [ ] Confirm best hero image per project
- [ ] Profile photo for About page (optional)
- [ ] Software skills list (Rhino, Grasshopper, Revit, AutoCAD, Adobe CC, etc.)

---

## Current Status

- [x] Adobe Portfolio fully extracted (including TropiVillaR via correct URL `/tropical-villar`)
- [x] Image assets audited — 60 files across 7 project folders
- [x] Design direction finalised: **Muted Architectural Editorial / Architecture Monograph**
- [x] Bio direction approved
- [x] Animation strategy confirmed
- [x] `docs/portfolio-plan.md` updated to final approved direction
- [ ] Next.js project initialized
- [ ] Design system implemented (Tailwind config, CSS variables, fonts)
- [ ] Content data written (all 7 projects)
- [ ] Components built
- [ ] Pages built
- [ ] Images copied to `/public/images/projects/`
- [ ] Responsive testing
- [ ] Vercel deployment
