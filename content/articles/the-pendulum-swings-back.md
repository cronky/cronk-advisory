---
title: "Why More AI Might Ultimately Equal More People"
date: 2026-10-26
description: "Adopting AI aggressively may need more people, not fewer, or enshittification becomes a serious risk."
topics: [ai, architecture]
series: "AI Sleepwalking"
draft: false
---

The general narrative in enterprise technology today is that AI replaces people. I want to put the opposite hypothesis on the table. For the rest of this decade, many of the organisations that adopt AI most aggressively will need more people, not fewer. Not because the technology is weak, but because of what happens to a system when you make one part of it suddenly, dramatically cheap.

That is a deliberately provocative opening, and I am offering it as a hypothesis rather than a prediction based partly on the jagged capabilities of the technology.

## The pendulum has swung

Right now the pendulum sits hard over on one side. Call it tech mania, call it FOMO-driven adoption: the mood is that any function not visibly "doing AI" is behind. Anthropic's own chief executive has suggested AI could remove half of entry-level white-collar jobs within one to five years. That is the high end of the range, and it sets the emotional weather for a lot of boardrooms.

Pendulums swing back. And the force that pushes this one back towards the middle is not a failure of AI. It is the success of AI colliding with three constraints the hype tends to skip over.

## Three things AI cannot do (or do cheaply)

**One: the robots are not here, and when they arrive they will be expensive.** 
Most of the work humans do is still physical. As of early 2026, enterprise humanoid robots sell for roughly 50,000 to 320,000 US dollars per unit, and the pilots at BMW, Hyundai and Amazon remain narrow. Tesla's sub-30,000-dollar target depends on mass production that does not yet exist. Until that changes, manual and care work is protected by unit economics. The [WEF Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/) and the [US Bureau of Labor Statistics projections](https://www.bls.gov/emp/) both expect *absolute growth* in farming, construction, delivery, care and the renewables trades to 2030.

**Two: AI cannot hold judgement, accountability, or genuine originality.** Three separable things, often bundled together and lost.

Judgement is the ability to weigh a situation the training data doesn't see as it lacks the non-language-based, real-world context. Accountability is the capacity to be answerable: a model cannot be a defendant, cannot lose a licence, cannot be hauled in front of a regulator. Madeleine Clare Elish's idea of the "moral crumple zone" captures what happens when we pretend otherwise. Liability does not vanish when a model is in the loop; it collapses onto the nearest human, usually the one with the least power to have prevented the outcome. And originality, in the sense of work that does not regress to the average, is something current models are measurably bad at. Recent research on [creative homogeneity across large language models](https://arxiv.org/abs/2501.19361) finds their outputs are far more similar to each other than human outputs are to each other, and that tweaking the prompt or the temperature does not close the gap.

There is a deeper irony here, and it is not new. Lisanne Bainbridge set it out in 1983 in "Ironies of Automation": the better the automation, the more the supervising human's skill atrophies, and the harder the rare moment of intervention becomes. Capable AI does not remove the need for skilled human oversight. It raises the value of it, while quietly making it scarcer. That is the [confirmation fatigue and relevance degradation](https://www.linkedin.com/pulse/we-sleepwalking-tomorrows-ai-challenges-oliver-cronk-4rcge/) risk from the original sleepwalking piece, now wearing a labour-economics hat.

**Three: AI itself is not free.** This is the constraint most often waved away. The big four hyperscalers are on course to spend in the region of 725 billion US dollars on capital expenditure in 2026. The [IEA's work on energy and AI](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) projects global data-centre electricity demand roughly doubling by 2030. Inference costs per token have fallen dramatically, which is real and important, but the infrastructure that makes cheap inference possible remains expensive, concentrated and increasingly constrained by power availability rather than chip supply. An organisation betting its operating model on infinite cheap compute is making an assumption, not a calculation. I have written before about why [the brute-force, centralised approach has material limits](https://blog.scottlogic.com/2024/07/23/will-gen-ai-implode.html), and why [there is more than one way to architect AI](https://blog.scottlogic.com/2025/02/21/there-is-more-than-one-way-to-architect-ai.html).

## The bit the spreadsheets miss

When you make a task dramatically cheaper, you usually get *more of it*, not the same amount done by fewer people.

Economists call the energy version of this the Jevons paradox. Jevons himself wrote in 1865 that "the very labourers whose labour is saved find their more efficient labour more demanded than before." The cleaner modern parable is the cash machine. As ATMs spread from the 1970s onward, the number of bank tellers in the United States did not fall. It rose, because cheaper branches meant banks opened more of them. The teller's job changed, but for decades the headcount grew.

Apply that to knowledge work. If an agentic system can draft ten times the code, ten times the legal memos or ten times the marketing variants, three things follow. Someone still has to verify, choose, approve and *own* each output, and that verification work scales with volume. Cheaper analysis means more decisions get analysed, so the market for the underlying service expands. And the rare, high-skill human intervention, the Bainbridge moment, becomes more valuable per hour even as routine roles thin out.

This is the controlled versus agentic architecture spectrum viewed from the staffing angle. Augmentation architectures keep humans in the loop by design and tend to *create* verification and judgement work. Full automation architectures try to remove it, and frequently just relocate it downstream, where nobody planned for it.

## What the latest data potentially shows

Mid-2026 employment data shows a potential reshaping. In the United States, unemployment is 4.3 per cent, stable but with [labour-force participation at its lowest since October 2021](https://www.bls.gov/news.release/empsit.nr0.htm). In the United Kingdom, unemployment is 5.0 per cent, the [highest since 2021](https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/uklabourmarket/may2026), with vacancies at a five-year low. Neither figure is a cliff edge.

The sharp signal is the entry rung. UK youth unemployment has risen to 16.2 per cent, the [highest in over a decade](https://www.hiringlab.org/uk/blog/2026/05/19/uk-employment-figures-may-2026/). US recent-graduate unemployment is running around 5.7 per cent, which is now *above* the national rate. That inversion is historically unusual: graduates normally do better than the wider market, not worse. Entry-level job postings are down by roughly a third since early 2023 on one analysis. KPMG cut its UK graduate intake by about a third in 2024.

Note that these rises are not cleanly attributable to AI. UK employer tax rises, an energy-price shock and broad global uncertainty are all in the mix, and the Office for National Statistics is candid about quality problems in its underlying survey. The cleanest AI-linked signal is the thinning of the entry rung, and even that is contested. What the data does *not* support is the wholesale-displacement story. It supports transformation, hitting the bottom of the ladder first.

## A tiered view of exposure

Synthesising the [ILO 2025 update](https://www.ilo.org/publications/generative-ai-and-jobs-2025-update), the [OECD](https://www.oecd.org/en/publications/2026/05/the-oecd-ai-exposure-measure_489cfd42.html), the [BLS](https://www.bls.gov/emp/publications/ai-exposure-categories.htm), the WEF and [Goldman Sachs](https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-global-workforce), here is a tier model that helps with strategy conversations. The percentages are task-exposure ranges for 2026 to 2030, not predictions of net job loss. "New-role likelihood" is a qualitative judgement based on historical precedent and current evidence.

| Tier | Work type | Task exposure 2026-2030 | New-role likelihood | Note |
|---|---|---|---|---|
| 1 | Physical and care work (farming, construction, delivery, home and personal care) | Low, under 5-10% | High | Protected by robot unit economics; demographic ageing lifts care demand |
| 2 | Skilled physical trades (electricians, HVAC, machine maintenance, wind and solar technicians) | Low, 5-15% | High | Fastest growth is in renewables trades; site-specific dexterity resists automation |
| 3 | Routine knowledge work (clerical, office admin, tier-1 customer service, basic bookkeeping) | High, 30-50% | Low to moderate | The clearest net contraction; BLS expects AI to reduce office and admin employment |
| 4 | Skilled analytical and production knowledge work (junior consultants, paralegals, routine software, marketing execution) | Medium-high, 30-50% at task level, closer to augmentation at role level | Moderate | The entry ladder thins; the mid-tier expands |
| 5 | Complex, judgement-intensive work (senior strategy, M&A, regulated advisory, clinical diagnosis, enterprise and security architecture) | Low displacement, high augmentation | Moderate to high | Bainbridge irony makes oversight more valuable; accountability protects regulated work |
| 6 | Creative origination (R&D, novel design, original research, brand-defining work) | Tools widely used; originating work less displaced | Moderate | Homogenisation risk if AI is used uncritically; genuine originality gains a premium |
| 7 | Accountability-bearing roles (directors, fiduciaries, regulated approvers, safety-case owners) | Very low displacement; decision volume likely to *rise* | Possibly growing | AI cannot be a defendant; volume increases the load on the human signatory |

The pattern is a barbell. Tiers 1, 2, 5, 6 and 7 are relatively protected or even growing. Tier 3 contracts. Tier 4 does not disappear but is hollowed in the middle, and that hollowing is where the social and organisational pain concentrates.

## Buy side and sell side

Consulting is the leading indicator, because it is a pyramid made of exactly the work AI does first.

**Sell side.** The classic model bills leveraged junior hours: analysts research, build decks, run models. AI does that work now. McKinsey's internal assistant is used by most of the firm monthly; graduate intakes across the big firms have been cut and starting salaries frozen. The pyramid is becoming what some observers call an obelisk: a thinner base, a fatter expert middle, more equity at the top, and pricing shifting from time billed to outcomes delivered. The risk to the big firms is not extinction. It is margin compression and disintermediation by clients who bring the capability in-house.

**Buy side.** AI does not reduce a client's need for the things consultants were genuinely selling: independent challenge, fiduciary cover, cross-client pattern recognition, surge capacity, and someone external to be accountable. It does reduce the willingness to pay for slide production and benchmarking that a competent internal team can now do itself. The buy-side question shifts from "how many bodies" to "what specifically am I buying that I cannot create internally". Tellingly, the major AI vendors are signing alliances with the big consultancies, because deploying this technology at enterprise scale still needs a great many humans on the ground.

**In-house knowledge workers.** Expect the same diamond shape to spread well beyond consulting: a thinner entry layer, a fatter middle, and rising demand for AI-literate mid-career judgement. Organisations that use AI well will tend to *do more things*, more products, more analyses, more variants, more compliance checks, and will need more people, not fewer, at the human-critical steps of those pipelines.

## Three new ways to sleepwalk

The original [eight sleepwalking risks](https://www.linkedin.com/pulse/we-sleepwalking-tomorrows-ai-challenges-oliver-cronk-4rcge/) were largely societal and ecosystem-facing. Looking at the same problem through the labour lens surfaces three more, all of them organisational, and all of them easy to walk into with eyes apparently open.

**The Hollow Ladder.** If you automate the entry rung, you stop manufacturing senior judgement. A senior lawyer's instinct was built on years of discovery grunt work. A principal engineer's intuition came from fixing junior-grade bugs. Automate the bottom of the pyramid for this year's efficiency saving and you have quietly defunded your own succession pipeline. The cost is invisible on a spreadsheet and severe over a decade. This is relevance degradation operating across careers rather than within a single task.

**Phantom Savings.** This is the trap of cutting headcount in anticipation of AI savings, then being overwhelmed at the human chokepoints by the volume AI itself generates. You removed the reviewers, but agentic systems are now producing ten times the output that needs reviewing, approving and owning. The saving was real on the day it was booked and gone within two quarters. It is asymmetrical overload, except the overload is self-inflicted and arrives from inside the building.

**Mean Reversion.** Because model outputs regress towards the statistical average, an organisation where everyone leans on AI for everything will drift, gradually and unnoticed, towards sameness. Each individual artefact looks perfectly competent. The aggregate effect is the slow erosion of whatever made the organisation distinctive. Differentiation does not fail loudly. It just quietly stops happening.

I would frame all three as hypotheses. There is also an open question of housekeeping: whether these belong as risks nine, ten and eleven alongside the IP and know-how leakage risk, or whether the labour cluster deserves its own grouping.

## Things that could prove this wrong

Pace could surprise in either direction. Robotics could move faster than the unit economics suggest; if a credible humanoid drops below roughly 25,000 dollars with reliable two-year deployment, the Tier 1 protection argument weakens for some manufacturing and logistics work. The macro productivity picture is genuinely contested: Goldman's 7-per-cent-of-GDP estimate and [Daron Acemoglu's task-based model](https://economics.mit.edu/sites/default/files/2024-04/The%20Simple%20Macroeconomics%20of%20AI.pdf), which puts total factor productivity gains at well under 1 per cent over a decade, cannot both be right. The current employment data is noisy and only partly about AI. And the induced-demand argument depends on demand for the underlying services being elastic; for most professional work it historically has been, but that is an assumption, not a law.

The ATM story also carries a lesson: Bank-teller numbers grew for decades, and then mobile banking killed the role anyway. The honest lesson is not "automation never displaces". It is that a first wave can grow a role for years before a second, complementary wave removes it. The 2026 to 2030 window I am describing may be the grow phase. The kill phase for some of these roles could simply arrive in the 2030s.

## What this means

For architects and technology leaders, three things follow. Map your operating model against the tiers, and be honest about which of your own functions sit in the hollowing Tier 4. For every AI deployment, name the human signatory and budget properly for their training and tooling, because that is your moral crumple zone whether you have planned it or not. And before you sign off a business case built on headcount reduction, model the opposite scenario alongside it: the one where AI volume means you need more people at the points only people are capable of. The alternative is a serious risk of enshittification.

If your AI business case assumes you will need fewer people, have you stress-tested it against the Phantom Savings scenario? And looking at your own organisation, which tier is most exposed to the Hollow Ladder, and what, concretely, are you doing about it before the rung is gone?

---

*Written with some AI augmentation (Claude Opus 5.5) for research synthesis and drafting. All framing, judgement, argument and any errors are ours. Sources are linked inline. This piece builds on [Are we sleepwalking into tomorrow's AI challenges?](https://www.linkedin.com/pulse/we-sleepwalking-tomorrows-ai-challenges-oliver-cronk-4rcge/) and connects to the cone of uncertainty and the controlled-versus-agentic architecture spectrum explored in earlier [Architect Tomorrow](https://architecttomorrow.com) work. [The AI Efficiency Fallacy](/articles/the-ai-efficiency-fallacy/) takes the Bainbridge and oversight argument further.*
