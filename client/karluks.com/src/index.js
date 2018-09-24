import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../src/components/app'
import store, { history } from './store/store'

import 'sanitize.css/sanitize.css'

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
)
