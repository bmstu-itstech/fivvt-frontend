interface historyItem {
  year: number;
  desc: string;
}
export const historyUsecase: historyItem[] = [
  {
    year: 2005,
    desc: 'событие 1',
  },
  {
    year: 2007,
    desc: 'событие 2',
  },
  {
    year: 2009,
    desc: 'событие 3',
  },
  {
    year: 2020,
    desc: 'событие 4',
  },
  {
    year: 2025,
    desc: 'событие 5',
  },
];

export const firstUsecase: historyItem = {
  year: 2003,
  desc: 'событие 0',
};
