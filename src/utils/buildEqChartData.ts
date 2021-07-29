import { IEarthquakeData } from "../providers/EqDataProvider";

export const buildEqChartData = (
  eqList: IEarthquakeData[]
): Array<{ [key: string]: string | number }> => {
  return [
    {
      mag: "0",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 0)
        .length,
    },
    {
      mag: "1",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 1)
        .length,
    },
    {
      mag: "2",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 2)
        .length,
    },
    {
      mag: "3",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 3)
        .length,
    },
    {
      mag: "4",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 4)
        .length,
    },
    {
      mag: "5",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 5)
        .length,
    },
    {
      mag: "6",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 6)
        .length,
    },
    {
      mag: "7",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 7)
        .length,
    },
    {
      mag: "8",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 8)
        .length,
    },
    {
      mag: "9",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 9)
        .length,
    },
    {
      mag: "10",
      numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 10)
        .length,
    },
  ];
};
