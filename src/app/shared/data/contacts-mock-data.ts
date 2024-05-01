import { TContact } from '../types/contact.type';

export const contactsMockData: TContact[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'Smith',
    organization: 'Google',
    address: '1600 Amphitheatre Parkway Mountain View, CA 94043',
    createdAt: new Date(1988, 2, 17),
    emails: [
      {
        email: 'john.doe@gmail.com',
        label: 'Personal',
      },
      {
        email: 'johndoe@google.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+1234567890',
        label: 'Mobile',
      },
      {
        number: '+9876543210',
        label: 'Work',
      },
    ],
    dates: [
      {
        date: '1985-07-15',
        label: 'Birthday',
      },
      {
        date: '2010-02-14',
        label: 'Joining Date',
      },
    ],
  },
  {
    id: '2',
    firstName: 'Alice',
    lastName: 'Johnson',
    organization: 'Microsoft',
    address: 'One Microsoft Way Redmond, WA 98052',
    createdAt: new Date(2000, 2, 20),
    emails: [
      {
        email: 'alice.johnson@hotmail.com',
        label: 'Personal',
      },
      {
        email: 'ajohnson@microsoft.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+15551234567',
        label: 'Mobile',
      },
    ],
    dates: [
      {
        date: '1992-11-25',
        label: 'Birthday',
      },
      {
        date: '2015-06-30',
        label: 'Joining Date',
      },
    ],
  },
  {
    id: '3',
    firstName: 'Emily',
    lastName: 'Chen',
    middleName: 'Lee',
    organization: 'Facebook',
    address: '1 Hacker Way Menlo Park, CA 94025',
    createdAt: new Date(1997, 5, 10),
    emails: [
      {
        email: 'emily.lee@gmail.com',
        label: 'Personal',
      },
      {
        email: 'elee@facebook.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+14155567890',
        label: 'Mobile',
      },
    ],
    dates: [
      {
        date: '1988-03-10',
        label: 'Birthday',
      },
      {
        date: '2018-09-15',
        label: 'Joining Date',
      },
    ],
  },
  {
    id: '4',
    firstName: 'Michael',
    lastName: 'Brown',
    organization: 'Amazon',
    address: '410 Terry Ave N Seattle, WA 98109',
    createdAt: new Date(1995, 8, 5),
    emails: [
      {
        email: 'michael.brown@yahoo.com',
        label: 'Personal',
      },
      {
        email: 'mbrown@amazon.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+12065551234',
        label: 'Mobile',
      },
    ],
    dates: [
      {
        date: '1980-12-03',
        label: 'Birthday',
      },
      {
        date: '2005-08-20',
        label: 'Joining Date',
      },
    ],
  },
  {
    id: '5',
    firstName: 'Sophia',
    lastName: 'Nguyen',
    organization: 'Apple',
    address: '1 Apple Park Way Cupertino, CA 95014',
    createdAt: new Date(2000, 1, 15),
    emails: [
      {
        email: 'sophia.nguyen@gmail.com',
        label: 'Personal',
      },
      {
        email: 'snguyen@apple.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+16505556789',
        label: 'Mobile',
      },
    ],
    dates: [
      {
        date: '1995-09-20',
        label: 'Birthday',
      },
      {
        date: '2019-04-10',
        label: 'Joining Date',
      },
    ],
  },
  {
    id: '6',
    firstName: 'Daniel',
    lastName: 'Johnson',
    organization: 'Tesla',
    address: '3500 Deer Creek Road Palo Alto, CA 94304',
    createdAt: new Date(2005, 5, 20),
    emails: [
      {
        email: 'daniel.johnson@gmail.com',
        label: 'Personal',
      },
      {
        email: 'djohnson@tesla.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+14085551234',
        label: 'Mobile',
      },
    ],
    dates: [
      {
        date: '1975-10-29',
        label: 'Birthday',
      },
      {
        date: '2018-02-10',
        label: 'Joining Date',
      },
    ],
  },
  {
    id: '7',
    firstName: 'Olivia',
    lastName: 'Miller',
    organization: 'Netflix',
    address: '100 Winchester Circle Los Gatos, CA 95032',
    createdAt: new Date(2012, 10, 12),
    emails: [
      {
        email: 'olivia.miller@gmail.com',
        label: 'Personal',
      },
      {
        email: 'omiller@netflix.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+16695551234',
        label: 'Mobile',
      },
    ],
    dates: [
      {
        date: '1983-09-05',
        label: 'Birthday',
      },
      {
        date: '2015-04-20',
        label: 'Joining Date',
      },
    ],
  },
  {
    id: '8',
    firstName: 'James',
    lastName: 'Anderson',
    organization: 'Uber',
    address: '1455 Market Street San Francisco, CA 94103',
    createdAt: new Date(2010, 7, 28),
    emails: [
      {
        email: 'james.anderson@gmail.com',
        label: 'Personal',
      },
      {
        email: 'janderson@uber.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+14155551234',
        label: 'Mobile',
      },
    ],
    dates: [
      {
        date: '1978-12-10',
        label: 'Birthday',
      },
      {
        date: '2014-06-15',
        label: 'Joining Date',
      },
    ],
  },
  {
    id: '9',
    firstName: 'Sophie',
    lastName: 'Brown',
    organization: 'Facebook',
    address: '1 Hacker Way Menlo Park, CA 94025',
    createdAt: new Date(2016, 4, 8),
    emails: [
      {
        email: 'sophie.brown@gmail.com',
        label: 'Personal',
      },
      {
        email: 'sbrown@facebook.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+12025551234',
        label: 'Mobile',
      },
    ],
    dates: [
      {
        date: '1990-03-25',
        label: 'Birthday',
      },
      {
        date: '2018-10-20',
        label: 'Joining Date',
      },
    ],
  },
  {
    id: '10',
    firstName: 'David',
    lastName: 'Lee',
    organization: 'Google',
    address: '1600 Amphitheatre Parkway Mountain View, CA 94043',
    createdAt: new Date(2015, 11, 18),
    emails: [
      {
        email: 'david.lee@gmail.com',
        label: 'Personal',
      },
      {
        email: 'dlee@google.com',
        label: 'Work',
      },
    ],
    phones: [
      {
        number: '+16505551234',
        label: 'Mobile',
      },
    ],
    dates: [
      {
        date: '1986-08-15',
        label: 'Birthday',
      },
      {
        date: '2014-03-10',
        label: 'Joining Date',
      },
    ],
  },
];
