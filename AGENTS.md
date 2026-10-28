# AGENTS.md

Guidance for AI coding agents (Claude Code, Copilot, Codex, Cursor, etc.) working on this repository.
Humans should start with [README.md](README.md).

## What this is

The public marketing site for Cronk Advisory Ltd, a UK technology leadership and architecture consultancy.
It is a deliberately small [Hugo](https://gohugo.io) static site: no theme, no Hugo modules, no npm, no build pipeline beyond `hugo`.
Cloudflare Pages builds and deploys on every push to `main`, so **anything merged to `main` goes live**.

## Principles (please respect these)

The site practises what the business preaches: sustainable, secure, minimal technology.

- **Keep it static and lightweight.** Don't add frameworks, bundlers, CSS libraries, analytics scripts, trackers or third-party embeds. JavaScript is progressive enhancement only: the mobile nav toggle (`static/js/main.js`) and the Pragmatic Ecosystems map (`static/js/ecosystem-map.js`, loaded only by its shortcode). Pages must work without it.
- **No new cookies.** The privacy policy states only strictly necessary cookies are used. Anything that would change that needs the privacy policy updating and the owner's sign-off.
- **Mind the bytes.** Optimise images before committing (palette PNGs or WebP/SVG where possible). Avoid adding web fonts or font weights.
- **British English** throughout content (organisation, colour, licence).
- **Don't invent claims.** Biography, client sectors, roles and credentials are factual statements about a real person and company. Never add or embellish them; ask the owner.
- **DIST, not the Tech Carbon Standard.** For technology footprint work, reference the Green Web Foundation's [Digital Impacts Schema and Taxonomy (DIST)](https://dist.greenweb.org). The Tech Carbon Standard is a Scott Logic project kept for the archive: mention it only as a past achievement in Oliver's biography, without a link.
- **AI use is disclosed.** If you make a material contribution, add a line to the "AI Use Disclosure" section of `README.md` (tool, model, rough scope).

## Where things live

| You want to change… | Edit |
|---|---|
| Homepage copy (hero, services heading, approach teaser, "Start a conversation" band) | Front matter in `content/_index.md` |
| Homepage markup | `layouts/index.html` |
| A service | `content/services/<name>.md` (front matter, see below); speaking is `content/speaking.md` |
| Service index and service page markup | `layouts/services/list.html`, `layouts/services/single.html` |
| About, Approach, Contact | `content/about.md`, `content/approach.md`, `content/contact.md` (front matter) with `layouts/_default/about.html`, `approach.html`, `contact.html` |
| Privacy policy | `content/privacy.md` (update the "Last updated" line) |
| Plain text pages | `content/<name>.md`, rendered by `layouts/_default/single.html` |
| Insights hub | `content/insights.md` (featured page, cronky.net links) with `layouts/_default/insights.html`; published articles are listed automatically |
| Speaking engagements | `data/speaking.yml` (2026 entries copied from cronky.net, newest first), rendered by the `speaking-2026` shortcode in `content/speaking.md`; role counts are computed from it. Replaced by the cronky.net feed later (spec section 9) |
| Articles | `content/articles/<name>.md` (`title`, `date`, `description` as the standfirst, `series`, `topics`, `canonical` if first published elsewhere), rendered by `layouts/articles/single.html` |
| Pragmatic Ecosystems map | Data in `data/ecosystem-map.json`; markup and no-JS fallback in `layouts/shortcodes/ecosystem-map.html`; script `static/js/ecosystem-map.js`; styles under `.eco-` in `main.css`. The Copernican diagram is `layouts/shortcodes/copernican-shift.html` |
| Markdown links | `layouts/_default/_markup/render-link.html`: links to unpublished pages render as plain text; http(s) links open in a new tab |
| Header / nav | `layouts/partials/header.html` |
| Footer | `layouts/partials/footer.html` |
| Page title band and breadcrumbs | `layouts/partials/page-header.html`, `breadcrumbs.html` |
| `<head>` meta, favicon, fonts | `layouts/partials/head.html` |
| Organization JSON-LD | `layouts/partials/schema.html` (built from params; never add the address) |
| 404 page | `layouts/404.html` |
| Styles | `static/css/main.css` (design tokens are CSS custom properties in `:root`) |
| Site-wide params (legal name, email, company number, LinkedIn, description) | `hugo.toml` |
| HTTP headers / caching | `static/_headers` (Cloudflare Pages format) |
| Summary for LLMs that read the site | `static/llms.txt` |

### Content model

The site follows `docs/v2-spec.md`, built in phases. Pages still waiting for copy or for a later phase have `draft: true`: they build with `hugo server -D` but not in production. Nav, footer and service lists only link to pages that exist, so drafts never leave broken links.

- **Home** (`content/_index.md`): `hero`, `services` (label and heading only), `approach` (teaser), `contact`. The `contact` block also feeds the "Start a conversation" band on other pages (`layouts/partials/cta-band.html`).
- **Services**: each page in `content/services/` plus `content/speaking.md` becomes a service card, ordered by `weight`. The "01", "02"… numbers come from position among published services (`layouts/partials/service-number.html`), so a draft never leaves a gap. Front matter: `title`, `weight`, `summary` (card text and page intro), `description` (meta), `who_for`, `engagements` (`title`, `body`, `note`), `outcomes`, `related_topics`, `related_articles` (up to three article paths, shown as "Related reading" cards via `layouts/partials/article-card.html`), `legacy_ids`. Empty lists hide their section.
- **Legacy anchors**: `legacy_ids` keep old links such as `/#fractional-cto` working: the home page card gets the first id plus empty anchors for the rest. `id="contact"`, `id="services"`, `id="approach"` and `id="about"` also stay on the home page. Keep them stable.
- Rendered page content goes through `layouts/partials/content.html`, which strips HTML comments, so `<!-- TODO -->` notes never reach the published source.
- Don't use `type` in front matter (Hugo reserves it for choosing layouts); use a different name such as `article_type`.
- `breadcrumb_parent` (for example `"/insights"`) puts a page under another one in the breadcrumbs and nav highlighting without moving its URL. Pragmatic Ecosystems (`/approach/`) uses it; articles sit under Insights automatically.
- `page_heading` overrides the `<h1>` in the page title band when it should differ from the nav title (Approach does this). `summary` shows under the `<h1>`.

Fields rendered with `markdownify` accept inline Markdown (links, bold): service `engagements[].body` and `.note`, `who_for`, `outcomes`, `approach.md` `body` and `ecosystems` text, `about.md` `body`. Other fields are plain text.
Use `\n\n` inside a quoted YAML string to start a new paragraph in a `markdownify` field. Headings with the `heading-lines` class (home approach and contact headings, `page_heading`) honour `\n` as a line break.

Copy that is missing gets a `# TODO` comment in front matter or `<!-- TODO: copy from Ollie -->` in the body, and `[COPY: ...]` placeholder text only on draft pages.

### Links

Link to pages by their own URL (`/services/`, `/about/`). In templates, prefer `site.GetPage` so the link disappears if the page is a draft.

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

### Photos (`static/images/photos/`)

All photos are Ollie's own or of Ollie. Before committing one:

- strip all metadata, including camera and GPS (`magick in.jpg -auto-orient -strip ...`);
- convert to WebP at the sizes the template uses (the hero uses `<name>-800.webp` and `<name>-1600.webp`; aim for under 160 KB at 1600px);
- don't commit originals, and don't publish photos where other people can be identified without their agreement.

The home hero photo is set by `hero.photo` in `content/_index.md`. The navy shade over it (`.hero::after`) is what keeps the hero text at 4.5:1 or better, so re-measure contrast if you lighten the shade or pick a brighter photo.

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
