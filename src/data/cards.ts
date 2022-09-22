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

export let cardsData: card[] = [
  {
    id: '1',
    name: 'HoSeong',
    company: 'Samsung',
    theme: 'dark',
    title: 'Software Engineer',
    email: 'email',
    message: 'go for it',
    fileName: 'HoSeong',
    fileURL: '',
  },
  {
    id: '2',
    name: 'HoSeong',
    company: 'Samsung',
    theme: 'light',
    title: 'Software Engineer',
    email: 'email',
    message: 'go for it',
    fileName: 'HoSeong',
    fileURL: 'HoSeong.png',
  },
  {
    id: '3',
    name: 'HoSeong',
    company: 'Samsung',
    theme: 'colorful',
    title: 'Software Engineer',
    email: 'email',
    message: 'go for it',
    fileName: 'HoSeong',
    fileURL: '',
  },
];
