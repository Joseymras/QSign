# Unit economics and revenue model

This sheet is a working hypothesis only. It should be updated after the first 5 to 10 paid customers and after the first 90 days of actual trial and retention data.

## Assumptions used for the model

- Average monthly revenue per paying customer: $59 (blended plan value before overage)
- Average gross margin contribution per customer after direct variable costs: approximately $45 to $50
- Monthly fixed costs before sales and marketing: $950 hypothesis
- Average monthly customer churn assumption: 5% to 8%
- Gateway and payment fees included as a percentage of monthly revenue

## Cost sheet

| Cost item | Monthly cost hypothesis | Notes |
| --- | ---: | --- |
| Hosting and database | $200 | Managed app and Postgres or equivalent |
| Email delivery and automation | $40 | Transactional and CRM-triggered messaging |
| SMS / message credits | $75 | Trial reminder, onboarding, payment reminders |
| Payment gateway fees | $120 | Estimate based on revenue and plan mix |
| Support time reserve | $250 | Customer onboarding and issue triage |
| Analytics and monitoring | $60 | Usage tracking and funnel analytics |
| Miscellaneous software | $205 | Alerts, backups, dashboards, admin tools |
| Total fixed monthly cost | $950 | Placeholder until real billing is live |

## Per-customer variable cost estimate

| Variable cost item | Hypothesis cost per paying customer | Notes |
| --- | ---: | --- |
| Hosting and database | $6 | Shared infrastructure cost |
| Email delivery | $2 | Bulk transactional mail |
| SMS / reminder usage | $3 | Per active customer, often lower |
| Payment processing fees | $2 | Based on blended plan mix |
| Support / onboarding reserve | $8 | For active issues and setup calls |
| Total direct cost per customer | $21 | Hypothesis |

## Contribution margin example

- Blended monthly price per customer: $59
- Direct cost per customer: $21
- Contribution margin per customer: $38

The simple break-even formula is:

Break-even customers = Fixed monthly cost / contribution margin per customer

Break-even customers = $950 / $38 = approximately 25 paying customers

This means the business is hypothetically break-even at about 25 paying customers, assuming the plan mix and costs hold true.

## Revenue scenario table

Formula: monthly recurring revenue = customers × average price × retention

| Scenario | Customers | Avg. price | Retention | Formula | Monthly MRR hypothesis |
| --- | ---: | ---: | ---: | --- | ---: |
| Slow | 40 | $49 | 0.90 | 40 × $49 × 0.90 | $1,764 |
| Expected | 120 | $59 | 0.93 | 120 × $59 × 0.93 | $6,596 |
| Strong | 250 | $69 | 0.95 | 250 × $69 × 0.95 | $16,313 |

Important: every value above is a hypothesis, not a promise. The model must be refreshed with actual conversion, retention and support data before using it in investor materials or legal pricing commitments.

## Notes

- A higher average plan price reduces the number of customers required to hit break-even.
- Overage charges should be treated as upside, not base case revenue.
- The first real test is not revenue scale; it is trial-to-paid conversion and retention after the first 90 days.
