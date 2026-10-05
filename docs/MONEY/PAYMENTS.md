# Payment setup and M-Pesa notes

## Paystack configuration

Use Paystack as the primary payment provider for Kenya and M-Pesa flows. Keep Stripe as the default fallback for regions where card payments are standard and where a more established billing flow already exists.

Required environment variables:

```bash
NEXT_PRIVATE_PAYMENT_PROVIDER="paystack"
NEXT_PUBLIC_PAYMENT_PROVIDER="paystack"
NEXT_PRIVATE_PAYSTACK_SECRET_KEY="your_paystack_secret_key"
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY="your_paystack_public_key"
NEXT_PRIVATE_PAYSTACK_WEBHOOK_SECRET="your_paystack_webhook_secret"
NEXT_PRIVATE_PAYSTACK_MOBILE_MONEY_ENABLED="true"
NEXT_PRIVATE_PAYSTACK_MOBILE_MONEY_PROVIDER="mpesa"
```

## M-Pesa flow

- Use Paystack mobile money for the Kenyan market and M-Pesa first.
- Keep the wallet and billing flow explicit in the checkout so users know they are paying through a mobile-money method.
- Do not store card or mobile-money credentials in the application; the gateway should own the customer payment details.

## cPanel hosting note

This product should be hosted on a cPanel-managed Linux account or equivalent cPanel-compatible VPS when moving from sandbox to production.

Checklist:

- Configure the production domain and TLS certificate.
- Load the environment variables from the hosting panel or application manager.
- Register the production Paystack webhook URL.
- Test a small real transaction in sandbox before switching to live credentials.
- Keep the application server, database, and backups separated and monitored.

## Production checks before launch

- Confirm the provider is set to live mode.
- Confirm the Paystack webhook secret matches the live endpoint.
- Test both a card transaction and an M-Pesa transaction.
- Check refund, payout, and reconciliation flows.
- Verify all billing emails and receipts include business details and required tax notices.
