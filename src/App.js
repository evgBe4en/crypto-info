import React from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { NavBar, HomePage, Exchanges, Cryptocurrencies, CryptoDetalis, News } from './components'
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <NavBar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/exchanges" element={<Exchanges />} />
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route path="/crypto/:coinId" element={<CryptoDetalis />} />
                            <Route path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>

                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }} >
                        Footer , <br />
                        All rights reserverd
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App