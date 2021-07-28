import React, { useContext } from 'react';
import { EQDataContext } from '../providers/EqDataProvider';
import { Row, Col, Card, Typography } from 'antd';
import {CustomButton, ErrorBox, Spinner, StatBox} from '../components/';
import messages from '../utils/messages';
import { findMaxMinArray } from '../utils/findMaxMinArray';
import { findAverageInArray } from '../utils/findAverageInArray';
const { Title, Paragraph } = Typography;



const Home:React.FC = ():JSX.Element => {
    const {eqList, refreshList, isLoading, hasNetworkError, lastRefreshed} = useContext(EQDataContext);
    
    const renderStats = () => {
        
        return (
            <>
                <Col xs={24} md={12} xl={6} className="mb-2">
                    <Card>
                        <StatBox title={messages.statTotal} value={eqList.length} />
                    </Card>
                </Col>
                <Col xs={24} md={12} xl={4} className="mb-2">
                    <Card>
                        <StatBox title={messages.statMax} numberPrecision={2} type="danger" value={findMaxMinArray(eqList.map(i => i.magnitude))} />
                    </Card>
                </Col>
                <Col xs={24} md={12} xl={4} className="mb-2">
                    <Card>
                        <StatBox title={messages.statMin} numberPrecision={2} type="good" value={findMaxMinArray(eqList.map(i => i.magnitude),false)} />
                    </Card>
                </Col>
                <Col xs={24} md={12} xl={5} className="mb-2">
                    <Card>
                        <StatBox title={messages.statAvg} numberPrecision={2} type="informational" value={findAverageInArray(eqList.map(i => i.magnitude))} />
                    </Card>
                </Col>
                <Col xs={24}>
                    <Row>
                        <Col xs={24}><CustomButton type="primary" onClick={refreshList} text={messages.clickToRefresh}/></Col>
                        <Col xs={24}><Paragraph className="mt-1">last refreshed on {lastRefreshed.toLocaleString("DE")}</Paragraph></Col>
                    </Row>
                </Col>
            </>
        )
    };

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
                    <Title>{messages.homepageHeader}</Title>
                    <Paragraph>
                        {messages.homepageBody}
                    </Paragraph>
                </Typography>
            </Row>
            <Row gutter={24} justify={isLoading ? "center" : "start"}>
                {isLoading && <Col><Spinner/></Col>}
                {!isLoading && !hasNetworkError && renderStats()}
                {hasNetworkError && renderAlert()}
            </Row>
        </>
    );
}

export default Home;