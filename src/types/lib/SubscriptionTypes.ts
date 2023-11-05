import { SUBSCRIPTION_TIER_NAMES, SUBSCRIPTION_TIERS } from 'constants/subscriptionTiers.constants';

export interface Subscription {
  id: string,
  is_active: boolean,
  tier: SubscriptionTier,
}

export interface SubscriptionTier {
  id: number,
  name: string,
  weight: number,
}

export type SubscriptionTierNameKey = keyof typeof SUBSCRIPTION_TIER_NAMES;
export type SubscriptionTierName = typeof SUBSCRIPTION_TIER_NAMES[SubscriptionTierNameKey];

export type SubscriptionTierKey = keyof typeof SUBSCRIPTION_TIERS;
