# cPanel deployment checklist

1. Prepare the production domain and certificate.
2. Upload the app build to the cPanel account or deploy to a cPanel-compatible VPS.
3. Configure environment variables for the live payment provider.
4. Ensure the database is reachable and backed up.
5. Register the live webhook URLs with Paystack and PayPal.
6. Run a smoke test of the signup and checkout flow.
7. Confirm invoices, receipts, and failure emails are firing.
8. Monitor logs and payment failures for the first 7 days after launch.
