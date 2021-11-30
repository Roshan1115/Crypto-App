import React from 'react'
import {useGetExchangesQuery} from '../services/CryptoAPI'
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;



const Exchanges = () => {
  const {data, isFetching} = useGetExchangesQuery();

    // console.log(data);
  if(isFetching)
    return <Loader />;

  const exchangeData = data?.data?.exchanges;
  // console.log('exchangedata', exchangeData);

  return (
    <>
    <Row>
      <Col span={6}>Exchanges</Col>
      <Col span={6}>24h Trade Volume</Col>
      <Col span={6}>Markets</Col>
      <Col span={6}>Change</Col>
    </Row>
    <Row>
      {exchangeData.map((exchange) => (
        <Col span={24} key={exchange.id}>
          <Collapse>
            <Panel
              key={exchange.id}
              showArrow={false}
              header={(
                <Row key={exchange.id}>
                  <Col span={6}>
                    <Text><strong>{exchange.rank}.</strong></Text>
                    <Avatar className="exchange-image" src={exchange.iconUrl} />
                    <Text><strong>{exchange.name}</strong></Text>
                  </Col>
                  <Col span={6}>${millify(exchange.volume)}</Col>
                  <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                  <Col span={6}>{millify(exchange.marketShare)}%</Col>
                </Row>
                )}
            >
              {HTMLReactParser(exchange.description || '')}
            </Panel>
          </Collapse>
        </Col>
      ))}
    </Row>
  </>
  )
}

export default Exchanges
