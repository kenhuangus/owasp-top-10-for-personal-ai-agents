# Methodology

Summary of the evidence and selection method from the project proposal.

## Selection criteria

An entry needs: a recurring personal-agent exposure pattern, a distinct protection boundary, a plausible material harm pathway, an actionable division of responsibility, and a reproducible evaluation method. Categories differing only by wording or attacker technique are merged. The initial list is a proposed awareness taxonomy, not a statistically ranked list.

## Case records

Each record is one of: documented production incident, controlled demonstration, design analysis, or hypothetical test. Records state product and version where relevant, environment, trigger, affected party, authorized scope, observed result, provenance, and publication permission. Duplicate reports of one event are merged. Attack success rates state trial count and selection; red-team success is not prevalence.

## Classification

Each incident gets one primary classification based on the evidenced failed protection, with secondary tags for consequences. Generic model error is a cause; prompt injection, malicious skills, exposed gateways, and unsafe execution are mechanisms mapped to existing OWASP guidance.

## Severity

AIVSS is applied to defined vulnerability scenarios with stated version, configuration, assumptions, and independent scorer review. There is no universal severity score for a whole PAA category.

## Architecture patterns for control tests

1. Hosted personal agent using connectors or a cloud browser.
2. Assistant reached through messaging or voice.
3. Self-hosted tool-enabled agent.

## Release gates (from the proposal)

At least two documented scenarios per entry, a reproducible control test per entry, review by contributors from three unaffiliated organizations, an applicability matrix across the three patterns, and usability sessions with at least twelve adults. These are process targets, not proof of prevalence or security.
