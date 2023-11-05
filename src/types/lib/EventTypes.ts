import { SIDEKICK_LOGGING_EVENTS } from 'constants/events.constants';
import { Company } from './CompanyTypes';

export type SidekickLoggingEvent =
  (typeof SIDEKICK_LOGGING_EVENTS)[SidekickLoggingEventKey];
export type SidekickLoggingEventKey =
  keyof typeof SIDEKICK_LOGGING_EVENTS;

  export interface SidekickEventLog {
    id: string,
    company_id: Company['id'],
    created_at: Date,
    event: SidekickLoggingEvent,
    event_subtype?: string | null,
    meta: any,
  }