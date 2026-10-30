# Contributing

Thanks for helping improve the OWASP Top 10 for Personal AI Agents (PAA10).

## What helps most

- A **sourced real-world case** for any entry, especially the gaps listed in `docs/evidence-log.md`.
- A **control test** that failed or passed against a real product configuration.
- A **challenge to a category boundary**, with the incident that does not fit.

## Evidence rules

- Record the evidence type: reported incident, researcher demonstration, allegation, or research.
- Give a date, the product and version where relevant, and the best source you have. Say whether you read the source directly.
- Do not present allegations or vendor claims as established fact. Do not assign unverified vulnerabilities to named products.
- Use synthetic or consented data. Do not include private personal information.
- Disclose any affiliation or conflict with the product involved.

## How to propose a change

1. Fork the repository and create a branch.
2. Edit the relevant file in `entries/` and the matching `scenarios/PAAxx.yaml`.
3. Open a pull request describing the source and any caveats.

You can also open a [case issue](../../issues/new/choose) if you prefer to send the evidence and let a maintainer add it.

## Site

The GitHub Pages site lives in `site/` and is deployed by `.github/workflows/pages.yml` on every push to `main`.
