# Decision log

## 2026-10-05 — Phase A: offer, pricing and revenue model

- Chosen offer scope: keep QSign focused on fitness and activity businesses that need mobile-first waiver capture, not a general-purpose e-sign product.
- Chosen pricing model: a low-friction SaaS ladder with a 14-day no-card trial, Starter, Studio, overage, annual billing, and a founding-customer rate for early advisors.
- Chosen math assumptions: every number in the unit economics and revenue model is clearly labeled as a hypothesis until we have five to ten real customer contracts and at least 90 days of usage data.
- Chosen payment guardrails: no card data is stored in app code or internal systems. Gateway providers handle the card processing; the app should route to them rather than storing PANs or CVV data.
- Chosen legal/compliance posture: treat waiver law, privacy consent and data retention as variables that require legal review before launch. Unknowns are moved into `docs/VERIFY.md` instead of guessed.
- Chosen growth narrative: the app must support the revenue chain of find business → demo → trial → first waivers signed → paid conversion → retention → referrals.

## 2026-10-05 — Payment architecture note

- Recommended payment rail for the business model: Paystack first for Kenya/West Africa and M-Pesa flows; PayPal as a second option for international customers.
- Deployment note: final production hosting should be planned for a cPanel/VPS environment only after app and payments are fully validated in sandbox and the security checklist is complete.
