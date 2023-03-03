import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

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
