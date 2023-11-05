import { SubscriptionTier, SubscriptionTierName } from 'types';

export const SUBSCRIPTION_TIER_NAMES = {
  FREE: 'FREE',
  TIER_1: 'TIER_1',
} as const;

export const SUBSCRIPTION_TIERS: {[key in SubscriptionTierName]: SubscriptionTier} = {
  [SUBSCRIPTION_TIER_NAMES.FREE]: {
    name: SUBSCRIPTION_TIER_NAMES.FREE,
    id: 1,
    weight: 0,
  },
  [SUBSCRIPTION_TIER_NAMES.TIER_1]: {
    name: SUBSCRIPTION_TIER_NAMES.TIER_1,
    id: 2,
    weight: 1,
  }
} as const;
