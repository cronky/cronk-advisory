# AGENTS.md

Guidance for AI coding agents (Claude Code, Copilot, Codex, Cursor, etc.) working on this repository.
Humans should start with [README.md](README.md).

## What this is

The public marketing site for Cronk Advisory Ltd, a UK technology leadership and architecture consultancy.
It is a deliberately small [Hugo](https://gohugo.io) static site: no theme, no Hugo modules, no npm, no build pipeline beyond `hugo`.
Cloudflare Pages builds and deploys on every push to `main`, so **anything merged to `main` goes live**.

## Principles (please respect these)

The site practises what the business preaches: sustainable, secure, minimal technology.

- **Keep it static and lightweight.** Don't add frameworks, bundlers, CSS libraries, analytics scripts, trackers or third-party embeds. The only JavaScript is the mobile nav toggle in `static/js/main.js`.
- **No new cookies.** The privacy policy states only strictly necessary cookies are used. Anything that would change that needs the privacy policy updating and the owner's sign-off.
- **Mind the bytes.** Optimise images before committing (palette PNGs or WebP/SVG where possible). Avoid adding web fonts or font weights.
- **British English** throughout content (organisation, colour, licence).
- **Don't invent claims.** Biography, client sectors, roles and credentials are factual statements about a real person and company. Never add or embellish them; ask the owner.
- **DIST, not the Tech Carbon Standard.** For technology footprint work, reference the Green Web Foundation's [Digital Impacts Schema and Taxonomy (DIST)](https://dist.greenweb.org). The Tech Carbon Standard is a Scott Logic project kept for the archive: mention it only as a past achievement in Oliver's biography, without a link.
- **AI use is disclosed.** If you make a material contribution, add a line to the "AI Use Disclosure" section of `README.md` (tool, model, rough scope).

## Where things live

| You want to change… | Edit |
|---|---|
| Homepage copy (hero, services, approach, about, contact) | Front matter in `content/_index.md` |
| Homepage markup | `layouts/index.html` |
| Privacy policy | `content/privacy.md` (update the "Last updated" line) |
| Header / nav | `layouts/partials/header.html` |
| Footer | `layouts/partials/footer.html` |
| `<head>` meta, favicon, fonts | `layouts/partials/head.html` |
| Generic content pages | `layouts/_default/single.html` |
| Styles | `static/css/main.css` (design tokens are CSS custom properties in `:root`) |
| Site-wide params (email, company number, description) | `hugo.toml` |
| HTTP headers / caching | `static/_headers` (Cloudflare Pages format) |
| Summary for LLMs that read the site | `static/llms.txt` |

### Homepage content model

`layouts/index.html` reads everything from `.Params` in `content/_index.md`, grouped as `hero`, `services`, `approach`, `about`, `contact`.
Fields rendered with `markdownify` accept inline Markdown (links, bold): `services.items[].body`, `services.items[].note`, `approach.body`, `about.body`. Other fields are plain text.
Use `\n\n` inside a quoted YAML string to start a new paragraph in a `markdownify` field. `approach.heading` and `contact.heading` honour `\n` as a line break (`white-space: pre-line`).
Optional fields are wrapped in `{{ with }}` so leaving them out renders nothing (e.g. `approach.cta` / `approach.cta_url`).

Service `id`s (`fractional-cto`, `advisory`, `sustainability`) are anchor targets linked from the footer, so keep them stable.

### Links

Header and footer links point at `/#section` (not `#section`) so they work from non-home pages such as `/privacy/`. Keep that pattern for new in-page links in partials.

## Brand assets (`static/images/`)

All logos are transparent PNGs (8-bit palette with alpha).

| File | Use |
|---|---|
| `logo-full.png` | Icon mark only. Header, on cream. |
| `logo-full-logo.png` | Full lockup (mark + dark "Cronk Advisory" wordmark). For light backgrounds. |
| `logo-full-logo-light.png` | Full lockup with cream wordmark. For dark backgrounds (footer). |
| `logo-mark.png` | 64×64 favicon. |
| `apple-touch-icon.png` | 180×180 icon on cream, for iOS home screens. |

The white circuit lines inside the green mark are part of the logo and must stay opaque. The original white-background masters are in git history before October 2026 if a re-export is ever needed.
Brand assets are **not** covered by the MIT licence; don't redistribute or alter the mark's design.

Brand colours (from `main.css`): forest `#3B6352`, navy `#1C2C3A`, amber `#C9893A`, cream `#F7F4EE`. Fonts: Jost (headings), Source Serif 4 (body).

Text must meet WCAG AA contrast (at least 4.5:1). Amber `#C9893A` fails as text on cream or white, so labels on light backgrounds use `--amber-text` (`#935F1E`); keep `--amber` for bars, accents and text on navy. Semi-transparent white text needs at least 60% opacity on navy (65% on the translucent cards) and at least 80% on forest. Check any new colour pair with a contrast checker.

No inline `style=""` attributes or `<style>` blocks in layouts: put styles in `main.css` (a strict Content Security Policy is planned).

## Working locally

```bash
hugo server -D            # http://localhost:1313, live reload
hugo                      # build to ./public (git-ignored; Cloudflare builds its own)
```

There are no tests. Before finishing a change:

1. `hugo` builds with no errors or warnings.
2. Check the homepage and `/privacy/` at desktop and ~375px mobile width (no horizontal scroll, nav toggle works).
3. Check no empty or broken links were introduced (`href=""`, `https://https://`, missing images).

## Git

- `main` is production. Prefer a branch and PR for anything beyond a typo fix, and let the owner merge.
- Don't commit `public/`, `resources/_gen/` or editor folders (see `.gitignore`).
