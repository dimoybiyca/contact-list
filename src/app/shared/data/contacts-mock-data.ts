import { TContact } from '../types/contact.type';

export const contactsMockData: TContact[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'Smith',
    organization: 'Google',
    address: '1600 Amphitheatre Parkway Mountain View, CA 94043',
    emails: [],
    phones: [
      {
        number: '1234567890',
        label: 'Mobile',
      },
    ],
    createdAt: new Date(),
    dates: [],
  },
  {
    id: '2',
    firstName: 'Vasyl',
    lastName: 'Doe',
    address: '1600 Amphitheatre Parkway Mountain View, CA 94043',
    emails: [
      {
        email: 'test@gmail.com',
        label: 'Home',
      },
    ],
    phones: [
      {
        number: '1234567890',
        label: 'Mobile',
      },
    ],
    createdAt: new Date(),
    dates: [],
  },
  {
    id: '3',
    firstName: 'Jane',
    lastName: 'Smith',
    address: '123 Main St, Anytown, USA',
    emails: [
      {
        email: 'jane.smith@example.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '9876543210',
        label: 'Home',
      },
    ],
    createdAt: new Date(),
    dates: [],
  },
  {
    id: '12',
    firstName: 'Alice',
    lastName: 'Johnson',
    address: '456 Elm St, Anytown, USA',
    emails: [
      {
        email: 'alice.johnson@example.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '5555555555',
        label: 'Mobile',
      },
    ],
    createdAt: new Date(),
    dates: [],
  },
  {
    id: '4',
    firstName: 'Michael',
    lastName: 'Smith',
    address: '789 Oak St, Anytown, USA',
    emails: [
      {
        email: 'michael.smith@example.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '9999999999',
        label: 'Home',
      },
    ],
    createdAt: new Date(),
    dates: [],
  },
  {
    id: '5',
    firstName: 'Emily',
    lastName: 'Johnson',
    address: '321 Pine St, Anytown, USA',
    emails: [
      {
        email: 'emily.johnson@example.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+38045423423',
        label: 'Home',
      },
      {
        number: '8888888888',
        label: 'Mobile',
      },
    ],
    createdAt: new Date(),
    dates: [],
  },
];
