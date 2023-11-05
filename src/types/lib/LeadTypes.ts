import { Dayjs } from "dayjs";
import { CompanyService } from './CompanyServiceTypes';

export interface Lead {
  fullName: string;
  phone_number: number;
  email: string;
  appointmentDate: Dayjs;
  selectedService?: CompanyService | null;
}
