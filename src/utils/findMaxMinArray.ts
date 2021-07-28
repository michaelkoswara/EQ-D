// Finds either the maximum or minimum value in a numerical array.
// Defaults to finding the max value. To find the minimum value, the 2nd parameter should be set to false
export const findMaxMinArray = (list: Array<number>, max = true): number => {
  if (!list || list.length < 1) {
    return 0;
  }

  return max ? Math.max(...list) : Math.min(...list);
};
