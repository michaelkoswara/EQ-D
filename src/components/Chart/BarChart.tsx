import { Column } from '@ant-design/charts';

export interface IBarChart {
    height?:number;
    xField:string;
    yField:string;
    data:any[];
};

const BarChart = ({height=400, xField, yField, data}:IBarChart) => {

  const props = {
    data,
    height: height,
    xField: xField,
    yField: yField,
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  return <Column {...props} />;
};

export default BarChart;