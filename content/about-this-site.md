---
title: "About this website"
linkTitle: "About this site"
draft: false   # written in Phase 6
description: "How this website is built: static, lightweight and secure, with no cookies or analytics."
---
<!-- TODO (Phase 6): adapt cronky.net's page; include the measured home page weight. -->

The site is built with [Hugo](https://gohugo.io), a static site generator. Rather than running a traditional CMS (with a database, an application server, and all the attack surface and energy consumption that brings), content is written in plain [Markdown](https://www.markdownguide.org/) and Hugo compiles everything into static HTML at build time.

The result is served as flat files with no runtime processing whatsoever.

```
Markdown + HTML templates → Hugo build → Static HTML → CDN
```

This is a considerably more efficient and secure approach for a site of this nature:

- **No database:** nothing to query, nothing to breach.
- **No application server:** pages aren't "generated" on each visit.
- **Minimal energy footprint:** static files served from a CDN use a fraction of the compute of a dynamic stack (consistent with our [sustainable technology](/services/sustainable-technology/) practice).
- **Fast:** there is no server-side work to wait for.

Hosting is via [Cloudflare Pages](https://pages.cloudflare.com/), which builds and deploys automatically on push to `main`.

---

## Copyright and reuse

Content on this website is © 2026 Cronk Advisory Ltd. All rights reserved, except where stated below or on the page itself.

- **Diagrams in our articles** marked as openly licensed, such as those in [A Reference Architecture for Consequential AI](/articles/reference-architecture-consequential-ai/), are released under the [Creative Commons Attribution 4.0 International Licence](https://creativecommons.org/licenses/by/4.0/). Please credit Cronk Advisory and link to the source.
- **The Pragmatic Ecosystems framework** is published under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Licence](https://creativecommons.org/licenses/by-nc-sa/4.0/). See [Pragmatic Ecosystems](/approach/).
- **The Cronk Advisory name and logo** are © 2026 Cronk Advisory Ltd and not covered by any of these licences, including where the logo appears inside an openly licensed diagram.

Registration details are on the [company information](/company/) page.
