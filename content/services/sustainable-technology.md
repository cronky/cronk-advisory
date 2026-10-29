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
  - "/articles/dist-workshop-greenio-london"
  - "/articles/the-ai-efficiency-fallacy"
  - "/articles/designing-freedom"
legacy_ids: [sustainability]
---
Technology has an environmental and social footprint that most organisations have not fully mapped. Partly because the tech industry has been very effective at abstracting physical reality away from digital work. We help organisations understand that footprint, account for it honestly, and act on it.

Our approach draws on the Green Web Foundation's open-source [Digital Impacts Schema and Taxonomy (DIST)](https://dist.greenweb.org), which our founder contributes to.

## Overview of DIST for Sustainable Tech

DIST gives organisations a shared way to categorise the environmental impacts of their digital technology across its whole lifecycle, from the supply chain to how customers use what they build. It has three parts: a taxonomy of impact categories, a map of measurement and estimation methods, and a schema for sharing impact data with its scope and method made clear.

The taxonomy groups impacts into five categories. Carbon is the most developed impact dimension, and in the carbon view each category maps to a Greenhouse Gas (GHG) Protocol scope. The community is mapping water and health next, and wants to cover critical minerals.

<figure class="prose-figure">
  <a href="https://dist.greenweb.org"><img src="/images/services/dist-taxonomy-carbon.webp" alt="Diagram of the DIST taxonomy for carbon. Upstream impacts (category U, GHG Scope 3) cover software, hardware manufacture, transport and installation, and content and data. Operational impacts are direct (category O, Scope 2: employee devices, networking and infrastructure, and servers and storage, plus generators as category G, Scope 1) or indirect (category C, Scope 3: cloud services, SaaS and managed services). Downstream impacts (category D, Scope 3) cover end use: end-user devices and network data transfer. People, buildings and travel are out of scope." width="1600" height="1273" loading="lazy"></a>
  <figcaption>The DIST taxonomy, carbon view (select it to visit the DIST website). From the <a href="https://dist.greenweb.org/taxonomy" target="_blank" rel="noopener">Digital Impacts Schema and Taxonomy</a>, stewarded by the Green Web Foundation, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>.</figcaption>
</figure>

## Responsible Technology

Sustainable technology is not only about carbon. AI that quietly wears away the human judgement it depends on is not sustainable either, however efficient it looks in the business case. We are firmly pro-innovation, and pragmatic about it: the aim is AI that still works, and is still safe, once the novelty has worn off.

That starts with being honest about what the technology can and cannot do. AI produces plausible output at scale. It cannot hold judgement or accountability. And the human oversight we rely on to make it safe is the first thing automation erodes: people stop deciding and start forwarding whatever looks acceptable, and reviewers who no longer do the work lose the ability to check it. [The AI Efficiency Fallacy](/articles/the-ai-efficiency-fallacy/) sets this out in more detail.

We help organisations get the balance right:

- **Decide where the judgement line falls.** Which outputs a named human owns, and where the machine can run on its own, enforced in the architecture rather than only in a policy document. See [A Reference Architecture for Consequential AI](/articles/reference-architecture-consequential-ai/).
- **Design for augmentation, not substitution.** Use AI for the volume and complexity that exceed human capacity, while people keep doing enough of the work to stay able to check it.
- **Test that human review is real.** For example, feed plausible-but-wrong outputs into a review process and see whether reviewers catch them, before a customer or regulator does.
- **Plan for people as well as technology.** Budget for skills, mentoring and the entry-level roles that judgement grows from. Adopting AI well may need [more people, not fewer](/articles/the-pendulum-swings-back/).
- **Count the full cost.** Including the environmental footprint of AI itself, mapped with DIST.

