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
- **DIST, not the Tech Carbon Standard.** For technology footprint work, reference and link the Green Web Foundation's [Digital Impacts Schema and Taxonomy (DIST)](https://dist.greenweb.org) wherever it fits. The Tech Carbon Standard is a Scott Logic project kept for the archive: mention it only as a past achievement of Oliver's, without a link, worded as "Co-developed and launched (State of Open Con 2024) while leading Scott Logic's Sustainable Technology practice". Never present it as Cronk Advisory work.
- **AI use is disclosed.** If you make a material contribution, add a line to the "AI Use Disclosure" section of `README.md` (tool, model, rough scope).

## Where things live

| You want to change… | Edit |
|---|---|
| Homepage copy (hero, services heading, latest, approach teaser and stack thumbnail, "Start a conversation" band) | Front matter in `content/_index.md` |
| Homepage markup | `layouts/index.html` |
| A service | `content/services/<name>.md` (front matter, see below); speaking is `content/speaking.md` |
| Service index and service page markup | `layouts/services/list.html`, `layouts/services/single.html` |
| About, Approach, Contact | `content/about.md`, `content/approach.md`, `content/contact.md` (front matter) with `layouts/_default/about.html`, `approach.html`, `contact.html` |
| Privacy policy | `content/privacy.md` (update the "Last updated" line) |
| Company information | `content/company.md`; the registration table is the `company-details` shortcode, built from `hugo.toml` params that match Companies House |
| Plain text pages | `content/<name>.md`, rendered by `layouts/_default/single.html` |
| Insights hub | `content/insights.md` (featured page, `feed_blocks` for talks, writing and podcasts) with `layouts/_default/insights.html`; published articles are listed automatically |
| Talks, writing and podcasts | Owned by cronky.net and read from its feed (see "The cronky.net feed" below). Don't copy them into this repo |
| Speaking page lists | `{{< featured-talks >}}` and `{{< speaking-year 2026 >}}` in `content/speaking.md`; `talk_articles` in its front matter links a talk (by feed slug) to an article here; role labels and count wording in `layouts/partials/speaking-roles.html` |
| Cards with icons | `{{< icon-cards formats >}}` renders a front matter list (`title`, `icon`, `body`) as cards; Speaking uses it for `formats` and `topics`. Icons are inline SVG in `layouts/partials/icon.html` (add new ones there, drawn as simple line icons; no icon libraries or fonts). `wide: true` in front matter lets card grids on a plain page use the full width |
| Articles | `content/articles/<name>.md` (`title`, `date`, `description` as the standfirst, `series`, `topics` from the feed vocabulary, `canonical` if first published elsewhere), rendered by `layouts/articles/single.html` and published in `/feeds/insights.json` (see "The articles feed" below) |
| Pragmatic Ecosystems map | Data in `data/ecosystem-map.json`; markup and no-JS fallback in `layouts/shortcodes/ecosystem-map.html`; script `static/js/ecosystem-map.js`; styles under `.eco-` in `main.css`. The Copernican diagram is `layouts/shortcodes/copernican-shift.html` |
| Markdown links | `layouts/_default/_markup/render-link.html`: links to unpublished pages render as plain text; http(s) links open in a new tab |
| Header / nav | `layouts/partials/header.html` |
| Footer | `layouts/partials/footer.html` |
| Page title band and breadcrumbs | `layouts/partials/page-header.html`, `breadcrumbs.html` |
| `<head>` meta, favicon, fonts | `layouts/partials/head.html` |
| Experience (`/work/`) and the home "Selected experience" strip | Entries in `data/experience.yaml` (see "Experience and client confidentiality" below); page intro in `content/work/_index.md`; markup in `layouts/work/list.html` and `layouts/partials/experience/`; filter script `static/js/experience-filter.js` |
| Case studies | `content/work/<slug>.md` with `experience_id` pointing at its entry, rendered by `layouts/work/single.html`; also listed on `/insights/` |
| JSON-LD | `layouts/partials/schema/graph.html`: one `@graph` on every page (`#org`, `#oliver-cronk`, `#website`), plus `Article` for articles and case studies and `Event` for talks on `/work/`. Built from `hugo.toml` params and the experience data; no `Review` markup |
| The one job title for Oliver | `founderTitle` in `hugo.toml` ("Fractional CTO and Chief Architect"): use it in copy, JSON-LD and llms.txt |
| 404 page | `layouts/404.html` |
| Styles | `static/css/main.css` (design tokens are CSS custom properties in `:root`) |
| Site-wide params (legal name, email, company number, LinkedIn, description) | `hugo.toml` |
| HTTP headers / caching | `static/_headers` (Cloudflare Pages format) |
| Summary for LLMs that read the site | `/llms.txt` and `/llms-full.txt`, built by `layouts/index.llms.txt` and `layouts/index.llmsfull.txt` (output formats of the home page) |

### Content model

The site follows `docs/v2-spec.md`, built in phases. Pages still waiting for copy or for a later phase have `draft: true`: they build with `hugo server -D` but not in production. Nav, footer and service lists only link to pages that exist, so drafts never leave broken links.

- **Home** (`content/_index.md`): `hero`, `services` (label and heading only), `latest` (the newest articles plus the latest advisory talk from the feed), `approach` (teaser, and the Pragmatic Ecosystems stack thumbnail from `layouts/partials/ecosystem-stack.html`), `contact`. The `contact` block also feeds the "Start a conversation" band on other pages (`layouts/partials/cta-band.html`).
- **Services**: each page in `content/services/` plus `content/speaking.md` becomes a service card, ordered by `weight`. The "01", "02"… numbers come from position among published services (`layouts/partials/service-number.html`), so a draft never leaves a gap. Front matter: `title`, `weight`, `summary` (card text and page intro), `description` (meta), `who_for`, `engagements` (`title`, `body`, `note`), `outcomes`, `related_topics`, `related_articles` (up to three article paths, shown as "Related reading" cards via `layouts/partials/article-card.html`), `see_also` (`page`, optional `anchor`, `link_label`, `body`: a card pointing to a closely related service), `legacy_ids`. Empty lists hide their section.
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

### Logos (`static/images/logos/`)

Client logos show in colour, at a uniform height on a white tile (or navy, with `logo_on_dark: true`, for light logos), and only when the entry allows it (see below). Convert to WebP or SVG and keep them small.

### Photos (`static/images/photos/`)

All photos are Ollie's own or of Ollie. Before committing one:

- strip all metadata, including camera and GPS (`magick in.jpg -auto-orient -strip ...`);
- convert to WebP at the sizes the template uses (the hero uses `<name>-800.webp` and `<name>-1600.webp`; aim for under 160 KB at 1600px);
- don't commit originals, and don't publish photos where other people can be identified without their agreement.

The home hero photo is set by `hero.photo` in `content/_index.md`. The navy shade over it (`.hero::after`) is what keeps the hero text at 4.5:1 or better, so re-measure contrast if you lighten the shade or pick a brighter photo.

Brand colours (from `main.css`): forest `#3B6352`, navy `#1C2C3A`, amber `#C9893A`, cream `#F7F4EE`. Fonts: Jost (headings), Source Serif 4 (body).

Text must meet WCAG AA contrast (at least 4.5:1). Amber `#C9893A` fails as text on cream or white, so labels on light backgrounds use `--amber-text` (`#935F1E`); keep `--amber` for bars, accents and text on navy. Semi-transparent white text needs at least 60% opacity on navy (65% on the translucent cards) and at least 80% on forest. Check any new colour pair with a contrast checker.

No inline `style=""` attributes or `<style>` blocks in layouts: put styles in `main.css` (a strict Content Security Policy is planned).

## Experience and client confidentiality

`data/experience.yaml` is the single source for client engagements, talks and earlier work. Everything that shows a client (the `/work/` page, the home strip, case studies, JSON-LD, llms.txt) reads it through `layouts/partials/experience/entries.html`, and the display rules live in `layouts/partials/experience/client.html`:

- `display: named` shows the name; it is linked only with `link_permitted: true` and a `url`, and the logo shows only with `logo_permitted: true` and a `logo`.
- `display: sector` shows only `sector_label`. `display: hidden` shows nothing anywhere.
- `approval_status` and `approval_note` are never rendered. A `reference` quote shows only with `permitted: true`.

**Never put an unapproved client's name in the repository**: not in YAML, comments, ids, slugs, file names, alt text or commit messages. Store only the sector label and use a neutral id. The build fails (on Cloudflare too) if a `sector` or `hidden` entry has a `name`, `url` or `logo`, if a rendered field still says `TODO`, or if a published case study points at a hidden entry. After building, `python3 scripts/check-private-names` checks `public/` against the names in `docs/private-names.txt` (git-ignored).

Speaking entries take their title, date and event from the cronky.net feed by `feed_slug`, so talk details aren't duplicated here. Work before March 2026 is `type: prior` and is always labelled "Before Cronk Advisory".

## Working locally

```bash
hugo server -D            # http://localhost:1313, live reload
hugo                      # build to ./public (git-ignored; Cloudflare builds its own)
```

Cloudflare Pages builds with **Hugo 0.158.0** (the `HUGO_VERSION` variable in the Pages settings). Build locally with the same version, and if you upgrade Hugo, ask the owner to update that variable first: a feature your local Hugo has and Cloudflare's doesn't fails the deploy, not the local build. Templates use `site.Data` (logged as deprecated at INFO level only), which also builds on older Hugo.

### The cronky.net feed

Talks, writing and podcasts come from `https://cronky.net/feeds/advisory.json` (spec section 9), fetched at build time by `layouts/partials/insights-feed.html`:

- If cronky.net is unreachable or the feed is invalid, the build uses `data/insights-snapshot.json` and prints a warning, so it still deploys. Refresh the snapshot with `sh scripts/refresh-insights` and commit it when it changes.
- Item images and YouTube thumbnails are fetched at build time and published under `/images/feed/` as 480px WebP (`feed-image.html`), so visitors make no third-party requests. Don't hotlink feed images.
- `insight-list.html` renders a filtered list (type, topics, advisory, featured, limit) as `talk-card.html` cards or a link list; service pages use it for "Related talks" and "Related writing" by `related_topics`.
- Only items cronky.net flags `advisory: true` show, except role counts, which use every talk. Talks before March 2026 predate the company: present them as Oliver's track record, not Cronk Advisory work.
- Remote fetches are cached for 15 minutes locally (`[caches.getresource]` in `hugo.toml`). A failed image fetch warns, which fails `--panicOnWarning`; rerun when cronky.net is back.

### The articles feed (`/feeds/insights.json`)

This site also publishes a feed the other way, so cronky.net's build can list our articles on its `/writing/` page. It is an output format of `content/insights.md` (`layouts/_default/insights.insightsfeed.json`), and `layouts/partials/published-articles.html` supplies the same list as `/insights/`, so the two can't drift. Don't hand-build its strings.

Each article gives `slug`, `title`, `date` (byline date, `YYYY-MM-DD`), `url` (absolute, on this site), `summary` (`description`, plain text), `topics`, `category` (`series`) and `first_published_at` (`canonical`, or `null`), under `schema_version: 1` and `generated`. Newest first; drafts and future dates are left out.

- **Every article needs `topics` from cronky.net's vocabulary**: architecture, ai, sustainability, open-source, software-engineering, apis, events-podcasting, nature, cycling, photography. Anything else fails the `hugo` build (`articleTopics` in `hugo.toml`), and cronky.net's CI would fail on it too. Our themes (AI Sleepwalking and so on) go in `series`, not `topics`. If the vocabulary changes, update `hugo.toml` and `scripts/check-insights-feed`.
- `.github/workflows/insights-feed.yml` runs `scripts/check-insights-feed` on the built file for pull requests and pushes to `main`. It checks only; Cloudflare Pages still does the deploy.
- cronky.net only sees new articles when it rebuilds. `.github/workflows/cronky-net-rebuild.yml` handles that: after a push that touches articles, and once a day, it reads the live feed, hashes it without `generated` and compares that with the last hash in `actions/cache`. If it changed, it POSTs to cronky.net's Cloudflare Pages deploy hook (secret `CRONKY_DEPLOY_HOOK`), the mirror of `CA_DEPLOY_HOOK` on the cronky.net side. An article dated in the future joins the feed only at the first Cloudflare build on or after its date, so it needs a deploy of this site that day.

There are no tests. Before finishing a change:

1. `hugo` builds with no errors or warnings.
2. Check the homepage and `/privacy/` at desktop and ~375px mobile width (no horizontal scroll, nav toggle works).
3. Check no empty or broken links were introduced (`href=""`, `https://https://`, missing images).

## Git

- `main` is production. Prefer a branch and PR for anything beyond a typo fix, and let the owner merge.
- Don't commit `public/`, `resources/_gen/` or editor folders (see `.gitignore`).
