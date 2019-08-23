import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../src/routes'
import { Provider } from 'react-redux'
import store from '../src/store'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
// eslint-disable-next-line no-undef
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
