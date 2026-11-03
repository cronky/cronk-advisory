# Cronk Advisory: Public Website

The source code for the [Cronk Advisory Ltd](https://cronkadvisory.com) public website.

> *"Responsible Technology Leadership: Aligning Tech with Sustainability"*

---

## Why is this public?

In line with our values around open source and radical transparency, the full source for this site is available to anyone who wants it. The compiled output is already on the open internet: keeping the source private would be security through obscurity at best, and a bit contrary to everything we stand for at worst.

If you spot something that could be better, you're welcome to raise it.

---

## AI Use Disclosure

Around 3 prompts of Claude Sonnet 4.6 were used to create the initial version of this site (with subsequent human review and editing). 
2 Prompts to Google Gemini were used to create the company logo. Meta prompting (using AI to create better prompts rather than just riffing) was used to improve the success rate of the all of these prompts.
1 Prompt to Claude Sonnet 4.6 was used to create the first version of this readme from the GitHub content.
In October 2026 one Claude Code session (Claude Opus 5.5) was used to review the site, fix a few bugs (missing favicon, broken links, footer anchors), make the logo backgrounds transparent and write the AI agent guidance (`AGENTS.md`) and `llms.txt` (with human review).
A further Claude Code session (Claude Opus 5.5) carried out Phase 0 of the v2 spec: colour contrast fixes for WCAG AA, moving inline styles into `main.css`, and minor housekeeping (with human review).
The same session built Phase 2 of the v2 spec: the multi-page structure, page templates, navigation, breadcrumbs, metadata and JSON-LD. Page copy was moved from the existing site rather than written by AI; the Pragmatic Ecosystems section is a placeholder that rearranges existing copy until the owner replaces it (with human review).
The Pragmatic Ecosystems page, its interactive ecosystem map and four articles were drafted with Claude (claude.ai) under the owner's direction; the same Claude Code session ported the map into Hugo (shortcode, script, styles, no-JS fallback) and added the article layouts (with human review).
When the owner published the articles, the same session added the context-stack diagram, cross-links between the articles and the Pragmatic Ecosystems page, typo and consistency fixes, and the AI-use footnotes on each article; for the reference architecture piece it also cleaned the three diagrams (Claude-generated SVGs, metadata and inline styles removed), checked the protocol dates and added the lethal trifecta reference. The owner wrote and edited the article text.
The same session drafted the Pragmatic AI service copy from the owner's articles and the Speaking page from cronky.net, added related reading to the service pages and a 2026 engagements list, and drafted the DIST categories overview on the Sustainable Technology page from dist.greenweb.org, for the owner to review and approve before merging. It then built the Cronk Advisory side of the cronky.net content feed (build-time fetch with a snapshot fallback, local talk images, and the talk lists on Speaking, Insights and the service pages), drafted the Responsible Technology section of the Sustainable Technology page from the articles, and turned the Speaking formats and topics into icon cards.
A Claude Code session (Claude Opus 5.5) in November 2026 built the Experience section (`/work/`, its data model, client display rules and confidentiality build check), case study templates, the site-wide JSON-LD graph and the generated `llms.txt` and `llms-full.txt`; it drafted the experience summaries from the owner's brief and existing site content, the About opening sentence and the speaking photo captions, and converted the owner's photos and client logos (with human review).
A further Claude Code session (Claude Opus 5.5) built the `/feeds/insights.json` articles feed for cronky.net, its CI check and the workflow that triggers a cronky.net rebuild when the feed changes (with human review).

---

## How it works

The site is built with [Hugo](https://gohugo.io), a static site generator. Rather than running a traditional CMS : with a database, application server, and all the attack surface and energy consumption that brings : content is written in plain [Markdown](https://www.markdownguide.org/) and Hugo compiles everything into static HTML at build time.

The result is served as flat files with no runtime processing whatsoever.

```
Markdown + HTML templates → Hugo build → Static HTML → CDN
```

This is a considerably more efficient and secure approach for a site of this nature:

- **No database** : nothing to query, nothing to breach
- **No application server** : pages don't get "generated" on each visit
- **Minimal energy footprint** : static files served from a CDN use a fraction of the compute of a dynamic stack (consistent with our [sustainable technology](https://cronkadvisory.com/services/sustainable-technology/) practice)
- **Fast** : genuinely, measurably fast

Hosting is via [Cloudflare Pages](https://pages.cloudflare.com/), which builds and deploys automatically on push to `main`.

---

## Repository structure

```
.
├── AGENTS.md         # Guidance for AI coding agents (CLAUDE.md points here)
├── docs/v2-spec.md   # Build spec for the multi-page site (phased)
├── content/          # Site content as Markdown
│   ├── _index.md     # Homepage content and front matter
│   ├── services/     # One page per service, plus the services index
│   └── *.md          # About, approach, contact, speaking, privacy and other pages
├── layouts/          # Hugo HTML templates
│   ├── _default/     # Base layout, generic page/list and the about/approach/contact layouts
│   ├── services/     # Services index and service page templates
│   ├── index.html    # Homepage template
│   ├── 404.html      # Not found page
│   └── partials/     # Header, footer, head, page header, breadcrumbs, cards, JSON-LD
├── static/           # Copied verbatim to the built site
│   ├── css/main.css  # All styles
│   ├── js/main.js    # Minimal JS (mobile nav toggle only)
│   ├── images/       # Logos (transparent PNGs) and icons
│   ├── llms.txt      # Plain-text site summary for LLMs (llmstxt.org)
│   └── _headers      # Cloudflare Pages security and cache headers
└── hugo.toml         # Site configuration
```

---

## Running locally

You'll need [Hugo installed](https://gohugo.io/installation/) (the extended edition is fine; this site doesn't require it).

```bash
# Clone the repo
git clone https://github.com/cronky/cronk-advisory.git
cd cronk-advisory

# Start the local dev server
hugo server -D

# Visit http://localhost:1313
```

Hugo's live-reload dev server means changes to content or templates are reflected in the browser instantly : no build step needed during local development.

To produce the compiled output yourself:

```bash
hugo
# Output lands in /public
```

---

## Making content changes

Almost everything visible on the site lives in `content/` as Markdown with structured front matter (YAML): the home page in `content/_index.md`, services in `content/services/`, and one file per other page. Editing the site means editing Markdown : no GUI, no plugin updates, no surprise database migrations.

The privacy policy lives in `content/privacy.md` and follows the same pattern.

If you change services, biography or contact details, update `static/llms.txt` to match: it's the plain-text summary offered to LLMs and AI agents that read the site.

Talks, writing and podcasts aren't edited here: they come from [cronky.net](https://cronky.net)'s feed at build time, and only items flagged `advisory: true` there appear. If cronky.net is down, the build falls back to `data/insights-snapshot.json`. Refresh it now and then (Git Bash on Windows) and commit the result:

```bash
sh scripts/refresh-insights
```

Articles go the other way: the build publishes them at `/feeds/insights.json`, generated from the same list as `/insights/`, for cronky.net to read when it builds. Each article's `topics` must come from cronky.net's vocabulary (architecture, ai, sustainability, open-source, software-engineering, apis, events-podcasting, nature, cycling, photography), or the build fails. Our own themes go in `series`, which the feed publishes as `category`. A GitHub Actions workflow checks the built feed on every pull request and push to `main`. Another watches the live feed and, when its content changes, triggers a cronky.net rebuild through a Cloudflare Pages deploy hook (repository secret `CRONKY_DEPLOY_HOOK`). The feed's shape and rules are in [`AGENTS.md`](AGENTS.md).

---

## Working with AI agents

[`AGENTS.md`](AGENTS.md) holds the conventions for AI coding agents working on this repo: where things live, the content model, brand assets, the "keep it static and lightweight" principles and how to check a change before it goes live. `CLAUDE.md` simply imports it, so Claude Code and other agents read the same guidance.

---

## Tech stack summary

| Concern | Choice | Rationale |
|---|---|---|
| Static site generator | [Hugo](https://gohugo.io) | Fast, no runtime dependencies, single binary |
| Hosting & CI/CD | [Cloudflare Pages](https://pages.cloudflare.com/) | Global CDN, builds on push, generous free tier & last time I checked was listed as a green host |
| Fonts | [Google Fonts](https://fonts.google.com/) (Jost + Source Serif 4) | Design consistency |
| JavaScript | Vanilla, ~30 lines | Mobile nav toggle only : nothing else needs it |
| Analytics | Cloudflare Analytics | Very lightweight metrics |
| Cookies | None beyond functional | See the [Privacy Policy](https://cronkadvisory.com/privacy/) |

---

## Licence

The **code and templates** in this repository are available under the [MIT Licence](LICENSE).

The **brand assets** (logos, name, visual identity) and **written content** remain the property of Cronk Advisory Limited and are not included in that licence.

---

## About Cronk Advisory

[Cronk Advisory Ltd](https://cronkadvisory.com) is a technology leadership and architecture consultancy founded by [Oliver Cronk](https://cronkadvisory.com/about/). We work with business and sustainability leaders on fractional CTO engagements, architecture reviews, and responsible AI and sustainable technology practice.

Registered in England and Wales · Company No. 17112535 · [hello@cronkadvisory.com](mailto:hello@cronkadvisory.com)
