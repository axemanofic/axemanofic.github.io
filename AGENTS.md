# AGENTS

**Project:** Personal static site built with Vite + Sass.

## Core Guidance for OpenCode
- All interactions in Russian.
- Setup: run `npm install` before any other command.
- Development server: `npm run dev` → Vite on **port 3000**, serves `src/index.html`.
- Build output: `npm run build` writes files to **../dist** (configured in `vite.config.js` `build.outDir`).
- Preview server: `npm run preview` → Vite preview on **port 8000**, serves the built `../dist`.
- Deploy: `npm run deploy` runs `gh-pages -d dist`; CI uses same steps on push to `master`.
- Release bump: `npm run release` (standard-version).
- Prettier: trailing commas `es5`, 2‑space indent, no semicolons, single quotes.
- Image optimizer: `vite-plugin-image-optimizer` with lossless PNG/JPEG quality 100 and lossless WebP/AVIF (see `vite.config.js`).
- Hover scaling: `.profile__social > *:hover` scales icons (0.5 s transition) – edit `src/styles/styles.sass` to change or disable.
- Hover color: `.profile__link:hover` uses `$link-hover-active-color: #0378ff` defined in `src/styles/themes.sass`; override there to change link hover color.
- Dynamic content: `src/person.json` holds personal data (name, position, contacts, about, skills). `src/index.js` imports this JSON and populates the page at runtime.
- To change social‑link hover behavior (color, scaling) edit `src/styles/components.sass` where overrides for `.profile__social > a:hover` are defined.
- `dist` directory is ignored by git; never commit built files.

### What agents often miss without this file
- Exact script names and required order (`install` → other scripts).
- Build output path (`../dist`) set in Vite config.
- Hover scaling rule in `styles.sass`.
- Hover color variable `$link-hover-active-color` in `themes.sass`.
- Presence of `person.json` as the single source of truth for personal data.
- Image optimizer configuration details.


**Project:** Personal static site built with Vite + Sass.

## Core Guidance for OpenCode

- **All interactions in Russian.**
- **No custom agents** are present; focus on build/deploy tooling.
- **Setup:** `npm install` must be run before any other script.
- **Development server:** `npm run dev` → Vite on **port 3000**, opens `/index.html`, source root is `src`.
- **Preview build:** `npm run build && npm run preview` → builds to `../dist`, preview runs on **port 8000**.
- **Deploy:** `npm run deploy` (uses `gh-pages` to publish `dist`). CI workflow runs the same steps on push to `master`.
- **Release version bump:** `npm run release` (standard-version).
- **Prettier config:** trailing commas `es5`, 2‑space tabs, no semicolons, single quotes.
- **Image optimization:** Vite plugin `vite-plugin-image-optimizer` with lossless PNG/JPEG quality 100 and lossless WebP/AVIF.
- **CI trigger:** pushes to `master` and PR open/sync run the `Deploy to Github Pages` workflow.
- Ignore directory dist

### What agents often miss without this file
- Exact script names and required order (`install` → any other script).
- Server ports and root directory (`src`).
- Deploy command uses `gh-pages` and expects `dist` output.
- Prettier style that may affect linting/formatting.
- That there are **no backend services or custom agents** to configure.
