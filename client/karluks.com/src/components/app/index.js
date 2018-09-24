import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
//import BreadCrumbs from 'react-router-breadcrumbs';
import Header from '../_shared/public/header'
import Footer from '../_shared/public/footer'
import Menu from '../_shared/public/menu'
import Routes from './router'

const App = ({history}) => (
  <ConnectedRouter history={history}>
  <div>
    <Header />
<Menu />
<div id='main' role='main'>
          <div id='ribbon'>
            <ol className='breadcrumb'>
            </ol>
          </div>
          <div className='well'>
          { Routes }
          </div>
        </div>
    <Footer />
  </div>
</ConnectedRouter> 
)
App.propTypes = {
  history: PropTypes.object,
}
export default App
