import * as React from 'react';
import { Switch,Route} from 'react-router'
import  Authentication from '../auth/authentication'
import Home from '../home'
import News from '../news'
import Login from '../auth'
import Album from '../album'
import Links from '../link'


export default (
    <Switch>
        <Route exact path="/" component={Home} breadcrumbIgnore/>
      <Route exact path="/news" component={News} />
      <Route exact path="/login" component={Login} />
      <Authentication exact path="/album" component={Album} />
      <Authentication exact path="/links" component={Links} />
    </Switch>
        )



