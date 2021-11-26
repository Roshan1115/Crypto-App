import React, {useState} from 'react'
import HTMLReactParser from 'html-react-parser'
import {useParams} from 'react-router-dom'
import millify from 'millify'
import {Col, Row, Typography, Select} from 'antd'
import { 
  MoneyCollectOutlined, 
  DollarCircleOutlined, 
  FundOutlined, 
  ExclamationCircleOutlined, 
  StopOutlined, 
  TrophyOutlined, 
  CheckOutlined, 
  NumberOutlined, 
  ThunderboltOutlined } from '@ant-design/icons';

import { useGetDetailsQuery, useGetHistoryQuery } from '../services/CryptoAPI'
import LineChart from './LineChart'
import Loader from './Loader'

const {Title, Text} = Typography;
const {Option} = Select;

const CryptoDetails = () => {

  const {coinId} = useParams();
  const [timePeriod, settimePeriod] = useState('7d');
  const { data, isFetching } = useGetDetailsQuery(coinId);
  const { data: coinHistory } = useGetHistoryQuery({coinId, timePeriod});
  const cryptoDetails = data?.data?.coin;

  // console.log(data);
  // console.log("hostory detail", coinHistory);
  if(isFetching)
    return <Loader />;

const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

const stats = [
  { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
  { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
  { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <ThunderboltOutlined /> },
  { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
  { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
];

const genericStats = [
  { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
  { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
  { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
  { title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
  { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
];


  return (
    <>
      <Col className="coin-detail-container">
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {CryptoDetails.name} ({cryptoDetails.slug}) Price
          </Title>
          <p>
            {CryptoDetails.price} Live price in US dollars. View value statistics, market cap and sypply.
          </p>
        </Col>
          <Select
            defaultValue="7d"
            placeholder="Select Time Period"
            className="select-timeperiod"
            onChange={(val) => settimePeriod(val)}
            >
              {time.map((timeOption) => 
                <Option key={timeOption}>{timeOption}</Option>
              )}
          </Select>
  

        {/* chart in lline  */}
      <LineChart coinHistory={coinHistory} currPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />

      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-detailes-heading">
              {cryptoDetails.name} Value Statistics
            </Title>
            <p>
              An overview having statistics of {cryptoDetails.name}
            </p>
          </Col>
          {stats.map(({title, value, icon}) => (
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Col className="stats">
                {value}
              </Col>
            </Col>
          ))}
        </Col>

        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-detailes-heading">
              Other Statistics
            </Title>
            <p>
              An overview having statistics of all Cryptocurrencies
            </p>
          </Col>
          {genericStats.map(({title, value, icon}) => (
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Col className="stats">
                {value}
              </Col>
            </Col>
          ))}
        </Col>
      </Col>

      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {cryptoDetails.name}
            {HTMLReactParser(cryptoDetails.description)}
          </Title>
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails.name} Links
          </Title>
          {cryptoDetails.links.map((link) => (
            <Row key={link.name} className="coin-link">
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
    </>
  )
}

export default CryptoDetails
