import React from 'react'
import {Select, Row, Typography, Col, Avatar, Card} from 'antd'
import moment from 'moment'

import { useGetNewsQuery } from '../services/NewsAPI';

const {Text, Title} = Typography;
const {Option} = Select;
const staticImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ({simplified}) => {

  const count = simplified ? 6 : 12;
  const { data: cryptoNews } = useGetNewsQuery({category: 'Cryptocurrency', count: count})

  console.log("crypto news ", cryptoNews);

  if(!cryptoNews?.value)
    return (
    <>
    { 
      ! simplified && 
        <Typography.Title level={2} className="heading">
        Cryptocurrencies News
        </Typography.Title>
      }
      <p>Loading...!!</p>
    </>
    )
    
  return (
    <>
    { 
      ! simplified && 
        <Typography.Title level={2} className="heading">
        Cryptocurrencies News
        </Typography.Title>
    }
    
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || staticImage} alt="News"/>
              </div>
              <p>
                { news.description > 100 ? 
                  `${news.description.substring(0, 100)}...`
                  :   news.description
                }
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || staticImage} alt="News" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow() }</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default News
