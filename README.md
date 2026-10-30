**Website: https://kenhuangus.github.io/owasp-top-10-for-personal-ai-agents/**

# OWASP Top 10 for Personal AI Agents (PAA10)

**Status: initial draft (v0.1), not an official OWASP release.** Proposed documentation project; leaders proposed in the project request: Ken Huang (lead), Iftach Orr and Dean Issacharoff (co-leads).

Personal AI agents act across a person's accounts, retain memory, work over time, and speak or transact on their behalf, often with no security administrator. PAA10 identifies where that delegation fails, who must implement each safeguard (person, agent service, integration, or account provider), and how to test it. It builds on the [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) and the [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/), and reuses their mechanisms rather than claiming new attack classes. Each entry must add a personal harm pathway and a concrete safeguard or test.

The list is an awareness taxonomy, not a ranking by measured frequency or severity.

| ID | Risk | Primary protection boundary |
|---|---|---|
| [PAA01](entries/PAA01-personal-mandate-drift.md) | Personal Mandate Drift | The person's current authorization and its duration. |
| [PAA02](entries/PAA02-personal-account-and-recovery-takeover.md) | Personal Account and Recovery Takeover | Control of accounts, credentials, sessions, and recovery channels. |
| [PAA03](entries/PAA03-private-life-context-exposure.md) | Private Life Context Exposure | Permitted flow of personal information across audiences and purposes. |
| [PAA04](entries/PAA04-personal-memory-and-preference-corruption.md) | Personal Memory and Preference Corruption | Integrity and currency of the agent's representation of the person. |
| [PAA05](entries/PAA05-counterparty-deception-and-agent-mediated-scams.md) | Counterparty Deception and Agent Mediated Scams | Verification of the external party or claim driving a personal transaction. |
| [PAA06](entries/PAA06-unauthorized-spending-and-personal-commitments.md) | Unauthorized Spending and Personal Commitments | The exact economic or contractual effect accepted by the person. |
| [PAA07](entries/PAA07-unauthorized-social-representation.md) | Unauthorized Social Representation | Who may speak or make interpersonal representations in the person's name. |
| [PAA08](entries/PAA08-household-and-bystander-consent-violations.md) | Household and Bystander Consent Violations | The autonomy and information interests of people other than the operator. |
| [PAA09](entries/PAA09-manipulation-of-personal-choice.md) | Manipulation of Personal Choice | The person's ability to form and revise choices without covert influence. |
| [PAA10](entries/PAA10-loss-of-personal-control-and-continuity.md) | Loss of Personal Control and Continuity | Ability to inspect, stop, exit, recover, and continue necessary activities. |

## Layout

- `entries/`: one file per risk (Description, Common Examples, Example Attack Scenarios, Prevention and Mitigation split by person and provider, Verification, Evidence, Crosswalk, References).
- `scenarios/`: machine-readable synthetic scenarios and one control test per entry.
- `crosswalk/`, `docs/crosswalk.md`: mapping to ASI 2026 and LLM 2025.
- `docs/real-world-examples.md`: index of dated real-world cases per entry, with evidence type and how the source was read.
- `docs/evidence-log.md`: research sources and known gaps from the first pass.
- `docs/methodology.md`, `docs/roadmap.md`: selection method, release gates, plan.

## Scope

In: managed consumer agents, self-hosted assistants, shared household workflows, caregiver delegation, personal/work boundaries, digital actions by adult operators (children and other dependents considered as affected parties). Out unless tied to an in-scope agent action: physical autonomous systems, general conversational wellbeing, broad societal harms.

Examples of the product class (Meta Muse, Grok Bot, OpenAI Dots, Instinct, OpenClaw) are described by their own documentation. Nothing here alleges that a named product has any listed failure, and inclusion is not endorsement or certification.

## Contributing

Open an issue or PR. Cases must state evidence type, source, product/version, and publication permission, and use synthetic or consented data. Disclose affiliations and conflicts. Coordinate vulnerability disclosure with affected maintainers first.

## License

Apache License 2.0 for original documentation, scenarios, and project code. Third-party material keeps its own license; references and crosswalks do not relicense source documents.
