export type card = {
  id: string;
  name: string;
  company: string;
  theme: string;
  title: string;
  email: string;
  message: string;
  fileName: string;
  fileURL: string;
};

export type cards = {
  [key: string]: card;
};

export let cardsData: cards = {
  '1': {
    id: '1',
    name: 'HoSeong',
    company: 'Samsung',
    theme: 'dark',
    title: 'Software Engineer',
    email: 'email',
    message: 'go for it',
    fileName: '1',
    fileURL: '',
  },
  '2': {
    id: '2',
    name: 'HoSeong',
    company: 'Samsung',
    theme: 'light',
    title: 'Software Engineer',
    email: 'email',
    message: 'go for it',
    fileName: 'HoSeong',
    fileURL: '',
  },
  '3': {
    id: 'HoSeong',
    name: 'HoSeong',
    company: 'Samsung',
    theme: 'colorful',
    title: 'Software Engineer',
    email: 'email',
    message: 'go for it',
    fileName: 'HoSeong',
    fileURL: '',
  },
};
