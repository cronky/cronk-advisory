---
title: "GenAI Is Imploding. Unevenly."
date: 2026-11-06
description: "Two years after predicting that first-generation GenAI would implode under its own weight, the implosion is under way. Just not everywhere at once. Use cases are collapsing, infrastructure is still inflating, and the bill is landing on the grid. Here's my scorecard, and what architects should do about it."
topics: [ai, architecture, sustainability]
series: "AI Sleepwalking"
canonical: ""  # TODO: if cross-posted to LinkedIn
draft: false
---

In July 2024 I wrote a piece for the Scott Logic blog asking whether [Generative AI would implode and become more sustainable](https://blog.scottlogic.com/2024/07/16/the-impending-implosion-of-generative-ai-and-the-potential-of-a-more-sustainable-future.html). The industry was throwing power-hungry, general-purpose LLMs at every business problem in sight and expecting silver-bullet returns. My argument was that the financial, environmental and architectural unsustainability of that brute-force approach would eventually catch up with it, and that a leaner "GenAI 2.0" would rise from the ashes. In February 2025 I followed up with [There is more than one way to do GenAI](https://blog.scottlogic.com/2025/02/20/there-is-more-than-one-way-to-do-genai.html), arguing that we didn't need ever-larger centralised data centres to get value from the technology.

It's now late 2026, so it seems only fair to mark my own homework. The short version: the implosion is happening, but it isn't arriving as one dramatic crash. It's a slow, uneven and expensive reality check, and where you sit determines whether you can see it at all. Through my work at Cronk Advisory and the conversations we have in the [Architect Tomorrow](https://youtube.com/ArchitectTomorrow) community, I'm watching it unfold layer by layer.

## Where it's imploding, and where it isn't

| Layer | State in late 2026 | Direction |
|---|---|---|
| Use cases and business cases | Marginal pilots culled; value concentrating in narrower, well-architected deployments | Imploding |
| Model pricing | Still subsidised by capital that expects a return at some point | Under strain |
| Infrastructure capex | Over $400 billion in 2025, with a further 75% rise expected in 2026 | Still inflating |
| Energy and grid | Data centre demand up 17%, AI-focused data centres up around 50%, gas filling the gap | Buckling |
| Transparency | A handful of voluntary disclosures; regulation contested | Creeping forward |

That unevenness is the story. Anyone looking only at hyperscaler capex will tell you there's no implosion. Anyone looking at the enterprise pilot graveyard will tell you it's already over. Both are looking at one layer of the stack.

## The ROI reckoning

The financial implosion is landing exactly where I expected: marginally valuable use cases. Paying premium per-token prices to wrap a frontier model around a simple summarisation task turned out to be a very efficient way of burning budget, and plenty of pilots quietly never made it to production. As I argued in [The AI Efficiency Fallacy](/articles/the-ai-efficiency-fallacy/), the economics are still partly fictional: we've been trained to benchmark these tools against salaries rather than software licences, which makes almost any price look like a bargain.

The infrastructure layer hasn't corrected yet. The five largest tech firms spent over $400 billion on data centres in 2025, and the [IEA expects that to rise by a further 75% in 2026](https://www.iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions). That's where the stranded asset risk now sits. Strategy& estimates that [every gigawatt of data centre capacity left idle puts up to $12 billion of data centre investment and $2 billion of power infrastructure at risk](https://www.strategyand.pwc.com/m1/en/industries/energy-chemical-utility-management/gigawatt-bubble.html), and models 50 to 60 GW of potential overbuild by 2030. If demand flattens, we'll be left with some very large monuments to the hype cycle that nobody can make pay.

## The energy reality we tried to ignore

If the financial picture is sobering, the environmental one is uncomfortably close to the scenario I was worried about. When I [spoke at HM Treasury's ID25 last November](https://blog.scottlogic.com/2025/11/12/balancing-ai-innovation-sustainability-hm-treasury-id25.html), the energy appetite of first-generation AI was already hard to justify. Since then the IEA has reported that data centre electricity demand rose 17% in 2025, more than five times faster than global demand, with [AI-focused data centres up around 50%](https://www.enlit.world/library/ai-and-data-centre-electricity-use-continue-to-surge-iea-finds). It projects AI-related data centre demand to triple by 2030.

In 2024 I noted that operators were so short of grid connections they were eyeing small nuclear reactors, and argued for smarter options such as reusing waste heat. What we mostly got was gas. Global Energy Monitor tracked [nearly 100 GW of behind-the-meter gas capacity in development for US data centres at the start of 2026, up from around 4 GW two years earlier](https://technewsday.com/ai-data-centre-boom-drives-surge-in-u-s-gas-powered-infrastructure/), and xAI has been running [on-site turbines at its Colossus sites](https://www.datacenterdynamics.com/en/tags/behind-the-meter_1/). Put plainly, we are burning fossil fuels on site to keep chatbots and coding agents running.

There has been some progress on transparency, and credit where it's due. Google published a methodology putting its [median Gemini text prompt at 0.24 Wh](https://arxiv.org/abs/2508.15734), and Mistral published a [lifecycle assessment of Mistral Large 2](https://the-decoder.com/mistral-ai-publishes-the-first-comprehensive-life-cycle-assessment-of-a-large-language-model/). The trouble is that the two aren't comparable. Google's figure covers serving only, leaves out training and uses market-based emissions; Mistral's includes training and hardware. That's precisely the gap the [Digital Impacts Schema and Taxonomy (DIST)](https://dist.greenweb.org) is designed to close: a shared taxonomy, methodologies map and schema so organisations can be explicit about what's in scope, how it was measured and how confident they are in the numbers. (Disclosure: I've worked on DIST through Cronk Advisory.) And however small a per-prompt figure looks, multiply it by billions of prompts and it's still a planetary-scale problem.

## The token explosion and the rise of the agents

In 2024 I advocated Compound AI and Agentic AI as ways to ground models in enterprise reality, using vector databases, knowledge graphs and good old-fashioned software engineering. That shift absolutely happened. It also brought a consequence I underplayed: we stopped leaning on single monolithic models and started running armies of agents talking to each other.

OpenRouter's data is the clearest public signal. [Agentic token usage overtook human usage in February and has grown around 14x since, against 2.8x for humans](https://the-decoder.com/ai-is-becoming-ais-biggest-customer-as-agentic-token-usage-jumps-14x-on-openrouter/). By early October [agents were consuming roughly 7.8 times as many tokens as people](https://runtimewire.com/article/openrouter-agentic-usage-132-trillion-weekly-tokens). To be fair to the agents, a large share of those tokens come from cached prompts, which are much cheaper to serve, so raw counts overstate the compute. The direction of travel is still unmistakable, and the IEA now names AI agents as one of the drivers of rising data centre demand. Reasoning modes add to it: Hugging Face's AI Energy Score work found [reasoning models use around 30 times more energy on average than non-reasoning ones](https://singularityhub.com/2025/12/15/hugging-face-says-ai-models-with-reasoning-use-100x-more-energy-than-those-without/).

This is the efficiency trap I set out in [The AI Efficiency Fallacy](/articles/the-ai-efficiency-fallacy/). Google reports a 33x drop in energy per median prompt in a year, and the IEA says energy per AI task is falling at an unprecedented rate. Total demand keeps rising anyway. Efficiency without sufficiency just makes it cheaper to do more.

## Marking my homework: the 2024 GenAI 2.0 predictions

The 2024 piece listed eight attributes I expected a second generation to have. Here's how they've fared.

| 2024 prediction | Verdict | What actually happened |
|---|---|---|
| Laser-focused on high-value problems | Half right | Marginal pilots are being culled, but agents are now being pointed at almost everything |
| Dramatically more efficient | Right per task, wrong in aggregate | Per-prompt energy down sharply; total demand up anyway |
| Deeply integrated with other technologies | Right | Compound and agentic architectures are now the norm; the bare chatbot is the exception |
| More open and accessible | Right, with a twist | Open-weight models went mainstream; [Chinese models have taken more OpenRouter tokens than US ones since February](https://www.trendingtopics.eu/chinese-ai-models-overtake-us-rivals-in-global-token-consumption/) |
| Hardware and model innovation (ASICs, smaller models) | Right on ASICs, early on neuromorphic | Inference is [roughly two-thirds of AI compute and increasingly runs on custom silicon](https://introl.com/blog/custom-silicon-inflection-2026-hyperscaler-asics-nvidia-gpu) such as TPUs and Trainium; neuromorphic remains niche |
| Smart use of waste heat | Right idea, tiny scale | Deep Green's [5.6 MW Bradford site will feed a district heat network](https://itbrief.co.uk/story/bradford-approves-deep-green-data-centre-heat-reuse); against 100 GW of gas, a rounding error |
| More explainable | Mostly wrong (so far) | "Reasoning" traces look like explanations but aren't; the vocabulary problem got worse |
| Transparent and accountable on sustainability | Partly | Voluntary disclosures and the [AI Energy Score](https://huggingface.co/blog/sasha/announcing-ai-energy-score) exist; the EU AI Act's energy disclosure duty is [under Ombudsman inquiry over Code of Practice exemptions](https://eno.ombudsman.europa.eu/home/news/maincontent/eo-ombudswoman-asks-commission-f.html) |

So: roughly right on direction, too optimistic on timing, and wrong about what would fill the power gap. I didn't see gas coming at this scale, and I underestimated how fast agents would eat the efficiency gains.

## The people side hasn't gone away

The 2024 piece also covered trust, misinformation, intellectual property and skills. These haven't resolved; they've just been crowded out of the headlines by the capex story.

On IP, the picture has split. Anthropic's [$1.5 billion settlement with authors over pirated training data](https://fortune.com/2025/09/05/anthropic-reaches-1-5-billion-settlement-with-authors-in-landmark-copyright-case/) set a price on how data is sourced, while in the UK [Stability AI largely defeated Getty's copyright claims](https://www.jdsupra.com/topics/copyright-litigation/artificial-intelligence/copyright). For anyone building on these models, provenance is now a procurement question, not a philosophical one.

On skills and oversight, my worry has sharpened rather than eased. If automation erodes the very human judgement we rely on to supervise it, the "human in the loop" becomes a sign-off box and a [moral crumple zone](https://doi.org/10.17351/ests2019.260). I've written about this at length in [The AI Efficiency Fallacy](/articles/the-ai-efficiency-fallacy/), so I won't repeat it here, except to say it's the part of GenAI 1.0's legacy I'd least like GenAI 2.0 to inherit.

## GenAI 2.0: frugal, small, specific and sufficient

There is a more encouraging story too. The second generation is taking shape, built on the principles of frugal innovation. Small Language Models are becoming a sensible enterprise default as organisations realise you don't need a trillion-parameter model to route a customer service ticket or query an internal database.

In April 2025 Gartner predicted that by 2027 organisations would [use small, task-specific models at least three times more than general-purpose LLMs](https://www.gartner.com/en/newsroom/press-releases/2025-04-09-gartner-predicts-by-2027-organizations-will-use-small-task-specific-ai-models-three-times-more-than-general-purpose-large-language-models). In the organisations I work with, that shift is arriving early. We're also finally getting tooling for proper right-sizing. James Martin's [Frugal AI Switchboard](https://bettertech.blog/frugal-ai-switchboard/) baselines smaller, local, open models against the big proprietary ones, using EcoLogits for energy and carbon and Arize Phoenix for accuracy. Often you can hit the accuracy you need for a fraction of the energy, carbon and cost.

If I were rewriting the 2024 list today, I'd add one attribute: **sufficiency**. Efficiency asks how to do the same thing with less. Sufficiency asks how much is enough, and whether this needs doing at all. GenAI 2.0 needs both, or the efficiency gains will keep being spent on more tokens.

## The architect's mandate

The era of blindly applying LLMs to everything is ending, even if the capex hasn't had the memo yet. The organisations getting real value are treating AI as a component within a well-governed, sustainable enterprise architecture rather than as magic. In practice that means:

- **Right-size continuously.** Choose the smallest model that does the job, baseline it against the big ones, and ask whether you need a model at all.
- **Measure the full lifecycle before you scale.** Training, inference, hardware and the agents calling other agents. [DIST](https://dist.greenweb.org) gives you the categories, a map of measurement methods and a schema for reporting what you found, including what you left out.
- **Put sustainability into procurement.** Ask suppliers for consistent, comparable impact data and for the provenance of their training data. If they can't answer, that's an answer.
- **Govern the agents, not just the models.** Budget tokens, cap reasoning modes where they add little, and consider rate-limiting agents to match human review capacity rather than speeding the humans up.
- **Let consequences drive the architecture.** Reversibility and detection latency should decide where thin oversight is acceptable, not enthusiasm.

## Where I might be wrong

The capex could be vindicated. If agentic workloads keep compounding, today's overbuild could look like sensible foresight by 2030, much as the fibre glut of 2001 eventually carried the modern internet. The counter-argument, made well by the Center for Public Enterprise's Advait Arun in [Utility Dive's analysis of utility risk](https://www.utilitydive.com/news/utilities-data-center-risk-buildout-bubble-ai-infrastructure-grid/812781/), is that idle GPUs are far less reusable than dark fibre ever was. I hold this one loosely.

Efficiency could also outrun demand. Inference costs per token have fallen dramatically, caching is doing more of the work than raw token counts suggest, and custom silicon is improving fast. If small and local models keep closing the capability gap, much of my brute-force critique weakens, which is a direction I'd genuinely welcome.

## What I'll be watching for 2028

To keep myself honest, here's what I expect, so you can mark this homework too:

1. At least one high-profile write-down or repurposing of a gigawatt-scale AI campus.
2. Agent token budgets and model right-sizing becoming standard line items in enterprise architecture review boards.
3. Comparable, schema-based AI impact disclosure (DIST or similar) appearing in procurement requirements in the UK and EU public sector.
4. Behind-the-meter gas becoming a reputational and regulatory liability for the AI providers relying on it.

As I wrote in 2024, it wouldn't be the first AI winter. This one isn't freezing the technology; it's freezing out a lot of reckless implementations, and that's no bad thing. Now we get to build what lasts.

---

## Related reading

- [Will Generative AI Implode and Become More Sustainable?](https://blog.scottlogic.com/2024/07/16/the-impending-implosion-of-generative-ai-and-the-potential-of-a-more-sustainable-future.html) (Scott Logic, July 2024), the original prediction.
- [There is more than one way to do GenAI](https://blog.scottlogic.com/2025/02/20/there-is-more-than-one-way-to-do-genai.html) (Scott Logic, February 2025), on why brute-force centralisation isn't the only path.
- [The AI Efficiency Fallacy](/articles/the-ai-efficiency-fallacy/), on the three fallacies bundled under "efficiency" and the oversight problem.
- [Balancing AI Innovation and Sustainability at HM Treasury ID25](https://blog.scottlogic.com/2025/11/12/balancing-ai-innovation-sustainability-hm-treasury-id25.html).
- [Designing Freedom in the Age of Autonomy](/articles/designing-freedom/), on Beer's cybernetics and where AI's variety amplifiers are pointing.

---

*Which layer of the implosion are you closest to, and does it look the same from where you're standing? If you're trying to work out where your own AI estate sits on that table, [get in touch](/contact/).*

*AI use: as with the 2024 original, AI augmented this piece rather than replacing the author. Claude helped with research, fact-checking and drafting; the ideas, framing, judgement and any errors are mine.*
