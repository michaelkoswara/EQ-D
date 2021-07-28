import React, { useContext } from "react";
import { EQDataContext } from "../providers/EqDataProvider";
import { Row, Col, Card, Typography } from "antd";
import {
  BarChart,
  CustomButton,
  ErrorBox,
  Spinner,
  StatBox,
} from "../components/";
import messages from "../utils/messages";
import { findMaxMinArray } from "../utils/findMaxMinArray";
import { findAverageInArray } from "../utils/findAverageInArray";
const { Title, Paragraph } = Typography;

const Home: React.FC = (): JSX.Element => {
  const { eqList, refreshList, isLoading, hasNetworkError, lastRefreshed } =
    useContext(EQDataContext);

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
            <StatBox
              title={messages.statMax}
              numberPrecision={2}
              type="danger"
              value={findMaxMinArray(eqList.map((i) => i.magnitude))}
            />
          </Card>
        </Col>
        <Col xs={24} md={12} xl={4} className="mb-2">
          <Card>
            <StatBox
              title={messages.statMin}
              numberPrecision={2}
              type="good"
              value={findMaxMinArray(
                eqList.map((i) => i.magnitude),
                false
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12} xl={5} className="mb-2">
          <Card>
            <StatBox
              title={messages.statAvg}
              numberPrecision={2}
              type="informational"
              value={findAverageInArray(eqList.map((i) => i.magnitude))}
            />
          </Card>
        </Col>
        <Col xs={24} className="mb-2">
          <Row>
            <Col xs={24}>
              <CustomButton
                type="primary"
                onClick={refreshList}
                text={messages.clickToRefresh}
              />
            </Col>
            <Col xs={24}>
              <Paragraph className="mt-1">
                last refreshed on {lastRefreshed.toLocaleString("DE")}
              </Paragraph>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <Typography>
            <Title level={3}>{messages.homepageGraphTitle}</Title>
          </Typography>
          <BarChart
            xField="mag"
            yField="numOfOccurrence"
            data={buildChartData()}
          />
        </Col>
      </>
    );
  };

  const buildChartData = () => {
    return [
      {
        mag: "0",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 0)
          .length,
      },
      {
        mag: "1",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 1)
          .length,
      },
      {
        mag: "2",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 2)
          .length,
      },
      {
        mag: "3",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 3)
          .length,
      },
      {
        mag: "4",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 4)
          .length,
      },
      {
        mag: "5",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 5)
          .length,
      },
      {
        mag: "6",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 6)
          .length,
      },
      {
        mag: "7",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 7)
          .length,
      },
      {
        mag: "8",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 8)
          .length,
      },
      {
        mag: "9",
        numOfOccurrence: eqList.filter((val) => Math.floor(val.magnitude) === 9)
          .length,
      },
      {
        mag: "10",
        numOfOccurrence: eqList.filter(
          (val) => Math.floor(val.magnitude) === 10
        ).length,
      },
    ];
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
          <Paragraph>{messages.homepageBody}</Paragraph>
        </Typography>
      </Row>
      <Row gutter={24} justify={isLoading ? "center" : "start"}>
        {isLoading && (
          <Col>
            <Spinner />
          </Col>
        )}
        {!isLoading && !hasNetworkError && renderStats()}
        {hasNetworkError && renderAlert()}
      </Row>
    </>
  );
};

export default Home;
