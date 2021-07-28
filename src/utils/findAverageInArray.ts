export const findAverageInArray = (list:Array<number>) => {
    return list && list.length ? list.reduce((a, b) => (a + b),0) / list.length : 0;
}
