export const findAverageInArray = (list: Array<number>): number => {
  return list && list.length
    ? list.reduce((a, b) => a + b, 0) / list.length
    : 0;
};
