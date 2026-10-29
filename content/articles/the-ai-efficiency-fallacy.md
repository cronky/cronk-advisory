---
title: "The AI Efficiency Fallacy"
date: 2026-10-28
description: "AI is sold as an efficiency play. The technology is brute-forced and expensive, the language we use about it is doing work the technology isn't, and the human oversight we rely on to make it safe is the thing automation erodes first."
topics: [ai, architecture, sustainability]
series: "AI Sleepwalking"
canonical: ""  # TODO: if cross-posted to LinkedIn
draft: false
---

*This is the companion piece to my talk at the 11th Annual Business Architecture Summit, Converge 2026. Slides and the diagrams referenced below are available on request.*

In 1987, Robert Solow observed that you could see the computer age everywhere except in the productivity statistics. Nearly forty years on, we are running the experiment again, with better graphics.

Tom Fishburne drew the version everyone recognises: [one person uses AI to turn a bullet point into a long email, and the recipient uses AI to turn the long email back into a bullet point](https://marketoonist.com/2023/03/ai-written-ai-read.html). Both parties feel more productive. The system as a whole has burned energy to achieve precisely nothing, and has added a round trip of potential error for good measure.

That cartoon is funny because it is a boundary problem, and boundary problems are architecture problems. Efficiency measured inside one team's workflow can be waste measured across the organisation, and waste measured across the organisation can be something considerably worse measured across the ecosystem it sits in. This piece is about three separate fallacies that get bundled together under the word "efficiency", and what to do about them architecturally.

## The train on the viaduct

I open the talk with a photograph of a Swiss train crossing the Landwasser Viaduct. Clean, fast, impressive engineering, a strong candidate for the most efficient thing in the picture.

Then I show the same scene with the frame widened: power stations belching upstream, e-waste piled at the foot of the arches, the far span of the viaduct crumbling while people scramble to shore it up.

The train has not become less efficient. The boundary has moved. This is the core move in [Ecosystem Architecture](/articles/dynamic-architecture/) and it is the one most AI business cases never make. Efficiency is not a property of a system. It is a property of a system *and the boundary you drew around it*. Draw it tightly enough and almost anything looks efficient.

## Fallacy one: the technology itself is efficient

Let's start with the least contentious one. Many of the AI technologies we are deploying are not efficient in any engineering sense. They are brute-forced. We are throwing enormous quantities of compute at problems, often problems that deterministic software solved adequately and cheaply, because the brute-force approach generalises.

**The economics are currently fictional.** The prices we pay are subsidised by capital that expects a return at some point. More subtly, we have been trained to benchmark these tools against expensive salaries rather than against SaaS licences, which makes almost any price look like a bargain. Pay 300 pounds a month for software and you will scrutinise it. Pay 300 pounds a month for "an extra team member" and you will not. 

**Agentic architectures compound errors rather than cancelling them.** A single inference with 95% reliability is usually fine. Twenty chained inferences at 95% is not, and the failure mode is a confident, plausible, wrong result delivered at the end of a long chain that probably doesn't get reviewed properly rather than a crash.

**The environmental bill is real and arriving.** I have written at length about [why the brute-force centralised approach has material limits](https://blog.scottlogic.com/2024/07/23/will-gen-ai-implode.html) and [why there is more than one way to architect AI](https://blog.scottlogic.com/2025/02/21/there-is-more-than-one-way-to-architect-ai.html). The [IEA's work on energy and AI](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) projects data centre electricity demand roughly doubling by 2030. Energy, water, materials. These are architecture concerns, not sustainability-report footnotes.

None of this means don't use AI. It means the efficiency claim needs testing rather than assuming, and the cost comparison needs to be honest about what it is comparing against.

## Fallacy two: the words mean what you think they mean

This one is less discussed and I think it does quite a bit of damage.

We have borrowed a set of words from human cognition and attached them to statistical processes that work nothing like their namesakes. The borrowing is not neutral. It buries assumptions that can turn out to be dangerous.

| Word | What it means for a human | What it means for a model |
|---|---|---|
| Learning | Acquiring knowledge through experience, trial, error and cognitive growth | Mathematical optimisation: adjusting numerical weights to reduce error |
| Reasoning | The logical, conscious process of forming conclusions and judgements | Statistical pattern matching and probabilistic token selection that mimics logic through step-by-step text |
| Thinking | An internal, subjective, conscious process involving ideas, memories and self-awareness | Computational cycles, often brute-forced looping, during response generation |
| Hallucination | A sensory perception of something not present, usually linked to a medical condition | A statistically fluent error, confidently presented. Confabulation is arguably the better word |

When a vendor says the system "reasons about" your contracts, the sentence does different work depending on which column you are reading from. When a board paper says staff will be freed to "focus on higher-value work", it is quietly assuming the lower-value work was separable, which is the next fallacy.

My ask here is modest: be precise in architecture documents. Say "pattern matching over retrieved context" rather than "understands your business". Whilst it reads less impressively, it will potentially save you an argument with a regulator later.

## Fallacy three: automation is a clean swap

Here are the three automation fallacies as I frame them in the talk.

**The substitution fallacy.** That automation cleanly replaces human work, leaving the rest of the process untouched. It actually redistributes the work, usually to somewhere nobody budgeted for.

**The productivity fallacy.** That automation investment yields measurable, proportionate gains on a forecastable timeline. Solow's observation has aged well. [Acemoglu's task-based modelling](https://economics.mit.edu/sites/default/files/2024-04/The%20Simple%20Macroeconomics%20of%20AI.pdf) puts total factor productivity gains at well under 1% over a decade. Goldman Sachs says 7% of GDP. They cannot both be right, and your business case has implicitly picked one.

**The oversight fallacy.** That a human reviewer can meaningfully supervise an automated system whose outputs they did not generate. This is the one that should keep architects awake.

Lisanne Bainbridge set this out in [Ironies of Automation](https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf) in 1983, long before any of this. Her findings translate almost without modification:

- Manual skills decay under monitoring. A reviewer who rarely produces the underlying output loses the ability to evaluate it.
- Long-term knowledge requires frequent use. Theoretical training without practical exercise does not stick.
- Working context takes time to build. A human parachuted into an AI-generated decision lacks the situational awareness that made the original operator effective.
- The most successful automated systems may need the *greatest* investment in human training, precisely because intervention is rare and therefore fragile when it comes.

That last point inverts the business case. The better your automation, the more you should be spending on the humans who occasionally have to catch it. I have yet to see a deployment plan that budgets this way.

The legal consequence is Madeleine Clare Elish's [moral crumple zone](https://doi.org/10.17351/ests2019.260): liability does not vanish when a model is in the loop. It collapses onto the nearest human, typically the one with the least power to have prevented the outcome. If your AI governance consists of a sign-off box, the risk hasn't been managed but passed off to the person who will absorb it, often with serious damage to their career (the lawyer with invented case law still gets mentioned regularly).

## What actually gets outsourced

Milene Amoriello Spolador's research with senior technology leaders, written up as [What happens when you outsource your mind](https://mileneamoriello.com/newsletter), names something I have heard anecdotally for two years but articulates it really well.

Her findings, in brief: speed is not clarity, because AI removes the data bottleneck but not the human one. The judgement loop gets compressed, and since expertise forms through friction, removing the struggle means the output arrives but the learning does not. Then there is the fog, or cognitive hollowing: away from the screen you reach for your own reasoning and find you cannot reconstruct it, because it arrived pre-polished and you simply accepted it. This one resonates massively with me and is why I have reduced and changed the way I use AI - **that moment where you are in a situation where you need to be able to talk about something you produced but can't as you didn't think about it is chilling**.

A competence illusion opens up between what you can produce and what you understand, and organisations cannot yet detect that gap. People stop deciding and start forwarding what looks acceptable enough. And the collegial exchange and mentorship that judgement grows from quietly disappears.

The shift from deciding to forwarding is the one I keep returning to. The scarce resource becomes the judgement to say no to something plausible. Everything in these systems is optimised to produce plausible. Very little in them is optimised to produce the capacity to refuse it, generally you specifically need to prompt it to do so.

There is now hard evidence pointing the same way. [Cheng and colleagues in *Science*](https://doi.org/10.1126/science.aec8352) found that across eleven leading models, AI affirmed users' actions roughly 49% more often than humans did, and that a single interaction with a sycophantic model reduced people's willingness to take responsibility while increasing their conviction that they were right. Users trusted and preferred those models. Which gives developers every incentive to keep building them.

So this is not really a prompt engineering problem. It is an underlying business model of these services.

## Where the line falls

If the three fallacies hold, the architectural question changes. It stops being "where can we deploy AI" and becomes "where in this process must a named human own the output".

The diagram I use in the talk stacks nine layers, from infrastructure at the base to trusted relationships at the top, with a dashed line running between knowledge and judgement.

![The context stack. Nine layers, bottom to top: Infrastructure, Data, Information and Knowledge (technology-led capabilities), then a dashed judgement line, then Judgement, Empathy, Wisdom, Accountability and Trusted Relationships (human capabilities). Context runs from generic at the base, through nuanced and situated, to non-transferable at the top. Risk and governance on the right: controls (security, privacy, resilience); quality and provenance (verification, sourcing, IP); decision rights (human escalation, care, nuance, sensemaking); assurance (transparency, audit, redress). After Ackoff (1989) and Zeleny (1987).](/images/articles/context-stack-judgement-line.webp)

**Context increases as you climb.** Data is portable and means roughly the same wherever it lands. Judgement is situated. A trusted relationship is the least transferable thing in the entire picture: you cannot hand yours to a colleague, and it does not survive being written down. This is the mechanism behind the familiar observation that AI is strong at the base of the stack and weak at the top. The upper layers do not generalise, and generalisation is exactly what these models were trained to do. Your situated context is, by definition, not in the training data.

**Trust is an output, not an input.** It sits at the top because it is what everything underneath produces when it holds. Organisations keep trying to procure it directly, usually via a campaign, while degrading the layers that generate it.

Risk and governance runs down the right-hand side and changes character as it climbs: controls at the base, quality and provenance in the middle, decision rights above the line, assurance at the top. Most organisations have thoroughly industrialised the bottom and have almost nothing formal in the middle two. That gap is where AI adoption actually comes unstuck.

In full transparency, this stack is a synthesis of mine rather than an invention. It sits downstream of [Ackoff's 1989 DIKW hierarchy](https://isko.org/cyclo/dikw) and Zeleny's 1987 work, with the human layers around wisdom (judgement, empathy, accountability and trusted relationships) being my attempt to name what the apex of that pyramid usually gestures at and never specifies.

## Possible architectural responses

**Let consequences drive the architecture, not FOMO.** Agentic architectures with thin oversight are genuinely appropriate for low-consequence, reversible, high-volume tasks. They are not appropriate anywhere the cost of being wrong is high and discovery is slow. The test is reversibility and detection latency, not enthusiasm!

**Consider slowing the agent rather than speeding up the human.** This sounds perverse and is, I think, the most useful inversion in the talk. If your review capacity is the constraint, generating more output faster makes the system worse. Rate-limiting the agent to match human verification capacity is a legitimate architectural choice and almost nobody makes it.

**Budget for the J-curve and for skills maintenance.** Process redesign, data quality, governance maturity, and the Bainbridge investment in the humans who have to catch things. If the business case has none of these lines in it, it is not a business case.

**Ask whether AI evaluating AI is good enough.** Sometimes it genuinely is. Often it is a way of making the oversight fallacy recursive, so that nobody anywhere in the chain has actually looked.

**Consider a chaos anti-AI monkey.** If you deliberately inject plausible-but-wrong outputs into your review process, do your reviewers catch them? If they do not, your human-in-the-loop control does not exist, and you now know that before a regulator tells you.

**Ask whether automation makes sense at all.** Not every process should be automated. Some friction is load-bearing. **Mental friction is not always something to be done away with for efficiency as this is how we learn**, and lifting and shifting a broken process onto AI mostly just automates the busy work.

Which brings me to the question I close the talk on. If the AI's judgement is not better than a human's, and the productivity gains are smaller than forecast, and a human reviewer cannot reliably catch the errors, then what exactly is the deployment achieving? Is it worth the costs and the risks?

For plenty of use cases there are good answers. However my hunch is that most deployments never considered this.

## Where I might be wrong

The Solow parallel cuts both ways. Productivity gains from computing did eventually show up, roughly from the mid-1990s, once organisations had redesigned processes around the technology rather than bolting it on. If the same pattern holds, the efficiency fallacy is a timing complaint rather than a structural one, and the organisations investing through the J-curve now will look prescient in 2032. I think the environmental and oversight arguments survive that objection. The productivity argument may not.

And the model economics could improve faster than I expect. Inference cost per token has already fallen dramatically. If small and local models continue to close the capability gap, the brute-force critique weakens considerably, which is a direction I would genuinely welcome.

## Being brutally honest about human vs tech capabilities

The efficiency fallacy is the same error as the externality error in economics: drawing the boundary so that the cost lands outside it. In the business case, the cost lands on the reviewer, the junior who never got to build judgement, the grid, and the watershed. None of those appear in the spreadsheet.

Architecture is the discipline that decides where the boundary goes. That makes this our problem rather than someone else's, and it is why I keep returning to [Stafford Beer](/articles/designing-freedom/). His question is the right one: are you putting your variety amplifier on the side of the equation that absorbs complexity, or the side that generates it?

---

## Related reading

- [Designing Freedom in the Age of Autonomy](/articles/designing-freedom/), on Beer's cybernetics and why AI is mostly being deployed as a variety amplifier on the wrong side of the equation.
- [Dynamic Architecture: The Governed Response to Vibed Code and Agent Proliferation](/articles/dynamic-architecture/), on what happens when creation is no longer constrained by the speed of human typing.
- [Why More AI Might Ultimately Equal More People](/articles/the-pendulum-swings-back/), which takes the oversight argument and gives it a labour-economics hat.
- [Are we sleepwalking into tomorrow's AI challenges?](https://www.linkedin.com/pulse/we-sleepwalking-tomorrows-ai-challenges-oliver-cronk-4rcge/), the original risks piece.
- [Practical, pragmatic AI principles for an AI Autumn](https://www.linkedin.com/pulse/practical-pragmatic-ai-principles-autumn-oliver-cronk-jkwfe/).

---

*Where / how have you seen these fallacies of efficiency playing out? And if you ran a chaos anti-AI monkey through your AI powered processes this week, what do you think you would discover?! Feel free to [get in touch](/contact/).*

*AI use: AI augmented this piece rather than replacing the author. Claude helped with research synthesis and drafting; the ideas, framing, judgement and any errors are mine.*
