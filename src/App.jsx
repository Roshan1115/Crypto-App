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
      <div className="Navbar">
        <Navbar />
      </div>
      <Layout>
      <div className="main">
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
      </div>
      </Layout>
      <div className="footer">

      </div>
    </div>
  )
}

export default App