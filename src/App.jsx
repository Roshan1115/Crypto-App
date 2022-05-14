import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {Layout, Typography, Space} from  'antd'

import { 
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News
 } from './components'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
      <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/Crypto-App" element={<Homepage />} />
              <Route exact path="/Crypto-App/exchanges" element={<Exchanges />} />
              <Route exact path="/Crypto-App/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/Crypto-App/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/Crypto-App/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      
      <div className="footer">
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
          Cryto App <br />
          Designed and developed in reference with JS-Mastery @ Roshan Bishi
        </Typography.Title>
        <Space>
          <Link to="/Crypto-App">Home</Link>
          {/* <Link to="/Crypto-App/exchanges">Exchanges</Link> */}
          <Link to="/Crypto-App/news">News</Link>
        </Space>
      </div>

    </div>
  
  </div>
  )
}

export default App
