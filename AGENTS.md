# AGENTS.md

Static site for [karmalab.tech](https://karmalab.tech), served via GitHub Pages (root of `master` branch).

## Current state

This is a **coming soon** page. It shows a chrome logo + "Going live May 15" tagline over a blurred video background, with a "Contact us" modal. No build step — plain HTML/CSS + React via CDN + Babel standalone for JSX.

## File structure

```
index.html                        entry point — loads CSS and JSX files
styles/colors_and_type.css        design tokens (colors, type scale, spacing, motion)
src/Primitives.jsx                shared components: KLButton, KLIconButton, KLMeta, KLEyebrow, KLSectionNumber
src/Icons.jsx                     inline SVG icons (Lucide-style)
src/App.jsx                       main App component + ReactDOM.createRoot
uploads/chrome_logo_transparent.png   the chrome logo used in the hero
```

## Design system

- **Black canvas**, neon **pink** (#FB48C4) for content emphasis, **lime** (#85FF00) for interactive elements
- **Space Grotesk** (display/body, weight 300–700) + **JetBrains Mono** (meta/eyebrow labels)
- All tokens are CSS custom properties defined in `styles/colors_and_type.css`
- Buttons: pill shape (`border-radius: 999px`), 2px outline, hover fills + glows
- `KLButton` — takes `accent="pink"` or `accent="lime"`, `size="sm|md|lg"`, `variant="primary|ghost|text"`
- `KLIconButton` — circular icon button, same accent system

## How it runs

No build tools. Babel standalone compiles the JSX in-browser. Works on any HTTP server — GitHub Pages, `npx serve .`, Python's `http.server`, etc. **Does not work from `file://`** (Babel can't fetch external `.jsx` files cross-origin).

```bash
npx serve .
# or
python3 -m http.server 8080
```

## What's next

The full site design (7 sections) was prototyped in Claude Design and lives in the handoff bundle. Key sections planned:

1. **What we do** — index-card grid
2. **How it works** — process rail
3. **For who** — big anti-quote + chips
4. **Values** — two-column manifesto
5. **Position** — strikethrough "what we aren't" vs pull-quote
6. **Who we are** — portrait strip
7. **CTA** — terminal-style mega call to action

The full-page design (scroll phases, sticky video reel, drawer menu, all 7 sections) is implemented in `src/` files from the design bundle — `Hero.jsx`, `Sections.jsx`, `Tweaks.jsx`, `Chrome.jsx` — but these are **not yet wired into this repo**. The `index.html` currently only shows the coming soon page.

When ready to build the full site, source those files from the design handoff and adapt them here.

## Contact details (in the modal)

- Email: start@karmalab.tech
- Instagram: @karmalab.tech
