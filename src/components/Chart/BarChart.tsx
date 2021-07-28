import { Column } from "@ant-design/charts";
import React from "react";

export interface IBarChart {
  height?: number;
  xField: string;
  yField: string;
  data: Array<{ [key: string]: number | string }>;
}

const BarChart = ({
  height = 400,
  xField,
  yField,
  data,
}: IBarChart): JSX.Element => {
  const props = {
    data,
    height: height,
    xField: xField,
    yField: yField,
    point: {
      size: 5,
      shape: "diamond",
    },
  };

  return <Column {...props} />;
};

export default BarChart;
