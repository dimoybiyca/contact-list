import { TContact } from '../types/contact.type';

export const contactsMockData: TContact[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'Smith',
    emails: [],
    phones: [
      {
        number: '1234567890',
        label: 'Mobile',
      },
    ],
  },
  {
    id: '2',
    firstName: 'Vasyl',
    lastName: 'Doe',
    middleName: 'Smith',
    emails: [
      {
        email: 'test@gmail.com',
        label: 'Personal',
      },
    ],
    phones: [
      {
        number: '1234567890',
        label: 'Mobile',
      },
    ],
  },
];
