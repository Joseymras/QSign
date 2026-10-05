import { env } from '../../utils/env';
import { isMpesaEnabled } from '../../constants/payment-provider';

export type PaystackMobileMoneyChannel = 'mobile_money';

export type PaystackInitializeRequest = {
  email: string;
  amount: number;
  currency?: string;
  reference?: string;
  channels?: Array<'card' | PaystackMobileMoneyChannel>;
  metadata?: Record<string, unknown>;
};

export const getPaystackInitializePayload = ({
  email,
  amount,
  currency = 'KES',
  reference,
  metadata,
}: {
  email: string;
  amount: number;
  currency?: string;
  reference?: string;
  metadata?: Record<string, unknown>;
}): PaystackInitializeRequest => {
  const amountInKobo = Math.max(0, Number(amount) || 0);

  return {
    email,
    amount: amountInKobo,
    currency,
    reference,
    channels: isMpesaEnabled() ? ['mobile_money'] : ['card'],
    metadata: {
      ...(metadata ?? {}),
      provider: 'paystack',
      mobile_money: isMpesaEnabled() ? 'mpesa' : undefined,
    },
  };
};

export const hasPaystackMobileMoneySupport = () => {
  return !!env('NEXT_PRIVATE_PAYSTACK_SECRET_KEY') && isMpesaEnabled();
};
