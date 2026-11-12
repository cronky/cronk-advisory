---
title: "A Reference Architecture for Consequential AI"
date: 2026-10-28
description: "A pragmatic, opinionated reference architecture for deploying generative and agentic AI where there are serious consequences from getting it wrong."
topics: [architecture, ai]
series: "Dynamic Architecture"
canonical: ""  # TODO: if cross-posted
draft: false
---

In [The AI Efficiency Fallacy](/articles/the-ai-efficiency-fallacy/) I argued that the architectural question stops being "where can we deploy AI" and becomes "where in this process must a named human own the output". In [Dynamic Architecture](/articles/dynamic-architecture/) I argued that governance has to be built into the places where creation happens, rather than applied after the fact. This piece is where those two arguments meet: what the architecture looks like when getting it wrong has real consequences.

A marketing team using AI to generate variants of a campaign can be wrong forty times and it does not matter - iteratively testing can actually be beneficial (if we park the [cost and environmental piece](/articles/the-ai-efficiency-fallacy/#fallacy-one-the-technology-itself-is-efficient)). A system that advises on a mortgage affordability assessment, flags a safeguarding concern, or adjusts a grid balancing position cannot. Regulation is usually a proxy for consequence, but it often lags. Plenty of consequential work is not yet regulated, and some regulated work is not consequential.

This is a discussion on architectures for the consequential end. It will not suit every use case, and it is deliberately heavier than you need for low-stakes work. If you are automating something reversible, high-volume and cheap to check, much of what follows is over-engineering and you should skip it. If not, this will hopefully be thought-provoking.

## Human vs Tech Capabilities

![The context stack. Nine layers, bottom to top: Infrastructure, Data, Information and Knowledge (technology-led capabilities), then a dashed judgement line, then Judgement, Empathy, Wisdom, Accountability and Trusted Relationships (human capabilities). Context runs from generic at the base, through nuanced and situated, to non-transferable at the top. Risk and governance on the right: controls (security, privacy, resilience); quality and provenance (verification, sourcing, IP); decision rights (human escalation, care, nuance, sensemaking); assurance (transparency, audit, redress). After Ackoff (1989) and Zeleny (1987).](/images/articles/context-stack-judgement-line.webp)

In the [companion conceptual piece](/articles/artificial-intelligence-is-not-artificial-wisdom/) where the diagram above comes from, I argue that intelligence is the engine that moves you up the knowledge ladder, and is not a rung on it. The practical consequence is that every process has a point where the work stops being the accumulation and transformation of information and starts being judgement: committing to a position when the premises are incomplete, the values conflict and somebody has to live with the result.

Call it the judgement line. Above it, a named human owns the output. Below it, the machine can run (in many cases autonomously).

Several people arrived at the same metaphor independently in the last year or so, which tells you the idea is probably along the right lines?! [Marina Cortazzo writes in CIO about the decision line](https://www.cio.com/article/4212022/the-decision-line.html). Security researchers have started using *judgement boundary* for a close relative: [the point where deterministic rules stop and judgement has to take over](https://arxiv.org/abs/2610.07657).

The rest of this piece is an attempt at the architecture that enforces it, because the architecture is the governance. If the judgement line only exists in a policy document, it does not exist.

## Three planes, not one orchestrator

There are now three distinct concerns with different owners, different failure modes and different governance needs, and collapsing them is a large part of why so many agentic pilots stall on the way to production.

![Demand management feeds an agent harness containing a plan, act and observe loop plus context assembly and budgeting. The harness draws on a context plane holding knowledge, memory, retrieval and entitlements, and an action plane holding tools via MCP and peer agents via A2A. Both planes feed output checking, which produces either a machine owned response with citations or an escalation to a human who owns the decision. Telemetry, evaluation, cost and energy metering runs across everything.](/images/articles/ai-reference-architecture-three-planes.svg)

**The harness** is what replaced orchestration. Orchestration was a request-response wrapper: input goes in, model is called, output comes out. A harness is a loop. It plans, acts, observes the result and decides whether to go round again. It carries state between turns. Critically, it decides what goes into the context window and when to stop.

I have given context assembly and budgeting its own box inside the harness because it has become a design decision with a cost attached, rather than a plumbing detail. Every token you put in the window has a price in money, latency and energy, and more context is not monotonically better: stuff the window and relevant material gets lost in the middle. Somebody has to decide what gets included and what gets dropped. In most deployments nobody does, and the answer emerges accidentally from whatever the framework defaults to.

**The context plane** is everything the system knows and can retrieve. **The action plane** is everything it can do to the world. Keeping these separate matters because they fail differently. A context plane failure leaks information or grounds a response in the wrong material. An action plane failure moves money, sends a message or changes a record. Different blast radius, different controls, often different owners in the organisation.

**Demand management** survives from the 2023 version of this architecture, and I would resist dropping it. It looks dated next to agentic language and it is the first thing teams cut. It is also the only component that protects you when an agent loop starts issuing requests at machine speed rather than human speed. Admission control was about customer spikes. Now it is about your own systems.

## The context plane: knowledge, memory and state

![Ingestion and curation and query and entitlements both feed a retrieval and memory container holding a knowledge graph, a vector store, agent memory and a semantic cache. Results pass to rerank and assemble, which attaches provenance, producing grounded context for the harness. Session and task state runs underneath as a separate concern.](/images/articles/ai-reference-architecture-context-plane.svg)

**The knowledge graph earns its place through provenance, not accuracy.** The usual argument for graphs over vector search is retrieval quality, which is true in some workloads, contested in others, and not an argument I want to rest an architecture on. The stronger argument is structural: a graph carries typed, traceable relationships, so a claim can be traced back to a source and an assertion path. A vector store returns text that was similar and cannot tell you why. In consequential work, knowing why you retrieved something is not a nice-to-have.

**Vector search and semantic caching are the cost and coverage layer.** Vectors handle the fuzzy, unstructured long tail that no ontology will ever cover. The cache is there because inference is expensive and a surprising proportion of enterprise queries are near-duplicates. Both need careful invalidation, and in a regulated process a stale cache is a compliance problem as well as a performance one.

**Memory and state are different things and should not be merged.** This is the distinction I see collapsed most often. Memory is retrieved content: what the system recalls about this user, this case, this prior interaction. It competes with the graph and the vector store for space in the context window, so it belongs in the retrieval container and needs the same entitlements, provenance and retention treatment as anything else you retrieve. State is the harness's own bookkeeping: where the task got to, what has already been done, whether it can resume after a failure. Losing state is an availability problem. Leaking memory is a compliance one. They sit in different places on the diagram for that reason.

Memory also carries a governance point: what should the system be allowed to remember, for how long, and what does *forgetting* mean technically when the memory has already influenced a decision that was acted upon? I do not have a clean answer. I would rather name it than pretend the box labelled "memory" is self-explanatory.

**Entitlements are applied at retrieval time, not afterwards.** Filtering after generation does not work, because the model has already seen the material and it is in the output distribution whether or not you strip the obvious bits. If a user is not entitled to see something, the retrieval must not return it. In financial services this should be one of the differences between an architecture that passes review and one that does not.

**Provenance is attached to each fact and survives to the output.** The rerank and assemble stage is where that attachment happens, and it is the most under-specified component in most designs. The test is simple: when a response makes a claim, can you reconstruct which retrieved item it came from and what entitled the user to see it? If not, you have built a system that cannot be audited, and no amount of output filtering will fix that retrospectively.

## The action plane: tools, agents and a gateway

![The agent harness calls out through an agent gateway that applies policy, authorisation, quotas and audit. From there, two paths: tools and data via MCP, backed by a tool registry and scopes, and peer agents via A2A, backed by an explicit delegation boundary. Every action is logged to telemetry with the requesting identity.](/images/articles/ai-reference-architecture-action-plane.svg)

The protocol picture settled down in 2026, which makes this easier to draw with confidence than it would have been a year ago.

The division of labour between the two main standards is fairly clear. [MCP](https://modelcontextprotocol.io) defines how an agent reaches tools and data: vertical integration, inside your boundary. A2A defines how agents discover each other, delegate work and return results across framework and organisational boundaries: horizontal integration. They are complementary rather than competing, and since [A2A joined the Agentic AI Foundation in August 2026](https://aaif.io/blog/a2a-joins-aaif) they sit under the same governance alongside MCP. They are two boxes on the diagram because the risk profiles differ considerably.

**The agent gateway is a super important component.** Without a single choke point for policy, authorisation, quotas and audit, every MCP server connection becomes its own governance decision made by whoever wired it up. That is [shadow IT](/articles/dynamic-architecture/#the-cambrian-explosion-of-ai-generated-point-solutions) with write access to production systems. This is not speculative tooling: [agentgateway](https://agentgateway.dev), an Apache 2.0 gateway covering MCP, A2A, LLM inference and API traffic, [joined the same foundation in June 2026](https://aaif.io/blog/agentgateway-joins-aaif-as-an-open-gateway-for-agentic-ai-infrastructure). The pattern is available. Most organisations have simply not adopted it yet.

**The delegation boundary is where accountability leaks.** When your agent hands work to a third-party agent, you have made an outsourcing decision. Who is accountable when the delegated agent is wrong? What did it see of your data? What did it do with it afterwards? Consolidating the specifications did not settle authorisation. The specs now share a foundation, but which agent may read which data still lands on the enterprise. That is the entitlements problem from the context plane showing up again on the action side, and it is yours to answer rather than the protocol's.

**Watch for the lethal trifecta.** Simon Willison's [lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) is the clearest test I know for the action plane: an agent that has access to private data, is exposed to untrusted content and can communicate externally can be tricked into sending that data to an attacker. The context plane supplies the first. MCP tools and peer agents routinely supply the other two. The gateway is where you can see all three meeting in one session, and break the combination before a prompt injection exploits it.

**Every action is logged with the requesting identity.** That means the human on whose behalf the chain was initiated, carried through every hop, and not the service account or "the agent". If you cannot answer "who asked for this" at the end of a five-step agent trajectory, you have no audit trail, just a log file!

## Checking outputs, and checking actions

In 2023 the worst case for a customer-facing GenAI system was a rogue piece of content or a bad sentence. With tool access and write permissions, the worst case includes a bad transaction, edits to production systems or, as we've seen in the news, rogue hacking attempts. The checking stage has to grow accordingly.

Three checks, in rough order of maturity in the market:

**Content and legal filtering** is well understood and widely implemented. Does the output breach policy, brand, or law?

**Groundedness** is newer and only possible if the context plane did its job. Are the claims in this response actually supported by the retrieved material, or has the model filled a gap with something fluent? This is where provenance pays for itself.

**Reversibility:** before an action executes, what does undoing it look like, and who can authorise the undo? An irreversible action taken by an agent on thin evidence is the failure mode that will produce the first serious enterprise incident.

## Designing escalation that is not a crumple zone

The human escalation path on the first diagram is coloured differently from everything else, because it is the only box where a person owns the decision. It is also the box most likely to be designed badly.

Madeleine Clare Elish's [moral crumple zone](https://doi.org/10.17351/ests2019.260) describes what happens when responsibility for an automated system's failure lands on the nearest human operator, who typically had limited control over the behaviour and no realistic opportunity to prevent it. Just as a car's crumple zone protects the driver by absorbing impact, the moral crumple zone protects the integrity of the technological system at the expense of the person next to it.

An escalation path is a crumple zone whenever the human receives accountability without the means to exercise it. In practice that means:

- The escalation arrives as a flagged item in a queue, with no retrieved context, no provenance and no view of what the system was reasoning from.
- The volume is calibrated to what the system generates rather than what a person can actually review, so the only sustainable behaviour is approval.
- The reviewer does not routinely do the underlying work, so their capacity to evaluate it has decayed. This is [Bainbridge's irony of automation](/articles/the-ai-efficiency-fallacy/#fallacy-three-automation-is-a-clean-swap) arriving exactly on schedule, forty-three years after she described it.

The architectural response is to treat the escalation as a first-class interface rather than an exception handler. It arrives with the retrieved context and its provenance, with what the system did and why, and with a rate that respects human throughput. If your review capacity is the constraint, [rate-limiting the agent is a legitimate design choice](/articles/the-ai-efficiency-fallacy/).

The test I would apply is a [chaos anti-AI monkey](/articles/the-ai-efficiency-fallacy/#possible-architectural-responses): inject plausible-but-wrong items into the escalation queue and see whether reviewers catch them. If they do not, the human-in-the-loop control on your risk register does not exist.

## Telemetry, including the bits nobody monitors

The audit trail argument has not changed: when systems leveraging machine learning fail, you need the equivalent of a flight recorder, capturing inputs, decisions and outputs so that lessons can be learned from evidence rather than anecdote. Agentic systems make this harder, because the thing you need to reconstruct is a trajectory rather than a single call.

Two additions. **Evaluations belong in the runtime picture, not just the build pipeline**, because model and prompt behaviour drifts, and a quarterly eval will miss it. And **cost and energy metering belong at the same level as latency**. Every agent loop has an environmental footprint as well as a financial one, and treating that as a sustainability reporting concern rather than an architecture concern is how it ends up unmanaged. The [cybernetic and environmental arguments converge here](/articles/designing-freedom/): less unnecessary processing is both cheaper and more viable.

## What I have deliberately left out

**The design-time plane.** MLOps and ModelOps are table stakes. What is critical is eval harness design, red teaming, ontology curation and the question of who owns the knowledge graph as a product rather than a project. That is probably an organisational design problem.

**Execution sandboxing** for tool calls that run code, which is a security architecture topic in its own right and one where the generic advice is actively dangerous.

**The model layer as a layer.** I have drawn model routing as a decision inside the harness rather than a tier of the architecture, which is deliberate. In 2023 the model zoo was the centrepiece and the governance question was which models are approved. The interesting question now is which model this specific request should go to, weighing capability against cost, latency, data residency and energy. That is a routing policy.

## This will be overkill for many use cases

This architecture is heavier than most organisations need for most use cases.

The questions that decide whether you need this are not technical. Can a competent person verify the output in less time than it took to produce? Does the output need to be traceable, or is plausibility sufficient? What does being wrong cost, and how quickly would you find out? Who takes the call when it does go wrong, and do they have the means to take it?

If the honest answer is "the system", it's likely there is actually a person who will be put in a difficult position and they will absorb the consequences.

---

## Related reading

- [Artificial intelligence is not artificial wisdom](/articles/artificial-intelligence-is-not-artificial-wisdom/), the conceptual piece this architecture implements, on why intelligence is the engine rather than a rung.
- [The AI Efficiency Fallacy](/articles/the-ai-efficiency-fallacy/), on boundaries, oversight and why the human supervising an AI system is usually the weakest part of the control.
- [Dynamic Architecture](/articles/dynamic-architecture/), on governed response to agent proliferation and why this is an ecosystem problem rather than an enterprise one.
- [Designing Freedom in the Age of Autonomy](/articles/designing-freedom/), on Beer, variety and getting your amplifiers on the right side of the equation.
- [Why More AI Might Ultimately Equal More People](/articles/the-pendulum-swings-back/), on what happens to staffing when verification work scales with generated volume.

The diagrams in this piece are © 2026 Cronk Advisory Ltd and released under a [Creative Commons Attribution 4.0 International Licence](https://creativecommons.org/licenses/by/4.0/), excluding the Cronk Advisory logo. If you use or evolve them I would like to hear about it, so they can be improved.

---

*Oliver Cronk is a fractional CTO and chief architect and the founder of [Cronk Advisory](/about/). He coined Ecosystem Architecture in 2017 and founded the [Architect Tomorrow](https://architecttomorrow.com) community in 2019, which informed and validated much of this thinking. An earlier and much simpler version of this was [published in 2023](https://www.architectureandgovernance.com/artificial-intelligence/generative-ai-solution-architecture-for-complex-enterprises/), before harnesses, agent protocols and machine-speed demand made most of it insufficient; this piece replaces it.*

*Where does the judgement line fall in your own processes, and does your architecture respect it? Feel free to [get in touch](/contact/).*

*AI use: AI augmented this piece rather than replacing the author. Claude helped with research synthesis, drafting and the three architecture diagrams; the ideas, framing, judgement and any errors are mine.*
