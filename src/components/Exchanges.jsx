import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetCryptoExchangeQuery } from "../services/exchangeApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangeQuery();
  const exchangesList = data?.data?.data;
  console.log(useGetCryptoExchangeQuery());
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={8}>24h Trade Volume</Col>
        <Col span={8}>Country</Col>
      </Row>
      <Row>
        {data.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.trust_score_rank}.</strong>
                      </Text>
                      <Avatar className="exchange-image" src={exchange.image} />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={8}>
                      ${millify(exchange.trade_volume_24h_btc)}
                    </Col>
                    <Col span={8}>
                      {millify(exchange.country || "Unknown country")}
                    </Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "")}
                <p>
                  <a>{exchange.url}</a>
                </p>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
