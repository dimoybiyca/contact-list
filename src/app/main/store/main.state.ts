import { TContact } from '../../shared/types/contact.type';

export type TMainState = {
  contacts: TContact[];
  selectedContactId: string | null;
  searchQuery: string;
  isLoading: boolean;
};

export const initialMainState: TMainState = {
  contacts: [],
  selectedContactId: null,
  searchQuery: '',
  isLoading: false,
};
