import { render, cleanup } from "@testing-library/react";
import CustomTable, { ICustomTable } from "./CustomTable";
import React from "react";

afterEach(cleanup);

describe("<CustomTable/>", () => {
  it("renders the table with the correct number of columns", () => {
    const columns = [
      {
        title: "col1Header",
        dataIndex: "data1",
        key: "data1",
      },
      {
        title: "col2Header",
        dataIndex: "data2",
        key: "data2",
      },
      {
        title: "col3Header",
        dataIndex: "data3",
        key: "data3",
      },
    ];

    const tableParam: ICustomTable = {
      columns: columns,
      list: new Array(10).map((v, i) => ({
        data1: "hello",
        data2: "world",
        data3: "helloworld",
        key: i,
        extraData: v,
      })),
      className: "table-class-name",
    };

    const { container, getByTestId } = render(<CustomTable {...tableParam} />);
    const table = getByTestId("custom-table");
    expect(table).toBeInTheDocument();
    const renderedTableColumns = container.getElementsByTagName("th");

    expect(renderedTableColumns.length).toEqual(3);
  });
});
