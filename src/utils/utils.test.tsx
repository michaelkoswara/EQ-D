import { findMaxMinArray } from "./findMaxMinArray";
import { findAverageInArray } from "./findAverageInArray";
import { buildEqChartData } from "./buildEqChartData";
import { IEarthquakeData } from "../providers/EqDataProvider";

describe("findMaxMindArray", () => {
  it("returns the correct maximum value from an array of integers", () => {
    const maxArray = [1, 400, 4, 2, 5, 6, 2, 88, 34, 55];
    const max = findMaxMinArray(maxArray);
    expect(max).toStrictEqual(400);
  });
  it("returns the correct minimum value from an array of integers", () => {
    const minArray = [6, 400, 4, 0.5, 5, 6, 2, 88, 34, 55];
    const min = findMaxMinArray(minArray, false);
    expect(min).toStrictEqual(0.5);
  });
  it("returns 0 when the array is empty", () => {
    const array: number[] = [];
    const min = findMaxMinArray(array, false);
    expect(min).toStrictEqual(0);
  });
});

describe("findAverageInArray", () => {
  it("returns the correct average value from an array of integers", () => {
    const avgArr = [1, 1, 3, 4, 6];
    const avg = findAverageInArray(avgArr);
    expect(avg).toStrictEqual(3);
  });
  it("returns 0 if the array is empty", () => {
    const avgArr: number[] = [];
    const avg = findAverageInArray(avgArr);
    expect(avg).toStrictEqual(0);
  });
});

describe("buildEqChartData", () => {
  it("returns the correct chart data", () => {
    const avgArr: Array<IEarthquakeData> = [
      {
        dateOccured: new Date(),
        magnitude: 5,
        location: "on Earth",
        moreDetailURL: "michaelkoswara.github.io/EQ-D",
      },
      {
        dateOccured: new Date(),
        magnitude: 5,
        location: "on Mars",
        moreDetailURL: "michaelkoswara.github.io/EQ-D",
      },
      {
        dateOccured: new Date(),
        magnitude: 2,
        location: "on Jupiter",
        moreDetailURL: "michaelkoswara.github.io/EQ-D",
      },
    ];
    const eqChartData = buildEqChartData(avgArr);
    expect(eqChartData.length).toStrictEqual(11);
    expect(
      eqChartData.find((data) => data.mag === "5")?.numOfOccurrence
    ).toEqual(2);
    expect(
      eqChartData.find((data) => data.mag === "2")?.numOfOccurrence
    ).toEqual(1);
  });
});
