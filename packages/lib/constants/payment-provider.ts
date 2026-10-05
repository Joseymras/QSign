import { env } from '../utils/env';

export const PAYMENT_PROVIDERS = ['stripe', 'paystack'] as const;

export type PaymentProvider = (typeof PAYMENT_PROVIDERS)[number];

export const getPaymentProvider = (): PaymentProvider => {
  const provider = env('NEXT_PRIVATE_PAYMENT_PROVIDER');

  if (provider === 'paystack') {
    return 'paystack';
  }

  return 'stripe';
};

export const isPaystackEnabled = () => getPaymentProvider() === 'paystack';

export const isMpesaEnabled = () => {
  if (!isPaystackEnabled()) {
    return false;
  }

  return env('NEXT_PRIVATE_PAYSTACK_MOBILE_MONEY_ENABLED') === 'true';
};
