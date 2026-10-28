---
title: "Sustainable and Responsible Technology"
weight: 3
# TODO: new summary and description from Ollie (spec 5.3). Both reuse the existing site copy for now.
summary: "Technology has an environmental and social footprint that most organisations have not fully mapped. We help organisations understand that footprint, account for it honestly, and act on it."
description: "Helping organisations understand, honestly account for and act on the environmental and social footprint of their technology."
# TODO: who_for, engagements and outcomes from Ollie (footprint measurement with DIST, procurement, responsible AI; spec 4.1)
who_for: []
engagements: []
outcomes: []
related_topics: [sustainability]
related_articles:
  - "/articles/dynamic-architecture"
  - "/articles/designing-freedom"
  - "/articles/the-ai-efficiency-fallacy"
legacy_ids: [sustainability]
---
Technology has an environmental and social footprint that most organisations have not fully mapped. Partly because the tech industry has been very effective at abstracting physical reality away from digital work. We help organisations understand that footprint, account for it honestly, and act on it.

Our approach draws on the Green Web Foundation's open-source [Digital Impacts Schema and Taxonomy (DIST)](https://dist.greenweb.org), which our founder contributes to.

<!-- TODO: the DIST overview below is Claude's draft from dist.greenweb.org (October 2026), for Ollie to review. -->

## The DIST categories

DIST gives organisations a shared way to categorise the environmental impacts of their digital technology across its whole lifecycle, from the supply chain to how customers use what they build. It has three parts: a taxonomy of impact categories, a map of measurement and estimation methods, and a schema for sharing impact data with its scope and method made clear.

The taxonomy groups impacts into five categories. Carbon is the most developed impact dimension, and in the carbon view each category maps to a Greenhouse Gas (GHG) Protocol scope. The community is mapping water and health next, and wants to cover critical minerals.

| Category | What it covers | GHG scope |
|---|---|---|
| **U: Upstream** | The embodied impacts of hardware (manufacture, transport and installation of employee, networking, server and storage hardware) and the development of software, content and data, including off-the-shelf software and AI models. | 3 |
| **O: Operational, direct** | Running the servers, networks and devices you operate: employee devices, networking and infrastructure, servers and storage. | 2 |
| **G: Generators** | Generators you run as part of your own operations. | 1 |
| **C: Operational, indirect** | Running impacts attributed to external hardware and services: cloud services, SaaS and managed services. | 3 |
| **D: Downstream** | The use of the products and services you produce, by businesses and consumers: end-user devices and network data transfer. | 3 |

People, buildings and travel are outside DIST's scope.

Mapping a technology estate against these categories shows where its impacts sit, including the Scope 3 impacts in the supply chain, the cloud and customer use that are easy to leave out, and gives a consistent structure for reporting them.

<figure class="prose-figure">
  <a href="/images/services/dist-taxonomy-carbon.webp"><img src="/images/services/dist-taxonomy-carbon.webp" alt="Diagram of the DIST taxonomy for carbon, showing upstream, operational (direct and indirect) and downstream impacts with the five categories, their subcategories and GHG Protocol scopes as listed in the table above, and people, buildings and travel as out of scope." width="1600" height="1273" loading="lazy"></a>
  <figcaption>The DIST taxonomy, carbon view (select it to open full size). From the <a href="https://dist.greenweb.org/taxonomy" target="_blank" rel="noopener">Digital Impacts Schema and Taxonomy</a>, stewarded by the Green Web Foundation, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>.</figcaption>
</figure>
