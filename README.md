# Cronk Advisory — Public Website

The source code for the [Cronk Advisory Ltd](https://cronkadvisory.com) public website.

> *"Responsible Technology Leadership: Aligning Tech with Sustainability"*

---

## Why is this public?

In line with our values around open source and radical transparency, the full source for this site is available to anyone who wants it. The compiled output is already on the open internet — keeping the source private would be security through obscurity at best, and a bit contrary to everything we stand for at worst.

If you spot something that could be better, you're welcome to raise it.

---

## AI Use Disclosure

AI Use Disclosure - around 3 prompts of Claude Sonnet 4.6 were used to create the initial version of this site (with human review and editing). 
2 Prompts to Google Gemini were used to create the company logo. Meta prompting was used to improve the success rate of the prompts.

---

## How it works

The site is built with [Hugo](https://gohugo.io), a static site generator. Rather than running a traditional CMS — with a database, application server, and all the attack surface and energy consumption that brings — content is written in plain [Markdown](https://www.markdownguide.org/) and Hugo compiles everything into static HTML at build time.

The result is served as flat files with no runtime processing whatsoever.

```
Markdown + HTML templates → Hugo build → Static HTML → CDN
```

This is a considerably more efficient and secure approach for a site of this nature:

- **No database** — nothing to query, nothing to breach
- **No application server** — pages don't get "generated" on each visit
- **Minimal energy footprint** — static files served from a CDN use a fraction of the compute of a dynamic stack (consistent with our [sustainable technology](https://cronkadvisory.com/#sustainability) practice)
- **Fast** — genuinely, measurably fast

Hosting is via [Cloudflare Pages](https://pages.cloudflare.com/), which builds and deploys automatically on push to `main`.

---

## Repository structure

```
.
├── content/          # Site content as Markdown
│   ├── _index.md     # Homepage content and front matter
│   └── privacy.md    # Privacy policy
├── layouts/          # Hugo HTML templates
│   ├── _default/     # Base layout and single-page template
│   ├── index.html    # Homepage template
│   └── partials/     # Reusable components (header, footer, head)
├── static/           # Copied verbatim to the built site
│   ├── css/main.css  # All styles
│   ├── js/main.js    # Minimal JS (mobile nav toggle only)
│   └── images/       # Logos and assets
└── hugo.toml         # Site configuration
```

---

## Running locally

You'll need [Hugo installed](https://gohugo.io/installation/) (the extended edition is fine; this site doesn't require it).

```bash
# Clone the repo
git clone https://github.com/cronky/cronkadvisory-website.git
cd cronkadvisory-website

# Start the local dev server
hugo server -D

# Visit http://localhost:1313
```

Hugo's live-reload dev server means changes to content or templates are reflected in the browser instantly — no build step needed during local development.

To produce the compiled output yourself:

```bash
hugo
# Output lands in /public
```

---

## Making content changes

Almost everything visible on the site lives in `content/_index.md` as structured front matter (YAML). Editing the site means editing Markdown — no GUI, no plugin updates, no surprise database migrations.

The privacy policy lives in `content/privacy.md` and follows the same pattern.

---

## Tech stack summary

| Concern | Choice | Rationale |
|---|---|---|
| Static site generator | [Hugo](https://gohugo.io) | Fast, no runtime dependencies, single binary |
| Hosting & CI/CD | [Cloudflare Pages](https://pages.cloudflare.com/) | Global CDN, builds on push, generous free tier & last time I checked was listed as a green host |
| Fonts | [Google Fonts](https://fonts.google.com/) (Jost + Source Serif 4) | Design consistency |
| JavaScript | Vanilla, ~30 lines | Mobile nav toggle only — nothing else needs it |
| Analytics | Cloudflare Analytics | Very lightweight metrics |
| Cookies | None beyond functional | See the [Privacy Policy](https://cronkadvisory.com/privacy/) |

---

## Licence

The **code and templates** in this repository are available under the [MIT Licence](LICENSE).

The **brand assets** (logos, name, visual identity) and **written content** remain the property of Cronk Advisory Limited and are not included in that licence.

---

## About Cronk Advisory

[Cronk Advisory Ltd](https://cronkadvisory.com) is a technology leadership and architecture consultancy founded by [Oliver Cronk](https://cronkadvisory.com/#about). We work with business and sustainability leaders on fractional CTO engagements, architecture reviews, and responsible AI and sustainable technology practice.

Registered in England and Wales · Company No. 17112535 · [hello@cronkadvisory.com](mailto:hello@cronkadvisory.com)
