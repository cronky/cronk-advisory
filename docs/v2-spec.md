# Cronk Advisory website v2: multi-page build spec

| | |
|---|---|
| Owner | Oliver Cronk |
| Repos | [cronky/cronk-advisory](https://github.com/cronky/cronk-advisory) (Hugo), [cronky/cronky-dot-net](https://github.com/cronky/cronky-dot-net) (Jekyll) |
| Status | Draft for build, 27 October 2026 |
| Intended executor | Claude Code, one phase per branch and PR, owner merges |

**For the agent:** read `AGENTS.md` first and follow it. This spec adds to it; where they conflict, ask. Marketing copy, biography, client names and credentials come from Ollie. Where copy is missing, build the structure and leave a visible `<!-- TODO: copy from Ollie -->` plus placeholder text such as `[COPY: one-line summary]`. Never invent claims.

---

## 1. Goals and non-goals

**Goals**

1. Move from a single long page to a small multi-page site that a buyer, an event organiser or a procurement team can each navigate quickly. Create an area for articles and thought leadership with links to external content (cronky.net, architectureandgovernance, architecttomorrow etc)
2. Rebalance the offer: chief and enterprise architecture, pragmatic AI, and speaking and facilitation sit alongside sustainable technology, with sustainability as a thread running through all of them rather than the headline.
3. Meet UK company website disclosure requirements and publish governance policies that procurement teams look for.
4. Show credibility through evidence: clients, organisations, talks, writing and podcasts, pulled from cronky.net rather than copied.
5. Port the quality refinements already proven on cronky.net (security headers, accessibility, transparency pages, CI).

**Non-goals**

- No CMS, framework, bundler, analytics, cookies or third-party embeds (unchanged from `AGENTS.md`).
- No high-volume blog: a small set of substantive articles in `content/articles/`. Other long-form writing stays on cronky.net and external outlets.

**Search** is wanted (owner decision, 27 October 2026), mainly for the insights area. Build it with Phase 5, once there is content to search. Choose between Pagefind (needs a post-build step on Cloudflare Pages) and a Hugo-generated JSON index with a small vanilla script, keeping within the no-framework, no-bundler principles.
- No dark mode for now (optional later).

**Later visual:** the drivers, activities and impacts diagram (the "technology socio-environmental system" prototype) would suit the Sustainable Technology service page once its impact categories are mapped to DIST's lifecycle categories (Upstream, Operational direct and indirect, Downstream).

---

## 2. Decisions already made

| Topic | Decision |
|---|---|
| Registered office | Show the home registered office in the footer only, in small print that still meets WCAG AA contrast. Label it "Registered office (not a trading address)". Do not put it in JSON-LD, maps or contact page. |
| VAT | Not registered yet. Add an optional `vatNumber` param that renders in the footer only when set. |
| Organisations | Three groups, clearly labelled: **Clients** (logos, with written permission), **Oliver's previous roles** (text list), **Spoken at** (logos, text-only for HM Treasury and Gartner). |
| SEGRO | Not named anywhere. Anonymised mention only if Ollie confirms the NDA allows it. |
| Modern slavery policy | Publish (HTML page plus PDF) once the reporting route is fixed (see section 7.3). |
| Content source of truth | cronky.net owns talks, writing and podcasts. This site shows a curated, flagged subset via a JSON feed. |
| Footprint framework | Promote DIST (Digital Impacts Schema and Taxonomy, Green Web Foundation). The Tech Carbon Standard is a Scott Logic project kept for the archive: mention only as a past achievement in the biography, without a link. |
| Services | Four: Chief and Enterprise Architecture; Pragmatic AI; Sustainable and Responsible Technology; Speaking, Chairing and Facilitation. |
| Format for policies | HTML page is primary (accessible, searchable). PDF is an optional download. |

---

## 3. Questions for Ollie, answered

Leave these as TODOs in the build; do not guess.

1. **Fonts:** self-host trimmed Jost and Source Serif 4. Yes.
2. **Registered office:** exact address text as it appears on Companies House. Yes.
3. **Previous roles text list:** Take the last 6 company roles from my LinkedIn. We also need to think about listing my afflations / volunteer roles - Chief Architect Network, GDSA, BAF etc
4. **Client logo permissions:** written OK from Sustain3, Planetary Solvency and Green Web Foundation (record the date in `data/organisations.yml`). Can use Planetary Solvency from November 2nd. GWF I already have the ok (they name me on their website). Realised we should also add Environment Analyst (have some nice quote from them)
I have permission from Stuart at Sustain3 to use their logo and link it to their website.
5. **Green Web Foundation:** Ollie works with GWF on DIST and GWF is also a client. Decide how to describe this so the relationship is transparent. Answer - this is one of the same thing - DIST is the pro bono work I do for GWF.
6. **Policies:** anti-bribery and environmental policies (being drafted); a reporting address that goes to Kathryn only. 
Answer: a dedicated reporting address for Kathryn (in `docs/v2-spec-private.md`, which is git-ignored). Display it slightly obfuscated so a human has to work out the address, and do not make it a `mailto:` link.
7. **Speaking fees:** "on request", or also mention a community and charity rate? 
Answer - community and charity - no fee, travel costs appreciated, commercial events POA but note a discount if sustainability related.
8. **Testimonials:** any quotes from clients or event organisers, with permission to publish and attribute.
Answer: an event organiser quote (Environment Analyst, attribution pending) and a set of LinkedIn recommendations are recorded in `docs/v2-spec-private.md` (git-ignored, ask Ollie if missing). Only publish a quote once its author has agreed to it being published and attributed.

9. **Hero and services copy:** to be drafted in claude.ai and approved by Ollie before Phase 3 merges.
10. **HSTS preload:** confirm every subdomain of cronkadvisory.com serves HTTPS before adding `includeSubDomains; preload`. 
Yes all subdomains will use HTTPS.

---

## 4. Information architecture

### 4.1 Sitemap

| URL | Page | Purpose | Main source |
|---|---|---|---|
| `/` | Home | Positioning, four service teasers, client logo strip, latest talk or article, CTA | `content/_index.md` |
| `/services/` | Services | Overview of all four services | `content/services/_index.md` |
| `/services/chief-architecture/` | Chief and Enterprise Architecture | Fractional chief architect or CTO, architecture review, EA function set-up and maturity, governance that enables | service front matter |
| `/services/pragmatic-ai/` | Pragmatic AI | AI readiness, stress-testing AI investment, agentic AI governance, right-sized AI | service front matter |
| `/services/sustainable-technology/` | Sustainable and Responsible Technology | Footprint measurement (DIST), procurement, responsible AI | service front matter |
| `/speaking/` | Speaking, Chairing and Facilitation | Formats, topics, evidence, booking | `content/speaking.md` + feed |
| `/approach/` | Approach | Pragmatic Ecosystems, with the interactive ecosystem map | `content/approach.md` (`layout: approach`, `ecosystem-map` and `copernican-shift` shortcodes) |
| `/work/` | Clients and organisations | Clients, previous roles, spoken at, short case studies when available | `data/organisations.yml` |
| `/insights/` | Insights | Curated talks, writing and podcasts, linking to cronky.net for the full archive, plus Cronk Advisory articles | feed + `content/articles/` |
| `/articles/` | Articles | Cronk Advisory-authored articles, canonical here. cronky.net lists them via `_data/writing.yml` with `outlet: Cronk Advisory`. Articles first published elsewhere set `canonical` to the original URL | `content/articles/` |
| `/about/` | About | Oliver, credentials, partner network | `content/about.md` |
| `/contact/` | Contact | Email, LinkedIn, what to include in an enquiry | `content/contact.md` |
| `/company/` | Company information | Legal name, number, registered office, directors, VAT (when set), links to policies | `content/company.md` + params |
| `/governance/` | Governance and policies | Hub listing the policies below | `content/governance/_index.md` |
| `/governance/modern-slavery/` | Anti-Slavery and Human Trafficking Policy | Voluntary policy | from the PDF |
| `/governance/anti-bribery/` | Anti-Bribery and Corruption Policy | When drafted | TODO |
| `/governance/environment/` | Environmental and Sustainability Policy | When drafted | TODO |
| `/privacy/` | Privacy notice | Rewritten (see 7.2) | `content/privacy.md` |
| `/accessibility/` | Accessibility statement | WCAG 2.2 AA target, known issues | new |
| `/about-this-site/` | About this website | How it is built, lightweight, secure, responsible AI use | new |
| `/404.html` | Not found | Helpful links | new |

Machine-readable files: `/sitemap.xml` (Hugo default), `/robots.txt`, `/llms.txt` (update), `/.well-known/security.txt`, `/carbon.txt`.

### 4.2 Navigation

Header: **Services** · **Speaking** · **Work** · **Insights** · **About** · **Get in touch** (CTA to `/contact/`).
Highlight the current section with `aria-current="page"`.

Footer columns: Brand and legal small print · Services (four links) · Company (About, Approach, Work, Insights, Company information, Governance, Privacy, Accessibility, About this site) · Contact (email, LinkedIn, location line, "Personal site: cronky.net", Architect Tomorrow).

### 4.3 Old links

Fragment links such as `/#fractional-cto` cannot be redirected server-side. On the home page, keep the existing ids on the matching service teaser (`fractional-cto` and `advisory` on Chief Architecture, `sustainability` on Sustainable Technology) using extra empty anchor elements where a card needs two ids. Keep `id="contact"` on the home CTA band. Update every internal link and `llms.txt` to the new URLs.

---

## 5. Content model (Hugo)

### 5.1 Directory layout

```
content/
  _index.md                 # home
  services/
    _index.md
    chief-architecture.md
    pragmatic-ai.md
    sustainable-technology.md
  speaking.md               # layout: speaking
  approach.md               # layout: approach, with the ecosystem-map shortcode
  articles/                 # Cronk Advisory articles (draft until approved)
  work.md                   # layout: work
  insights.md               # layout: insights
  about.md
  contact.md
  company.md                # layout: company
  governance/
    _index.md
    modern-slavery.md
    anti-bribery.md         # draft: true until approved
    environment.md          # draft: true until approved
  privacy.md
  accessibility.md
  about-this-site.md
data/
  ecosystem-map.json        # layers and sector viewpoints for the Pragmatic Ecosystems map
  organisations.yml
  insights-snapshot.json    # fallback copy of the cronky.net feed
layouts/
  _default/ baseof, single, list
  services/ list, single
  partials/ header, footer, head, schema, logo-strip, talk-card, video-facade, insight-list, breadcrumbs
  speaking.html, work.html, insights.html, company.html (via `layout:` front matter)
static/
  fonts/                    # if self-hosting (decision 3.1)
  images/logos/             # optimised SVG or WebP, monochrome treatment via CSS
  policies/                 # PDFs
  .well-known/security.txt
  carbon.txt
```

### 5.2 Site params (`hugo.toml`)

```toml
[params]
  legalName        = "Cronk Advisory Limited"
  companyNumber    = "17112535"
  registeredIn     = "England and Wales"
  registeredOffice = "TODO: exact Companies House address"   # footer and /company/ only
  vatNumber        = ""                                       # renders only when non-empty
  email            = "hello@cronkadvisory.com"
  linkedin         = "TODO"
  personalSite     = "https://cronky.net/"
  insightsFeed     = "https://cronky.net/feeds/advisory.json"
```

### 5.3 Service front matter

```yaml
---
title: "Chief and Enterprise Architecture"
number: "01"
weight: 1
summary: "[COPY: one line for the home teaser and services index]"
description: "[COPY: meta description, under 155 characters]"
who_for: ["[COPY]"]              # bullet list: who this is for
engagements:                     # typical shapes of work
  - title: "[COPY]"
    body: "[COPY]"
outcomes: ["[COPY]"]
related_topics: [architecture]   # pulls matching flagged talks and writing from the feed
legacy_ids: [fractional-cto, advisory]
---
[COPY: body]
```

Each service page ends with: related talks and writing (from the feed, by `related_topics`, max 3), then a CTA to `/contact/`.

### 5.4 `data/organisations.yml`

```yaml
clients:
  - name: Planetary Solvency
    url: TODO
    logo: /images/logos/planetary-solvency.svg
    permission: null          # ISO date once written OK received; logo only renders when set
  - name: Sustain3
    url: TODO
    logo: /images/logos/sustain3.svg
    permission: null
  - name: Green Web Foundation
    url: https://www.thegreenwebfoundation.org/
    logo: /images/logos/green-web-foundation.svg
    permission: null
    note: "TODO: wording for the DIST relationship (question 3.5)"

previous_roles:               # text only, no logos
  - { organisation: Scott Logic, role: Technology Director }
  - { organisation: Deloitte Risk Advisory UK, role: "Chief Architect / Deputy CTO" }
  - { organisation: Tanium, role: Chief Architect }
  # TODO: confirm full list with Ollie

spoken_at:
  - { name: HM Treasury, display: text }
  - { name: Gartner, display: text }
  - { name: BCS, logo: /images/logos/bcs.webp }
  - { name: Chief Architect Network, logo: /images/logos/chief-architect-network.webp }
  - { name: Green IO, logo: /images/logos/green-io.webp }
  # Source logos from cronky-dot-net/assets/img/logos/. Add FINOS, Business Architecture Forum,
  # Data Centre World and others as Ollie confirms.
```

Rules for the logo partial:

- A client logo renders only when `permission` is set; otherwise show the name as text.
- `display: text` always renders as text.
- Uniform treatment: same height box, greyscale by default, original colour on hover or focus, real `alt` text with the organisation name.
- Caption under each group stating what it means ("Clients of Cronk Advisory", "Events and organisations Oliver has spoken at").
- Credit line on `/work/` and `/about-this-site/`: "Logos belong to their respective owners and are used to identify them."

---

## 6. Page requirements

### 6.1 Home

Shorter than today. Order: hero · four service teaser cards (link to each service page) · client logo strip (only permitted logos, else hidden) · "Latest" (one talk and one article from the feed) · approach teaser (two sentences, link to `/approach/`) · CTA band (`id="contact"`).
Hero copy is TODO (Ollie to choose a direction). Keep the "Founded by" card.

### 6.2 Service pages

Layout: breadcrumb · title and summary · who it is for · typical engagements · outcomes · body · related talks and writing · CTA. Use the existing service card styling for the index.

### 6.3 Speaking (`/speaking/`)

This is a commercial page for event organisers, not an archive.

1. **Intro:** [COPY] what Ollie offers on stage and in the room.
2. **Formats:** keynote, talk, panel chair, MC and host, roundtable facilitation, workshop, live podcast recording, in-house sessions and away days, podcast guest.
3. **Topics:** four areas from the cronky.net media kit (architecture, AI, sustainable technology, open source and responsible tech), plus current signature talks (for example "The AI Efficiency Fallacy").
4. **Evidence:**
   - Counts computed at build time from the feed by `role` (for example total appearances, panels chaired or joined, keynotes). No hard-coded numbers.
   - Three to six featured talks with click-to-load video facades.
   - "Spoken at" logo strip.
   - Testimonials when available (TODO).
5. **Practicalities:** in person across the UK and Europe and online; travel approach links to the environmental policy once published.
6. **Booking:** email `hello@cronkadvisory.com` with subject "Speaking enquiry"; list what to include (date, audience, format, length, fee or budget, whether it is a community or charity event). Link to the cronky.net media kit for bios and headshots.

### 6.4 Insights (`/insights/`)

Three blocks (Talks, Writing, Podcasts), each showing the most recent flagged items (default 6) with date, venue or outlet, and a link to the item's page on cronky.net or the outlet. End with "Full archive on cronky.net". Present pre-2026 talks as Oliver's track record, not as Cronk Advisory work.

### 6.5 Work (`/work/`)

Clients · short case studies (placeholder section, hidden until content exists) · previous roles (text) · spoken at (logos).

### 6.6 About, Approach, Contact

- **About:** move current about copy and the previous positions and community links. Add credentials from the media kit (BCS CITP, Chief Architect Network UK co-lead, Green Software Foundation Champion) only after Ollie confirms. Link to cronky.net for the personal story.
- **Approach:** current approach copy and pillars.
- **Contact:** email, LinkedIn, the "no obligation" copy, what to include in an enquiry. No address.

### 6.7 Company information (`/company/`)

Legal name, company number, registered in, registered office, directors (TODO: confirm listing both directors), VAT number when set, links to governance policies, privacy and security.txt.

---

## 7. Compliance and governance

### 7.1 Footer disclosures (all pages)

```
Cronk Advisory Limited · Registered in England and Wales · Company No. 17112535
Registered office (not a trading address): {{ registeredOffice }}
VAT No. {{ vatNumber }}            ← only when set
```

Keep it small, but every footer text colour must reach at least 4.5:1 against navy. See 8.2.

### 7.2 Privacy notice rewrite

Content to be drafted with Ollie; the agent builds the page. It must cover: controller identity and contact; what is collected (email enquiries; Cloudflare's server logs if applicable, TODO confirm); lawful basis (legitimate interests for enquiries, contract for clients); retention; recipients and processors (email provider TODO, Cloudflare); international transfers; rights; the right to complain to the ICO; cookies (none); date of last update. If fonts move to self-hosting, remove any mention of Google.

### 7.3 Governance policies

- Convert the modern slavery PDF to `content/governance/modern-slavery.md`, keeping its structure, tables and document control section. Put the PDF in `static/policies/`.
- **Before publishing**, Ollie fixes section 8.1: the alternative route must reach Kathryn only, not `hello@`, and the primary route needs an actual email address. The agent must not publish while this TODO is open.
- Section 11 references Anti-Bribery and Environmental policies as public. Until they exist, either publish them as drafts hidden from build (`draft: true`) and remove the links, or hold the whole governance hub.
- Each policy page shows: version, effective date, next review, owner, approver, and a "Download PDF" link.

### 7.4 security.txt

Copy the cronky.net pattern: `Contact: mailto:hello@cronkadvisory.com`, `Expires` at most a year ahead, `Preferred-Languages: en`, `Canonical: https://cronkadvisory.com/.well-known/security.txt`. Add a README note to renew each October.

### 7.5 carbon.txt

Publish `/carbon.txt` in the current carbon.txt syntax (check the spec and validator at [carbontxt.org](https://carbontxt.org) before writing). It should list Cloudflare as the upstream hosting provider and link to the environmental policy and any published footprint disclosure. Validate before merging.

---

## 8. Ported refinements from cronky.net

### 8.1 Security headers (`static/_headers`)

Start from cronky.net's `_headers` and adapt:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; frame-src https://www.youtube-nocookie.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests
  Cross-Origin-Opener-Policy: same-origin
  Strict-Transport-Security: max-age=63072000; includeSubDomains   # add "; preload" only after question 3.10
```

- `style-src 'self'` requires removing every inline `style=""` attribute and the `<style>` block in `single.html` (move to `main.css`). If any must stay, use `'unsafe-inline'` and note why.
- Version CSS and JS URLs (for example `?v={{ now.Unix }}` or Hugo fingerprinting) so the immutable cache headers are safe.
- If fonts stay on Google, CSP must allow `fonts.googleapis.com` and `fonts.gstatic.com`. Preferred: self-host.

### 8.2 Accessibility (target WCAG 2.2 AA)

Known contrast failures to fix now:

| Element | Current | Problem | Fix |
|---|---|---|---|
| `.footer-reg`, `.footer-legal` | white at 22% on navy | about 2:1 | at least 55 to 60% |
| `.footer-col-title` | white at 28% on navy | fails | at least 60% |
| `.footer-links` | white at 42% on navy | about 3.8:1 | at least 60% |
| `.hero .label` | white at 35% on navy | fails | at least 60% |
| `.contact-sub`, `.contact-location`, contact label | white at 40 to 50% on forest | fails | check and raise |
| `.label` (amber `#C9893A`) on cream or white | about 2.7:1 for 11px text | fails | add a darker text amber token (for example `--amber-text`) for labels on light backgrounds; keep `#C9893A` for bars and on navy |

Measure every change with a contrast checker; record the results in the accessibility statement.

Also: a skip link; visible focus styles; `aria-controls` on the nav toggle; `prefers-reduced-motion` for smooth scroll; meaningful `alt` text; headings in order on every page.

### 8.3 Fonts

If decision 3.1 is "self-host": WOFF2, latin subset, only the weights in use (likely Jost 600, 700 and 800; Source Serif 4 400, 400 italic and 600, or the variable fonts if smaller). Add `font-display: swap` and preload the body font. Remove the Google preconnects. Today the site requests 11 font variants, so trim to what the CSS actually uses.

### 8.4 SEO and metadata

- Per-page `title` and `description`; `og:image` (1200 × 630 default in `static/images/og-default.png`, TODO artwork); `twitter:card`; canonical link.
- JSON-LD `Organization` (legal name, URL, logo, email, `founder` as a `Person` with `sameAs` cronky.net and LinkedIn). **No address in structured data.** Generate from params, not hard-coded.
- Update `llms.txt` for the new URLs and the four services.
- `enableRobotsTXT = true`; check `sitemap.xml` excludes drafts.

### 8.5 Video facades

Port cronky.net's `video-facade.html` approach: a local thumbnail with a play button that swaps in a `youtube-nocookie.com` iframe only on click. Thumbnails are fetched at build time (see 9.2), so no third-party request happens on page load.

### 8.6 Transparency pages

- **About this site:** adapt cronky.net's page (static, lightweight, secure, no cookies or analytics, Cloudflare in the Green Web Foundation's green hosting directory, responsible AI use with human direction and review). Include the page weight of the home page, measured not guessed.
- **Accessibility statement:** WCAG 2.2 AA target, how tested, known issues, contact.
- Keep the README "AI Use Disclosure" section up to date (already required by `AGENTS.md`).

### 8.7 CI (`.github/workflows/`)

- `build.yml`: pinned Hugo extended version, `hugo --panicOnWarning`, then HTML-Proofer for internal links and images.
- `links.yml`: weekly external link check (non-blocking, opens an issue).
- Pin the same Hugo version in Cloudflare Pages via `HUGO_VERSION`.

### 8.8 Housekeeping

- Add `.hugo_build.lock` to `.gitignore` and remove it from the repo.
- Fix "co developed" to "co-developed". Decided: reference DIST (Digital Impacts Schema and Taxonomy, https://dist.greenweb.org) instead of the Tech Carbon Standard. TCS stays only as a past achievement in Oliver's biography, unlinked.
- Update `AGENTS.md` "Where things live" and the README repository structure for the new layout.

---

## 9. Cross-site content feed

### 9.1 cronky.net changes (Jekyll repo)

1. Add an optional `advisory: true` flag to:
   - `_speaking/*.md` front matter;
   - entries in `_data/writing.yml` and `_data/podcasts.yml`.
   Document it in the README and `AI.md` content model.
2. Add `feeds/advisory.json` (Liquid template, `permalink: /feeds/advisory.json`) with this shape:

```json
{
  "schema_version": 1,
  "generated": "2026-10-27T12:00:00Z",
  "speaking": [
    {
      "slug": "2025-hm-treasury-id25",
      "title": "Balancing AI Innovation and Sustainability",
      "date": "2025-11-12",
      "date_precision": "month",
      "event": "HM Treasury Innovation Day 2025 (ID25)",
      "location": "London, UK",
      "role": "talk",
      "topics": ["ai", "sustainability"],
      "featured": true,
      "advisory": true,
      "url": "https://cronky.net/speaking/2025-hm-treasury-id25/",
      "youtube_id": "cOFNzhathnU",
      "image": "https://cronky.net/assets/img/talks/hm-treasury-id25/ollie-speaking-hmt.webp"
    }
  ],
  "writing": [ { "title": "", "outlet": "", "date": "", "url": "", "topics": [], "advisory": true } ],
  "podcasts": [ { "show": "", "show_title": "", "role": "", "title": "", "date": "", "url": "", "youtube_id": "", "topics": [], "advisory": true } ]
}
```

   - Include **all** speaking items (so Cronk Advisory can compute role counts) with the `advisory` flag; include only flagged writing and podcasts.
   - `image` follows the same precedence as the /speaking/ list (logo, thumb, first photo, video thumbnail, first slide).
   - Valid JSON is mandatory: escape strings with `jsonify`. Add a CI step that parses the built file.
3. Add a step to cronky.net's GitHub workflow: on push to `main`, if the built feed changed, POST to Cronk Advisory's Cloudflare Pages deploy hook (secret `CA_DEPLOY_HOOK`).
4. No CORS headers are needed: the feed is fetched at build time, never in the browser.

### 9.2 Cronk Advisory changes (Hugo repo)

- Fetch the feed at build with `resources.GetRemote` wrapped in `try`. On failure, fall back to `data/insights-snapshot.json` and print a build warning (not an error), so a cronky.net outage never blocks a deploy.
- Provide `scripts/refresh-insights` that downloads the feed into `data/insights-snapshot.json`; commit the snapshot when it changes.
- Fetch item images and YouTube thumbnails with `resources.GetRemote`, resize to WebP (480px wide), and publish them locally, so CSP stays `img-src 'self'` and visitors make no third-party requests.
- Shared partials: `talk-card.html`, `insight-list.html` (filter by type, topic, `advisory`, limit).
- Role counts for `/speaking/` are computed from `speaking[]` in the template.

---

## 10. Phases and acceptance criteria

Each phase is one branch and PR. Ollie reviews and merges. Every phase must pass: `hugo` builds with no warnings; pages checked at desktop and 375px with no horizontal scroll; no empty or broken links; README AI Use Disclosure updated.

| Phase | Scope | Done when |
|---|---|---|
| 0. Quick fixes | 8.8 housekeeping; contrast fixes from 8.2; remove inline styles | All listed contrast pairs measure at least 4.5:1; no `style=""` left in layouts |
| 1. Compliance and security | Footer disclosures (7.1); `/company/`; `_headers` (8.1); `security.txt`; fonts decision applied (8.3) | Registered office and number visible on every page; CSP active with no console violations; security headers check passes |
| 2. Structure | Sections, layouts, nav, home slimmed, about, approach, contact, 404, breadcrumbs, metadata and JSON-LD (8.4), `llms.txt` | Every URL in 4.1 except governance and Insights resolves; legacy home anchors still land; JSON-LD validates without an address |
| 3. Services | Four service pages and index from approved copy (5.3) | No `[COPY]` placeholders remain on published pages, or the page is `draft: true` |
| 4. Work | `data/organisations.yml`, logo partial, `/work/` | Client logos only show with a permission date; HM Treasury and Gartner as text |
| 5. Feed, Speaking and Insights | cronky.net feed (9.1) and Hugo consumption (9.2); `/speaking/` and `/insights/` | Builds with the feed and with it unreachable; counts match cronky.net; no third-party requests on page load |
| 6. Governance and transparency | Governance hub and policies (7.3), privacy rewrite (7.2), accessibility statement, about this site, `carbon.txt`, CI (8.7) | Modern slavery reporting route fixed; carbon.txt validates; CI green |

---

## 11. Kick-off prompt for Claude Code

> Read `AGENTS.md`, then `docs/v2-spec.md` (this file). We are doing **Phase 0** only. Create a branch, make the changes listed for Phase 0, measure every contrast pair you change and list the before and after ratios in the PR description, and open a PR for me to review. Do not write marketing copy; leave TODOs. Ask me before anything that touches the decisions or open questions in sections 2 and 3.

For later phases, swap the phase number. Phase 5 spans both repos: do the cronky.net feed first as its own PR in that repo.