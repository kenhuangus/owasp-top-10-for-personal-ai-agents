# Crosswalk

Proposed analytical crosswalk to four related OWASP projects:

- OWASP Top 10 for Agentic Applications 2026 (ASI)
- OWASP Top 10 for LLM Applications 2025 (LLM)
- [OWASP Agentic Skills Top 10](https://owasp.github.io/www-project-agentic-skills-top-10/) v1.0, 2026 (AST): risks in the skills, plug-ins and their registries that agents load
- [OWASP MCP Top 10](https://owasp.org/projects/mcp-top-10), 2025 beta (MCP): risks in Model Context Protocol servers, tools and their deployment

It identifies related mechanisms and controls, not equivalence or endorsement. The ASI column follows the project proposal; the LLM, AST and MCP columns are initial drafts for maintainer review. Machine-readable: [`crosswalk.json`](../crosswalk/crosswalk.json).

## How the projects fit together

The AST and MCP lists describe the components a personal agent is assembled from: the skills it installs and the MCP servers it connects to. PAA10 describes what happens to the person when those components, or the agent itself, fail. A malicious skill (AST01) or a poisoned tool (MCP03) is a cause; a drained account (PAA02), a scam payment (PAA05) or a steered choice (PAA09) is the personal harm it produces. Use the AST and MCP controls to secure the components, and the PAA controls to bound what any component can do to the person.

## By PAA entry

| PAA entry | ASI 2026 | LLM 2025 | Agentic Skills (AST) | MCP | Additional personal focus |
|---|---|---|---|---|---|
| PAA01 | ASI01, ASI02, ASI03 | LLM06 | AST03, AST09 | MCP02, MCP07 | Continuing consent, expiry, and withdrawal of a personal mandate. |
| PAA02 | ASI03, ASI04, ASI05 | LLM01, LLM03, LLM06 | AST01, AST02, AST06, AST07 | MCP01, MCP03, MCP04, MCP05 | Concentrated account access and independent recovery. |
| PAA03 | ASI03, ASI06, ASI07 | LLM02, LLM08 | AST03, AST05 | MCP06, MCP10 | Boundaries between private life, work, and personal audiences. |
| PAA04 | ASI06 | LLM04, LLM01, LLM08 | AST05, AST08 | MCP06, MCP10 | Accuracy and correction of the agent's representation of its owner. |
| PAA05 | ASI01, ASI02, ASI09 | LLM01, LLM09 | AST01, AST04, AST05 | MCP03, MCP06 | Consumer verification of counterparties and payment claims. |
| PAA06 | ASI02, ASI03, ASI08 | LLM06, LLM10 | AST03 | MCP02, MCP07 | Cumulative personal spending and consequential commitments. |
| PAA07 | ASI03, ASI07, ASI09 | LLM06, LLM09 | AST03, AST09 | MCP02, MCP07 | Authority over interpersonal speech and representation. |
| PAA08 | ASI02, ASI03, ASI07, ASI08 | LLM02, LLM06 | AST03 | MCP10 | Nonuser interests, household roles, and legitimate-operator abuse. |
| PAA09 | ASI01, ASI09 | LLM09, LLM01 | AST01, AST05 | MCP03, MCP06 | Hidden incentives and pressure on personal choice. |
| PAA10 | ASI08, ASI10 | LLM06 | AST06, AST09, AST10 | MCP08, MCP09 | Self-service stop, recovery, exit, and continuity. |

## Agentic Skills Top 10 to PAA

| AST item | PAA entries |
|---|---|
| AST01 Malicious Skills | PAA02, PAA05, PAA09 |
| AST02 Supply Chain Compromise | PAA02 |
| AST03 Over-Privileged Skills | PAA01, PAA03, PAA06, PAA07, PAA08 |
| AST04 Insecure Metadata | PAA05 |
| AST05 Untrusted External Instructions | PAA03, PAA04, PAA05, PAA09 |
| AST06 Weak Isolation | PAA02, PAA10 |
| AST07 Update Drift | PAA02 |
| AST08 Poor Scanning | PAA04 |
| AST09 No Governance | PAA01, PAA07, PAA10 |
| AST10 Cross-Platform Reuse | PAA10 |

## MCP Top 10 to PAA

| MCP item | PAA entries |
|---|---|
| MCP01 Token Mismanagement and Secret Exposure | PAA02 |
| MCP02 Privilege Escalation via Scope Creep | PAA01, PAA06, PAA07 |
| MCP03 Tool Poisoning | PAA02, PAA05, PAA09 |
| MCP04 Software Supply Chain Attacks and Dependency Tampering | PAA02 |
| MCP05 Command Injection and Execution | PAA02 |
| MCP06 Prompt Injection via Contextual Payloads | PAA03, PAA04, PAA05, PAA09 |
| MCP07 Insufficient Authentication and Authorization | PAA01, PAA06, PAA07 |
| MCP08 Lack of Audit and Telemetry | PAA10 |
| MCP09 Shadow MCP Servers | PAA10 |
| MCP10 Context Injection and Over-Sharing | PAA03, PAA04, PAA08 |

ASI titles: ASI01 Agent Goal Hijack; ASI02 Tool Misuse and Exploitation; ASI03 Identity and Privilege Abuse; ASI04 Agentic Supply Chain Vulnerabilities; ASI05 Unexpected Code Execution; ASI06 Memory and Context Poisoning; ASI07 Insecure Inter-Agent Communication; ASI08 Cascading Failures; ASI09 Human-Agent Trust Exploitation; ASI10 Rogue Agents.
