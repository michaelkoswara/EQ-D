import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";

export interface ICustomTable {
  columns?: ColumnsType<any>;
  list?: Array<{ [key: string]: number | string }>;
  className?: string;
}

const CustomTable = ({
  list,
  columns,
  className,
}: ICustomTable): JSX.Element => {
  return (
    <Table
      dataSource={list}
      columns={columns}
      className={className}
      data-testid="custom-table"
    />
  );
};

export default CustomTable;
