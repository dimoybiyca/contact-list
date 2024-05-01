import { TContact } from '../../shared/types/contact.type';

export type TMainState = {
  contacts: TContact[];
  selectedContact: TContact;
  searchQuery: string;
  isLoading: boolean;
};

export const initialMainState: TMainState = {
  contacts: [],
  selectedContact: null,
  searchQuery: '',
  isLoading: false,
};
