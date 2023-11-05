import React from 'react';
import { CompanyWithSubscriptionsAndServices, Lead, SubscriptionTier } from 'types';

interface AppContext {
  loggedInUser?: any;
  handleLogIn: (user: any) => void;
  apiKey?: string | null;
  company: Partial<CompanyWithSubscriptionsAndServices>;
  subscriptionTier?: SubscriptionTier;
  leadDetails: Partial<Lead>;
  setLeadDetails: React.Dispatch<React.SetStateAction<Partial<Lead>>>;
}

export default React.createContext<AppContext>({
  loggedInUser: null,
  handleLogIn: () => {},
  subscriptionTier: undefined,
  company: {},
  leadDetails: {},
  setLeadDetails: () => {},
});
