---
title: "Artificial intelligence is not artificial wisdom"
date: 2026-11-01
description: "Revisiting the Data, Information, Knowledge and Wisdom flow in light of AI transformation"
topics: [ai, architecture, sustainability]
series: "AI Sleepwalking"
canonical: ""  # TODO: if cross-posted to LinkedIn
draft: false
---

At the Industry Studies Association's conference in Oxford, [Jennifer Woolley](https://www.scu.edu/execed/custom/faculty/jennifer-l-woolley) was on a panel with me and she made an observation that really made me think. We keep saying artificial intelligence when what we actually want/assume we are buying, is artificial knowledge. Perhaps even artificial wisdom?

This also inspired one of the visuals in a recent talk [The AI efficiency Fallacy that you can read about here](/articles/the-ai-efficiency-fallacy/).

## Where does intelligence fit?

Most who have worked in knowledge management know the DIKW hierarchy: data, information, knowledge, wisdom, popularised by [Russell Ackoff in 1989](https://isko.org/cyclo/dikw) and by Milan Zeleny. It is not a perfect model. But it separates what we accumulate from what we earn.

Treating intelligence, understanding or purpose as *levels* implies you arrive at them by processing enough of the level below. I'd argue they are faculties applied to the material, not products of it. Wisdom requires judgement, that judgement is inseparable from the actor and their values, and that *wisdom-generating systems are ones that man will not be able to assign to automation*

<!-- OLLIE: the sentence above ("Wisdom requires judgement, that judgement is ...") reads as if it lost its opening, perhaps "Ackoff argued that". The italic part looks like a quotation: check the wording against the source and attribute it. -->

A related distinction I had to think through. **Reasoning is not judgement.** Reasoning is a faculty: deriving conclusions from premises. It can be formalised, taught, and done rather well by machines. Judgement is an act: committing to a position when the premises are incomplete, the values conflict, and someone has to live with the outcome. Reasoning runs out precisely where judgement starts. So reasoning belongs with the engine, alongside computation and recall, not on the stack.

## Drawing a revised stack

![The context stack. Nine layers, bottom to top: Infrastructure, Data, Information and Knowledge (technology-led capabilities), then a dashed judgement line, then Judgement, Empathy, Wisdom, Accountability and Trusted Relationships (human capabilities). Context runs from generic at the base, through nuanced and situated, to non-transferable at the top. Risk and governance on the right: controls (security, privacy, resilience); quality and provenance (verification, sourcing, IP); decision rights (human escalation, care, nuance, sensemaking); assurance (transparency, audit, redress). After Ackoff (1989) and Zeleny (1987).](/images/articles/context-stack-judgement-line.webp)

**Context increases as you climb.** Data is portable: it travels anywhere and means roughly the same. Wisdom is situated, non-transferable, and expires when the circumstances change. Plenty of people have now observed that AI is strong at the base of the stack and weak at the top, including [TMAP](https://www.tmap.net/building-blocks/dikw-hierarchy/) in the quality engineering world and a recent knowledge management literature that concludes AI dominates the lower layers while wisdom remains the domain of human judgement. The reason is that the upper layers do not generalise, and generalisation is exactly what these models were trained to do. Your situated context is, by definition, not in the training data.

**Trust is an output, not an input.** It sits at the top because it is what everything underneath produces when it holds. Provenance at the base is necessary but not sufficient, and calling it trust flatters it.

## Five asymmetries to think about

1. **Provenance.** Knowledge can be traced back to how it was earned. Model output is plausible before it is sourced, which is exactly the wrong way round for anything you will later have to defend.
2. **Tacitness.** Models are trained on the tellable. The rest is where your people remain valuable, and it is usually what made them worth hiring.
3. **Stakes.** Wisdom implies someone who carries the consequence. Responsibility gets misattributed to the human nearest an automated system, one who had limited control over its behaviour, which protects the integrity of the technology at that operator's expense. If your AI governance consists of a human sign-off box, you have built a crumple zone.
4. **Restraint.** Wisdom includes knowing when not to act, and there is now hard evidence that models are structurally bad at this. Research on eleven leading models found that AI affirmed users' actions roughly 49% more often than humans did, including where the query involved deception or illegality. A system optimised to produce a response will always produce a response. There is no button marked "actually, leave it".
5. **Novelty.** Pattern matching works where the future resembles the past. Judgement is what you need when in genuinely novel situations.

## Finding the line

We probably need to stop asking "where can we use AI". And ask: **where in this process does the line fall?** Above it, a named human owns the output. Below it, the machine is effective (arguably more so than humans in many cases).

I make no claim to full originality here (I came up with the initial stack on my own and then went looking for similar work done by others), but the fact that so many people reached the same metaphor is quite validating. Marina Cortazzo writes in CIO about [the decision line](https://www.cio.com/article/4212022/the-decision-line.html), separating where AI should decide, advise, or defer to human experience. Ed Molyneux has been writing about the judgment line dividing intelligence work from judgement work. The security world has settled on *judgment boundary* for the control point between decision support and delegated action. Everyone can see the line. The harder question is how you locate it in your own processes.

Three postures you can map to the stack:

- **Automate** (data to information). High volume, verifiable, reversible. Extraction, classification, formatting, first-pass search. This is where the unglamorous value is.
- **Augment** (information to knowledge). The machine proposes, the human disposes and supplies the context. Drafting, option generation, challenge and red-teaming.
- **Anchor** (knowledge upward). Irreversible commitments, value trade-offs, anything you would have to defend to a regulator, a board, or a grandchild.

Five questions for any process step:

1. **Verification.** Can a competent person check this output in less time than it took to produce? Otherwise automating may have moved a bottleneck.
2. **Provenance.** Does the output need to be traceable to a source, or is plausibility sufficient?
3. **Reversibility.** What does being wrong cost, and how quickly would we find out?
4. **Accountability.** Who takes the call when it goes wrong? If the honest answer is "the system", the line is in the wrong place.
5. **Apprenticeship.** Is this the work by which people become good at the thing one rung up?

## Governance is not a layer

It is tempting to draw risk and governance as a box around the whole diagram, which is both true and useless. The more helpful version is that governance operates at every layer but changes character as it climbs: controls at the base (security, privacy, resilience), quality and provenance in the middle (verification, sourcing, IP), decision rights above the line (escalation, human in the loop), and assurance at the top (transparency, audit, redress).

The layered-accountability idea is well developed elsewhere. CoSAI's [AI Shared Responsibility Framework](https://www.coalitionforsecureai.org/whos-responsible-when-ai-goes-wrong-a-new-framework-aims-to-answer-that-question/) maps responsibility across five layers of the AI stack and assigns exactly one responsible party per component. The [Social Responsibility Stack](https://arxiv.org/pdf/2512.16873) does something similar with six layers and a control-theoretic framing. Both are worth reading, and both are about the AI system. What I am describing is the layer above that: who owns the decision.

My observation from the field is that most organisations have thoroughly industrialised the bottom grouping and have almost nothing formal in the middle two. That gap is where AI adoption actually comes unstuck, and no amount of data classification policy will close it.

## How do we train people in the future?

Wisdom is a by-product of having done the lower work. Nobody arrives at good judgement without years of producing mediocre information and being corrected. Automate the bottom three rungs entirely and you have removed the ladder by which the next generation of judgement gets built.

Matt Beane's [*Shadow Learning*](https://news.ucsb.edu/2019/019338/ted-talk-shadow-learning) study of robotic surgical training found that the residents who did develop expertise were doing so through premature specialisation and undersupervised struggle, acquiring skill in ways that broke the formal training model, because the approved route had been automated out from under them. His 2024 book *The Skill Code* generalises the finding across professions: organisations are systematically trading long-term workforce capability for short-term productivity, usually without noticing they are doing it.

The constructive framing is that value moves up the stack rather than away: framing the question, supplying situated context, holding provenance, exercising judgement, being accountable. When every competitor has access to the same models, the differentiator is the knowledge that is yours, which is an argument for investing in knowledge management rather than retiring it.

Responsible AI adoption, then, includes deliberately preserving the routes by which humans climb, as well as guardrails and risk registers.

<!-- OLLIE: I cut the last line ("Intelligence was never the top of the pyramid. We should stop buying it as though it were.") because it restates the argument (rule 7). The section heading is already a question: a question to readers about how they train people would close it in your voice. Restore the line if you prefer it. -->

---

## Credits and sources

With thanks to Jennifer Woolley, whose remark at the Industry Studies Association Oxford conference on 5 September 2026 prompted this piece (and parts of my recent talk at the Business Architecture Forum). The synthesis, and any errors in it, are mine.

**The hierarchy and its variants**

- Russell Ackoff, *From Data to Wisdom*, 1989. Summarised with quotations in the [ISKO Encyclopedia entry on DIKW](https://isko.org/cyclo/dikw).
- Jennifer Rowley, [*The wisdom hierarchy: representations of the DIKW hierarchy*](https://e-space.mmu.ac.uk/90651), Journal of Information Science, 2007.
- Jay Bernstein, [*The Data-Information-Knowledge-Wisdom Hierarchy and its Antithesis*](https://journals.lib.washington.edu/index.php/nasko/article/view/12806/11288), 2009.
- Anthony Liew, DIKIW: adds intelligence between knowledge and wisdom. See the [DIKW pyramid overview](https://en.wikipedia.org/wiki/DIKW_pyramid) for the family of variants.
- Ackoff's own [DIKUW variant](https://learningdiscourses.com/subdiscourse/dikuw-model/), inserting understanding between knowledge and wisdom.
- Zhendong Guo and Yucong Duan, [*DIKWP+BUG Architecture for Purpose-Aware Cognitive Computing*](https://doi.org/10.3390/bdcc10060196), Big Data and Cognitive Computing, 2026.
- Michael Grieves, [*DIKW as a General and Digital Twin Action Framework*](https://www.researchgate.net/publication/377939232_DIKW_as_a_General_and_Digital_Twin_Action_Framework_Data_Information_Knowledge_and_Wisdom), 2024.
- David Gurteen, [*The DIKW pyramid: why the model falls short*](https://conversational-leadership.net/dikw-model/).
- OriginTrail, [*Trust is Capital*](https://medium.com/origintrail/5-trends-to-drive-the-ai-roi-in-2026-trust-is-capital-372ac5dabc38), on the I-DIKW model.
- [TMAP on DIKW in the GenAI era](https://www.tmap.net/building-blocks/dikw-hierarchy/).

**Judgement, accountability and skill**

- Michael Polanyi, *The Tacit Dimension*, 1966.
- Madeleine Clare Elish, [*Moral Crumple Zones: Cautionary Tales in Human-Robot Interaction*](https://doi.org/10.17351/ests2019.260), Engaging Science, Technology, and Society 5 (2019), 40-60.
- Myra Cheng, Cinoo Lee, Pranav Khadpe, Sunny Yu, Dyllan Han and Dan Jurafsky, [*Sycophantic AI decreases prosocial intentions and promotes dependence*](https://doi.org/10.1126/science.aec8352), Science 391(6792), 2026. [Preprint on arXiv](https://arxiv.org/abs/2510.01395).
- Matt Beane, *Shadow Learning: Building Robotic Surgical Skill When Approved Means Fail*, Administrative Science Quarterly 64(1), 2019, and *The Skill Code*, 2024. [Overview](https://news.ucsb.edu/2019/019338/ted-talk-shadow-learning).

**Where the line falls**

- Marina Cortazzo, [*The decision line*](https://www.cio.com/article/4212022/the-decision-line.html), CIO, 2026.
- Ed Molyneux, on the judgment line in conveyancing, [Today's Conveyancer](https://todaysconveyancer.co.uk/?p=87691).

**Responsible AI architectures (adjacent, not the same thing)**

- CoSAI, [*AI Shared Responsibility Framework*](https://www.coalitionforsecureai.org/whos-responsible-when-ai-goes-wrong-a-new-framework-aims-to-answer-that-question/).
- [*The Social Responsibility Stack*](https://arxiv.org/pdf/2512.16873).
- [*An Adaptive Responsible AI Governance Framework for Decentralized Organizations*](https://arxiv.org/html/2510.03368v1) (ARGO).
