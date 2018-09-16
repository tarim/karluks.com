import * as React from 'react';
import App from './App';
import { Switch,Route} from 'react-router-dom';
import Album from './album/index';
import Contact from './shared/public/contact';
import Home from './dashboard/index'
export default class Router extends React.Component{
    render(): JSX.Element {
        return(
    <Switch>
        <Route exact path='/' component={App} />
          <Route path='/Album' component={Album} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Home' component={Home} />
    </Switch>
        )
      }
}

