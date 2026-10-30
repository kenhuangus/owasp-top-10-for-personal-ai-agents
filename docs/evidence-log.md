# Evidence log (initial research pass)

Sources gathered for the first draft. Treat every entry as a lead: several are vendor blogs or secondary summaries whose figures differ between outlets, and some preprints are not peer reviewed. Before final release each case needs a primary source, a product/version, a deduplication check, and a publication-permission note, per the methodology.

- [Agent CI Bench summary (secondary source)](https://aiweekly.co/alerts/agent-ci-bench-finds-most-frontier-agents-leak-private-data)
- [Akto: memory poisoning in AI agents (vendor; cites Radware ZombieAgent and Microsoft memory-promotion findings)](https://www.akto.io/blog/memory-poisoning-ai-agents)
- [Beyond the Mandate: security analysis of the Agent Payments Protocol (AP2)](https://arxiv.org/pdf/2608.23858)
- [BetterClaw: OpenClaw security risks 2026 (secondary; cites Censys exposure counts)](https://www.betterclaw.io/blog/openclaw-security-2026)
- [CSA research note: BioShocking (LayerX)](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-browser-prompt-injection-20260630-csa-s/)
- [Bitdefender: AI shopping agents, bank warnings on scams](https://www.bitdefender.com/en-us/blog/hotforsecurity/ai-agent-online-shopping-banks-scams-privacy)
- [The Hacker News: AI browser exploits (Brave/Comet and Trail of Bits MFA work)](https://thehackernews.com/expert-insights/2026/02/when-your-browser-becomes-attacker-ai.html)
- [Chargeflow: agentic commerce and Regulation E (vendor)](https://www.chargeflow.io/blog/agentic-commerce-regulation-what-merchants-need-to-know)
- [Chayn: non-consensual tracking guide](https://www.chayn.co/guides/diy-online-safety/nonconsensual-tracking)
- [CI-Work: contextual integrity in enterprise LLM agents (ACL 2026 Industry)](https://preview.aclanthology.org/ingest-acl/2026.acl-industry.103/)
- [Survey of LLM-driven agent communication: protocols, risks, defenses](https://arxiv.org/pdf/2506.19676)
- [Red Canary: Entra ID AI workflows and assistive agents](https://redcanary.com/blog/threat-detection/entra-id-ai-workflows-assistive-agents/)
- [Al Jazeera, 13 Oct 2026: EU watchdog on smart-glasses recording signals (URL truncated in search output; verify)](https://www.aljazeera.com/news/2026/10/13/eu-watchdog-urges-smart-glasses-to-clearly-signal-when)
- [Suffolk JHBL: FTC 6(b) inquiry into AI companions](https://sites.suffolk.edu/jhbl/2025/11/24/ai-companions-emotional-dependency-and-the-law-ftcs-next-frontier/)
- [Kelley Drye: AI chatbots face rising legal and legislative scrutiny](https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/ai-chatbots-face-rising-legal-and-legislative-scrutiny)
- [Mapping wearer-bystander privacy tensions for camera glasses](https://arxiv.org/pdf/2603.04930)
- [CSA research note: indirect prompt injection in the wild](https://labs.cloudsecurityalliance.org/research/csa-research-note-indirect-prompt-injection-in-the-wild-2026/)
- [The Hacker News: 341 malicious ClawHub skills](https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html)
- [Agentic commerce fraud write-up (cites Guardio Labs fake-shop test; secondary)](https://www.ldotr.red/post/ai-agent-commerce-fraud)
- [MemSecBench: memory poisoning from persistence to repair](https://arxiv.org/pdf/2607.27080)
- [Systematic study of memory poisoning in LLM agents](https://arxiv.org/pdf/2606.04329)
- [OpenClaw security trust model](https://docs.openclaw.ai/gateway/security/trust-model)
- [Privacy in Action: mitigation and evaluation for LLM agents](https://arxiv.org/html/2509.17488v1)
- [PiSAs: contextual integrity in multi-user agentic systems](https://arxiv.org/pdf/2607.05318)
- [Hidden in Memory: sleeper memory poisoning](https://arxiv.org/pdf/2605.15338)
- [Snyk ToxicSkills study of agent skills](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/)
- [TechCrunch, 23 Feb 2026: OpenClaw agent and a Meta researcher's inbox](https://techcrunch.com/2026/02/23/a-meta-ai-security-researcher-said-an-openclaw-agent-ran-amok-on-her-inbox/)
- [Galileo: OpenClaw, lessons from an agent gone rogue](https://galileo.ai/blog/openclaw-sobering-lessons-from-an-agent-gone-rogue)

## Known gaps

- PAA07 (social representation): the closest cases are an agent publishing an attack post and a messaging loop; no consumer harm from a draft-turned-send or invented commitment is documented.
- PAA08 evidence is adjacent (bystander privacy, partner tracking, multi-user agent leakage); shared household assistants need primary research.
- Sponsored-recommendation manipulation (PAA09) has regulatory and companion-chatbot evidence but few agent-specific demonstrations.
- Agentic-commerce scam rates are unmeasured; current evidence is proofs of concept and vendor telemetry.
