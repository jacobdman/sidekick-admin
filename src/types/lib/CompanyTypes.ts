import { Subscription } from './SubscriptionTypes';
import { CompanyService } from './CompanyServiceTypes';

export interface Company {
  id: string,
  name: string,
}

export interface CompanyWithSubscriptionsAndServices extends Company {
  subscription: Subscription,
  services: CompanyService[],
}