import React, {useState, useEffect} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Input, Typography} from 'antd'


import {useGetCryptosQuery} from '../services/CryptoAPI'

const Cryptocurrencies = ({simplified}) => {

  const count = simplified ? 10 : 100;
  const {data, isFetching} = useGetCryptosQuery(count);
  const cryptoList = data?.data?.coins;
  const [cryptos, setCryptos] = useState()
  const [search, setSearch] = useState("");


  useEffect(() => {

    if(cryptoList){
      const matchingData = cryptoList.filter((coin) => {
        const name = coin.name.toLowerCase();
        return name.includes(search.toLowerCase());
      });
      setCryptos(matchingData);
    }
  }, [cryptoList, search])


  console.log("cryptos", cryptoList);

  if(! cryptos)
    return (
      <>

      {
        simplified ?

        <p>Loading...!!</p>
        :
        <>
          <Typography.Title level={2} className="heading">
          Crypto Currencies
          </Typography.Title>
          <p>Loading...!!</p>
        </>
      }
      </>
    );
  
  return (
    <>

    {
       ! simplified && (
        <>
        <Typography.Title level={2} className="heading">
            Crypto Currencies
        </Typography.Title>

        <div className="search-crypto">
          <Input placeholder="Search Crypto Currency" onChange={(e) => setSearch(e.target.value)} />
        </div>
        </>
      )
    }

      <Row gutter={[32,32]} className="crypto-card-container">
      {cryptos?.map((currency) => (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
            <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl}/>}
              hoverable
              >
                <p>Price: ${millify(currency.price)}</p>
                <p>Market Cap: ${millify(currency.marketCap)}</p>
                <p>Daily Change: ${millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>


    </>
  )
}

export default Cryptocurrencies
