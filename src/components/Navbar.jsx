import React, {useState, useEffect} from 'react'
import {Button, Menu, Typography, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import {
  HomeOutlined, 
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined
} from '@ant-design/icons'
import icon from '../image/doge.png'


const Navbar = () => {

  const [activeMenue, setActiveMenue] = useState(true);
  const [screenSize, setScreenSize] = useState(null);


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []) 

  useEffect(() => {
    if(screenSize < '800'){
      setActiveMenue(false);
    }else{
      setActiveMenue(true);
    }
  }, [screenSize])


  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/Crypto-App">Crypto Home</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={() => setActiveMenue(! activeMenue)}>
          <MenuOutlined/>
        </Button>
      </div>
      { activeMenue && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/Crypto-App">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link to="/Crypto-App/cryptocurrencies">Crypto Currencies</Link>
          </Menu.Item> 
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="/Crypto-App/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>}>
            <Link to="/Crypto-App/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default Navbar
