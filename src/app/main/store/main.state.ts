import { TContact } from '../../shared/types/contact.type';

export type TMainState = {
  contacts: TContact[];
};

export const initialMainState: TMainState = {
  contacts: [],
};
