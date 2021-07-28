import { Breakpoint } from "antd/lib/_util/responsiveObserve";
import React from "react";
import { IEarthquakeData } from "../providers/EqDataProvider";
import { SortOrder } from "antd/lib/table/interface";

const eqTableColumns = [
    {
        title: 'Location / Magnitude / URL',
        render: (record:IEarthquakeData) => (
            <React.Fragment>
              <b>Location</b>: {record.location}
              <br />
              <b>Magnitude</b>: {record.magnitude}
              <br/>
              <b>Date Occurred</b>: {record.dateOccured.toLocaleString()}
              <br/>
              <a target="_blank" rel="noreferrer" href={record.moreDetailURL}>Click here for more details</a>
            </React.Fragment>
        ),
        responsive: ['xs'] as Breakpoint[]
        
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        responsive: ['sm'] as Breakpoint[]
    },
    {
        title: 'Magnitude',
        dataIndex: 'magnitude',
        key: 'magnitude',
        defaultSortOrder: "descend" as SortOrder,
        sorter: (a:IEarthquakeData,b:IEarthquakeData) => a.magnitude - b.magnitude,
        responsive: ['sm'] as Breakpoint[]
    },
    {
        title: 'URL',
        dataIndex: 'moreDetailURL',
        key: 'moreDetailURL',
        render: (url:string) => (
            <React.Fragment>
              <a target="_blank" key="moreDetailURL" rel="noreferrer" href={url}>Click here for more details</a>
            </React.Fragment>
        ),
        responsive: ['sm'] as Breakpoint[]
    },
    {
        title: 'Date Occurred (Central EU Time)',
        dataIndex: 'dateOccured',
        key: 'dateOccured',
        render: (record:Date) => (
            <React.Fragment>
              {record.toLocaleString()}
            </React.Fragment>
        ),
        responsive: ['sm'] as Breakpoint[]
    },
    
];

export { eqTableColumns };