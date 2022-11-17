import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Roter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './app/store'
import 'antd/dist/antd.css'

ReactDOM.render(
    <Roter>
        <Provider store={store}>
            <App />
        </Provider>
    </Roter>
    , document.getElementById('root'))