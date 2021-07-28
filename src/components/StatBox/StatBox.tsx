import { Statistic } from "antd";
import "./statbox.scss";


export interface IStatBox {
    numberPrecision?:number;
    type?: "danger" | "good" | "neutral" | "informational";
    value:number;
    title:string;
};

const StatBox = ({title, numberPrecision, type = "neutral", value}:IStatBox) => {
    return <Statistic title={title} precision={numberPrecision} className={type} value={value} data-testid="statbox"/>;
};

export default StatBox;