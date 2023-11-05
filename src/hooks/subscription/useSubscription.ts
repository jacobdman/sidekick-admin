import useAppContext from 'context/AppContext';
import { SubscriptionTierName } from 'types';
import { SUBSCRIPTION_TIERS } from 'constants/subscriptionTiers.constants';

const useSubscription = () => {
  const { subscriptionTier } = useAppContext();

  const hasMinimumSubscriptionTier = (
    subscriptionTierName: SubscriptionTierName
  ) => {
    const tierToCompare = SUBSCRIPTION_TIERS[subscriptionTierName];

    return (subscriptionTier?.weight ?? 0) >= (tierToCompare?.weight ?? 0);
  };

  return { hasMinimumSubscriptionTier };
};

export default useSubscription;
