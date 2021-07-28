import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";

export interface ICustomTable {
    columns?: ColumnsType<any>;
    list?: Array<any>;
    className?:string;
}

const CustomTable = ({list, columns, className}:ICustomTable) => {
    return <Table dataSource={list} columns={columns} className={className} data-testid="custom-table" />
};

export default CustomTable;