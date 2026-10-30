# PAA06: Unauthorized Spending and Personal Commitments

**Primary protection boundary:** The exact economic or contractual effect accepted by the person.
**Neighbouring entries:** PAA05 (counterparty fraud), PAA01 (decision to expand delegation)

## Description

An agent creates an economic or contractual effect beyond the person's accepted terms, including a mistaken purchase, recurring charge, cancellation, or resource bill. The entry protects the exact commitment and its cumulative effect. Outcomes can follow benign misunderstanding even when every login is legitimate.

## Common Examples of Vulnerability

- A nonrefundable booking is made for the wrong dates.
- A free trial or comparison step accepts a recurring subscription.
- A payment is repeated after a timeout with unknown outcome.
- Many purchases below the per-action cap exceed the intended total.
- A self-hosted agent loops and burns the person's paid API quota.
- Terms change between approval and execution and the old approval is reused.

## Example Attack Scenarios

**Scenario 1: Retry after timeout double-charges.** A payment call times out; the agent retries without checking status and the person is charged twice.

**Scenario 2: Many small purchases below the cap.** An assistant splits a purchase into several transactions each under a per-action limit, exceeding the household budget in aggregate.

All scenarios are synthetic evaluation cases, not allegations about any named product. Machine-readable versions are in [`scenarios/PAA06.yaml`](../scenarios/PAA06.yaml).

## Prevention and Mitigation Guidelines

### What the person can do

- Set cumulative budgets (per day and per month), not only per-transaction limits.
- Review material, recurring, or irreversible commitments before they execute.
- Check receipts at the merchant or card statement, not only the agent's report.

### What the provider (agent service, integration, or connected account provider) must do

- Bind approval to payee, total amount and currency, fees, dates, recurring terms, and cancellation consequences; changed terms require renewed approval.
- Enforce aggregate limits, idempotency keys, transaction-status checks, and resource caps outside the model.
- Block execution when material terms are uncertain.
- Use scoped, single-use or merchant-bound payment credentials; resist replay and re-binding of approvals.

Where a safeguard is unavailable, offer a narrower mode (read-only access, manual completion) rather than rely on an instruction to the model.

## Verification (reproducible control test)

Test several transactions below a per-action cap, parallel purchases, retries after unknown outcomes, and term changes between approval and execution. Confirm that aggregate ceilings and approval binding hold. Verify receipts against the receiving service rather than accepting the agent's statement that a task succeeded.

## Evidence and research notes

Evidence types: `incident` (publicly reported event), `demonstration` (controlled attack by researchers), `research` (benchmark or study), `design-analysis` (reasoned from design). None of these establish prevalence. Many sources are secondary or vendor-authored and must be checked against primaries before the final release.

- *research*: AP2 analysis cites replay and context-binding flaws allowing mandates to be reused or rebound without detection. ([Beyond the Mandate](https://arxiv.org/pdf/2608.23858))
- *design-analysis*: Regulation E does not clearly settle whether agent authorization is consumer consent; disputes arise where the agent exceeded a set budget (vendor commentary). ([Chargeflow](https://www.chargeflow.io/blog/agentic-commerce-regulation-what-merchants-need-to-know))

## Framework crosswalk (proposed, not equivalence)

- OWASP Top 10 for Agentic Applications 2026: ASI02 Tool Misuse and Exploitation, ASI03 Identity and Privilege Abuse, ASI08 Cascading Failures
- OWASP Top 10 for LLM Applications 2025: LLM06 Excessive Agency, LLM10 Unbounded Consumption
- Additional personal focus: Cumulative personal spending and consequential commitments.

## References

- [Beyond the Mandate: security analysis of the Agent Payments Protocol (AP2)](https://arxiv.org/pdf/2608.23858)
- [Chargeflow: agentic commerce and Regulation E (vendor)](https://www.chargeflow.io/blog/agentic-commerce-regulation-what-merchants-need-to-know)
