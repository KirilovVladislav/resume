import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//HashRouter для gh pages
import { HashRouter, BrowserRouter } from 'react-router-dom'

import store from './store'
import App from './App'

import './assets/css/reset.css'
import './assets/css/vars.css'

ReactDOM.render(
  <HashRouter basename={'https://KirilovVladislav.github.io/resume'}>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
)
