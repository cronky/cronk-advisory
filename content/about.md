---
title: "About Cronk Advisory"
layout: about
description: "About Cronk Advisory, a technology leadership and architecture consultancy founded by Oliver Cronk, and how this website is built."

# 1. The company
company:
  label: "The company"
  heading: "Cronk Advisory"
  lead: "Cronk Advisory is a technology leadership and architecture consultancy. We work with business and sustainability leaders, partners and delivery teams to balance business performance, efficiency and holistic sustainability: people, planet and profitability."
  body: "Rather than helping tactically with single point issues, we look at the bigger, interconnected picture and ask the difficult yet constructive questions. Read more about [our approach](/approach/).\n\nOliver Cronk founded Cronk Advisory Ltd in late March 2026. A network of specialists and partners joins engagements where needed.\n\nThe company is registered in England and Wales. Its registration details, directors and registered office are on the [company information](/company/) page."
  location: "Based in Newbury, Berkshire. Working across the UK and internationally."

# 2. The founder (layouts/_default/about.html). LinkedIn comes from linkedin in hugo.toml.
heading: "Oliver Cronk"
role: "Founder of Cronk Advisory · Fractional CTO and Chief Architect"
# The opening sentence is written to be quotable on its own (by people and AI assistants).
lead: "Oliver (Ollie) Cronk is a UK-based Fractional CTO and Chief Architect and the founder of Cronk Advisory Ltd (est. March 2026), formerly Technology Director at Scott Logic, Chief Architect at Tanium and Chief Architect / Deputy CTO at Deloitte Risk Advisory."
photo: "/images/photos/oliver-cronk-600.webp"
profile_links:
  - { label: "cronky.net", url: "https://cronky.net/" }
  - { label: "GitHub", url: "https://github.com/cronky" }
stats:
  - { value: "25+", label: "years in technology leadership, architecture and engineering" }
  - { value: "Since 2008", label: "speaking at conferences, summits and community events" }
  - { value: "2019", label: "founded the Architect Tomorrow community" }
body: "In over 25 years he has held CTO / Technology Director, Chief, Enterprise and Technology Architect and engineering positions across energy, financial services, central and regional government, and professional services, and brings buy-side and sell-side experience to every engagement.\n\nHe contributes to the Green Web Foundation's [Digital Impacts Schema and Taxonomy (DIST)](https://dist.greenweb.org), previously co-developed the Tech Carbon Standard, and speaks internationally on architecture, emerging technology and sustainability."
# TODO: further credentials (Green Software Foundation Champion) only once Ollie confirms (spec 6.6)
# logo (optional): a file under static/images/logos/
credentials:
  # The degree is accredited for full CEng (Engineering Council course listing). That is not CEng
  # registration: only add "Chartered Engineer (CEng)" once Ollie is on the Engineering Council register.
  - { name: "BSc Computer Science (Hons)", detail: "University of Essex, accredited for full CEng" }
  - { name: "Chartered IT Professional (CITP)", detail: "BCS, The Chartered Institute for IT", logo: "/images/logos/citp.webp" }
# TODO: last six company roles from LinkedIn, plus affiliations and volunteer roles (spec question 3)
previous_roles:
  - { title: "Technology Director", org: "Scott Logic" }
  - { title: "Chief Architect", org: "Tanium" }
  - { title: "Chief Architect / Deputy CTO", org: "Deloitte Risk Advisory" }
# Shown as tiles: the logo when there is one (logo_on_dark for white logos, logo_fill for an
# image with its own background that should fill the tile), otherwise the name.
communities_heading: "Communities and open source"
communities:
  - { name: "Architect Tomorrow", role: "Founder and host, since 2019", url: "https://architecttomorrow.com", logo: "/images/logos/architect-tomorrow.webp", logo_fill: true }
  - { name: "Chief Architect Network", role: "UK co-lead", url: "https://chiefarchitectnetwork.com", logo: "/images/logos/chief-architect-network.webp" }
  - { name: "Business Architecture Forum", role: "Advisor and speaker", url: "https://tcbaf.org/", logo: "/images/logos/business-architecture-forum.webp", logo_on_dark: true }
  - { name: "Green Web Foundation", role: "DIST contributor", url: "https://dist.greenweb.org", logo: "/images/logos/green-web-foundation.webp" }
# Oliver's personal site holds the full bio, talks, writing and podcasts
more_heading: "More on Oliver's personal site"
more_links:
  - { label: "Full biography", url: "https://cronky.net/about/" }
  - { label: "Talks and speaking", url: "https://cronky.net/speaking/" }
  - { label: "Writing", url: "https://cronky.net/writing/" }
  - { label: "Podcasts", url: "https://cronky.net/podcasts/" }
  - { label: "Media kit: bios and headshots", url: "https://cronky.net/media-kit/" }

# 3. This website: a summary of content/about-this-site.md
website:
  label: "This website"
  heading: "How this site is built"
  body: "The site practises what we preach: static, lightweight and secure. It is built with [Hugo](https://gohugo.io), a static site generator. Content is written in plain Markdown and compiled into static HTML at build time, then served as flat files from [Cloudflare Pages](https://pages.cloudflare.com/), with no runtime processing."
  points:
    - "**No database:** nothing to query, nothing to breach."
    - "**No application server:** pages aren't generated on each visit."
    - "**Minimal energy footprint:** static files served from a CDN use a fraction of the compute of a dynamic stack."
    - "**No analytics or tracking scripts.**"
  link: "/about-this-site/"
  link_label: "More about this website, including copyright and reuse"
---
