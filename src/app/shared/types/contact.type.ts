import { TEmail } from './email.type';
import { TPhone } from './phone.type';

export type TContact = {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  organization?: string;
  emails: TEmail[];
  phones: TPhone[];
};
