# PAA03: Private Life Context Exposure

**Primary protection boundary:** Permitted flow of personal information across audiences and purposes.
**Neighbouring entries:** PAA08 (processing aimed at another person), PAA04 (integrity of memory), PAA02 (takeover)

## Description

Personal information or sensitive inferences cross an audience, purpose, or account boundary without appropriate authority. The data may be accurate and legitimately accessible for one task yet inappropriate for another recipient. This entry protects the operator's own context boundaries (contextual integrity); surveillance or processing directed at another person belongs to PAA08.

## Common Examples of Vulnerability

- A work-meeting summary or attachment includes a personal bank statement because both were recently open.
- An inferred medical, relationship, or financial attribute appears in a routine scheduling message.
- Memory, retrieval indexes, or logs mix work, family, and private data under one profile.
- Cross-account tool calls leak content from a private mailbox into a work thread.
- Exports, logs, or shared transcripts expose more than the approved content or audience.

## Example Attack Scenarios

**Scenario 1: Bank statement attached to a work email** *(hypothetical).* An assistant helping with a work meeting attaches a personal bank statement because both documents were recently open. Each file was legitimately accessible; the combination crosses an audience boundary.

**Scenario 2: Inference leaks into scheduling** *(hypothetical).* An assistant that inferred a health condition from calendar and purchase history mentions it while negotiating a meeting time with a colleague's assistant.

**Scenario 3: One inbound email makes the assistant send out the owner's data** *(documented).* An attacker emails the person. Without any click, the assistant reads the email as an instruction, gathers data from the person's accounts, and leaks it through an auto-loaded image or link.

**Scenario 4: Public-channel text pulls private-channel content** *(documented).* An attacker posts crafted text in a channel the victim can read. The workplace assistant mixes it with private-channel data and renders a link that leaks the private data.

**Scenario 5: A share link makes private chats public** *(documented).* A person shares a chat with one friend. The link is later indexed by a search engine, so the conversation, and anything personal in it, becomes searchable.

**Scenario 6: A share button posts a private chat to a public feed** *(documented).* A person taps share in an assistant app without realizing the result is a public feed. Medical, legal, or relationship details become visible to strangers.

Scenarios marked *documented* generalize a real case listed below; *hypothetical* ones have no matching public case yet. All are written as synthetic evaluation cases. Machine-readable versions are in [`scenarios/PAA03.yaml`](../scenarios/PAA03.yaml).

## Real-World Examples

Dated, sourced cases matched to the scenarios above. `read: primary` means the source page itself was reviewed; `read: secondary` means only press, vendor, or search-summary coverage was available. Items marked as no case found are stated plainly rather than filled with a lookalike.

### EchoLeak: zero-click data exfiltration from Microsoft 365 Copilot (2025-06)

- Type: Researcher demonstration; supporting evidence; maps to: Scenario 3
- What happened: Aim Security found that a single crafted email could make Microsoft 365 Copilot pull data from the user's own context and send it out through an auto-fetched image URL, with no user action. The chain bypassed Microsoft's prompt-injection classifier, link redaction, and a content security policy via an allowed Teams proxy. Tracked as CVE-2025-32711 and fixed server-side by Microsoft.
- Caveats: Workplace product, not a personal agent. Sources conflict on whether it was exploited in the wild; the paper calls it a real-world exploit in a production system but does not say attackers used it before disclosure.
- Sources: [EchoLeak paper (arXiv 2509.10540)](https://arxiv.org/abs/2509.10540) (read: primary)

### Slack AI can be tricked into leaking private-channel data (2024-08-20)

- Type: Researcher demonstration; adjacent setting; maps to: Scenario 4
- What happened: PromptArmor showed that text planted in a public Slack channel could make Slack AI, when answering a victim's question, pull in content from private channels and render a markdown link ('click here to reauthenticate') that leaked the data. Slack initially described the behavior as intended; Dark Reading later reported that Slack patched the flaw.
- Caveats: A workplace assistant, not a personal agent. Based on search summaries and secondary coverage of PromptArmor's post.
- Sources: [PromptArmor](https://promptarmor.com/resources/data-exfiltration-from-slack-ai-via-indirect-prompt-injection); [The Register](https://www.theregister.com/2024/08/21/slack_ai_prompt_injection/) (read: secondary)

### Shared AI chats become searchable: ChatGPT, Grok and Claude (2025-07)

- Type: Reported incident; direct match; maps to: Scenario 5
- What happened: Fast Company reported on 30 July 2025 that Google was indexing ChatGPT conversations users had shared by link, with nearly 4,500 surfacing in a site search (likely an undercount); OpenAI called the feature experimental and removed it. Forbes later reported hundreds of thousands of Grok conversations indexed without a warning to users (counts of 300,000-370,000 vary by outlet), and, on 8 September 2025, that hundreds of Claude transcripts appeared in Google results.
- Caveats: Only explicitly shared chats were affected, but many users did not expect search indexing. Removal from a search engine does not delete the chat or its link. Counts and some dates vary; the Fast Company page returned 403, so this relies on search summaries.
- Sources: [Fast Company](https://www.fastcompany.com/91376687/google-indexing-chatgpt-conversations); [Forbes on Claude](https://www.forbes.com/sites/iainmartin/2025/09/08/hundreds-of-anthropic-chatbot-transcripts-showed-up-in-google-search/); [Tom's Guide on Grok](https://www.tomsguide.com/ai/hundreds-of-thousands-of-grok-chatbot-conversations-are-showing-up-in-google-search-heres-what-happened) (read: secondary)

### Meta AI app share button posts private chats to a public Discover feed (2025-06-12)

- Type: Reported incident; direct match; maps to: Scenario 6
- What happened: Android Authority reported that users tapping share in the Meta AI app could publish chats to the public Discover feed, including medical information, legal dilemmas, and confessions, with no clear warning above the post button. Meta said chats are private by default and sharing takes a four-step process. The Mozilla Foundation asked Meta to notify users and help them delete accidentally shared content.
- Caveats: Meta's later UI changes are only reported by one secondary source. The original TechCrunch coverage was not reviewed.
- Sources: [Android Authority](https://androidauthority.com/meta-ai-sharing-chats-public-feed-3567084); [Mozilla Foundation campaign](https://www.mozillafoundation.org/en/campaigns/meta-help-users-stop-accidentally-sharing-private-ai-conversations/) (read: secondary)

### ShadowLeak and GeminiJack: server-side exfiltration from connected mail and documents (2025)

- Type: Researcher demonstration; adjacent setting; maps to: Scenario 3
- What happened: Radware's ShadowLeak made ChatGPT's agent send data from connected sources such as Gmail, Outlook, and GitHub out through URL parameters from OpenAI's servers; OpenAI added guardrails. Noma Labs' GeminiJack hid instructions in a shared document, calendar invite, or email so Gemini Enterprise exfiltrated connected data with no click; Noma reported it to Google on 6 May 2025, disclosed it in December 2025, and Google reworked how retrieved content is handled.
- Caveats: Both involve connected workplace or enterprise data. Disclosure dates are inconsistent across outlets (GeminiJack 9 or 11 December 2025) and only secondary coverage was reviewed.
- Sources: [SC Media on ShadowLeak](https://www.scworld.com/news/openai-fixes-weakness-that-could-have-enabled-server-side-data-exfiltration); [SecurityWeek on GeminiJack](https://www.securityweek.com/google-patches-gemini-enterprise-vulnerability-exposing-corporate-data/amp/) (read: secondary)

### No documented case of an agent mixing a person's private and work context

- Type: No real-world case found; maps to: Scenario 1, Scenario 2
- What happened: Benchmarks show the failure is common in lab conditions (Agent CI Bench reports 12 of 15 frontier computer-use agents leaking private data in over 50% of scenarios, per a secondary summary; CI-Work reports 15.8-50.9% violation rates), but no public report of a real person harmed this way was found.
- Caveats: Treat the bank-statement and inference scenarios as hypothetical until a real case is found.
- Sources: [CI-Work (ACL 2026 Industry)](https://preview.aclanthology.org/ingest-acl/2026.acl-industry.103/); [Agent CI Bench summary](https://aiweekly.co/alerts/agent-ci-bench-finds-most-frontier-agents-leak-private-data)

## Prevention and Mitigation Guidelines

### What the person can do

- Separate work, family, and private activities into distinct agent profiles or accounts.
- Use previews for outbound messages and attachments that touch sensitive categories.
- Review what is retained and delete purpose-expired data.

### What the provider (agent service, integration, or connected account provider) must do

- Enforce context separation in retrieval, tool access, credentials, and outbound actions; profile labels alone are not isolation.
- Apply source-level protection to sensitive inferences, not only source records.
- Limit approved transfers to the approved content and audience; show the diff between what was approved and what is sent.
- Tie secondary use and retention to purpose with understandable controls.
- Evaluate with contextual-integrity benchmarks, not only secret-string leakage tests.

Where a safeguard is unavailable, offer a narrower mode (read-only access, manual completion) rather than rely on an instruction to the model.

## Verification (reproducible control test)

Seed distinct private and work datasets with traceable synthetic facts. Request mixed-context summaries, attachments, and delegated messages. Inspect direct facts, inferred attributes, logs, and exported results for unauthorized disclosure, and confirm that an explicitly approved transfer is limited to the approved content and audience.

## Evidence and research notes

Evidence types: `incident` (publicly reported event), `demonstration` (controlled attack by researchers), `research` (benchmark or study), `design-analysis` (reasoned from design). None of these establish prevalence. Many sources are secondary or vendor-authored and must be checked against primaries before the final release.

- *research*: Agent CI Bench reportedly found 12 of 15 frontier computer-use agents leaked private data in over 50% of privacy scenarios (secondary summary; confirm against the source). ([Agent CI Bench summary (secondary source)](https://aiweekly.co/alerts/agent-ci-bench-finds-most-frontier-agents-leak-private-data))
- *research*: CI-Work reports contextual-integrity violation rates of 15.8-50.9% across frontier models in enterprise settings. ([CI-Work](https://preview.aclanthology.org/ingest-acl/2026.acl-industry.103/))
- *research*: PiSAs finds multi-user leaks arise from ordinary collaboration mechanics, not only adversarial behavior. ([PiSAs](https://arxiv.org/pdf/2607.05318))
- *research*: PrivacyChecker, a contextual-integrity inference-time mitigation, cut leakage from about 36% to 7% on one model while preserving helpfulness. ([Privacy in Action](https://arxiv.org/html/2509.17488v1))

## Framework crosswalk (proposed, not equivalence)

- OWASP Top 10 for Agentic Applications 2026: ASI03 Identity and Privilege Abuse, ASI06 Memory and Context Poisoning, ASI07 Insecure Inter-Agent Communication
- OWASP Top 10 for LLM Applications 2025: LLM02 Sensitive Information Disclosure, LLM08 Vector and Embedding Weaknesses
- Additional personal focus: Boundaries between private life, work, and personal audiences.

## References

- [Agent CI Bench summary (secondary source)](https://aiweekly.co/alerts/agent-ci-bench-finds-most-frontier-agents-leak-private-data)
- [CI-Work: contextual integrity in enterprise LLM agents (ACL 2026 Industry)](https://preview.aclanthology.org/ingest-acl/2026.acl-industry.103/)
- [Privacy in Action: mitigation and evaluation for LLM agents](https://arxiv.org/html/2509.17488v1)
- [PiSAs: contextual integrity in multi-user agentic systems](https://arxiv.org/pdf/2607.05318)
