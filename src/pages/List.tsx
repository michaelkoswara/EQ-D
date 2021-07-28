import React, { useContext } from 'react';
import { EQDataContext } from '../providers/EqDataProvider';
import { Row, Col, Typography  } from 'antd';
import {eqTableColumns} from '../utils/columnData';
import { CustomButton, CustomTable, ErrorBox, Spinner } from '../components';
import messages from '../utils/messages';
const { Paragraph, Title} = Typography;



const List:React.FC = ():JSX.Element => {
    const {eqList, refreshList, isLoading, hasNetworkError, lastRefreshed} = useContext(EQDataContext);

    const renderTableView = () => (
        <>
            <Col sm={24}>
                <div>
                    Total: {eqList.length}
                </div>
                <div>
                    <CustomButton type="primary" onClick={refreshList} text={messages.clickToRefresh} className="mt-1 mb-1"/>
                    <Paragraph className="mt-1">last refreshed on {lastRefreshed.toLocaleString("DE")}</Paragraph>

                </div>
            </Col>
            <Col sm={24}>
                <CustomTable list={eqList.map((eq,i) => ({...eq, key:i}))} columns={eqTableColumns} />
            </Col>
        </>
    );

    const renderAlert = () => {
        return ( 
            <Col sm={24}>
                <ErrorBox
                    message={messages.networkError}
                    showIcon
                    showRetryButton
                    onRetryClick={refreshList}
                />
            </Col>
        );
    };

    return (
        <>
            <Row>
                <Typography>
                    <Title>{messages.listPageHeader}</Title>
                    <Paragraph>
                        {messages.listPageBody}
                    </Paragraph>
                </Typography>
            </Row>
            <Row gutter={16} justify={isLoading ? "center" : "start"}>
                {isLoading && <Col><Spinner/></Col>}
                {!isLoading && !hasNetworkError && renderTableView()}
                {hasNetworkError && renderAlert()}
            </Row>
        </>
    );
}

export default List;