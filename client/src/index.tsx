import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import Routes from './components/router';
import registerServiceWorker from './registerServiceWorker';
import ReduxToastr from 'react-redux-toastr';
import { Router, BrowserRouter } from 'react-router-dom';
let store=createStore({});
ReactDOM.render(
  <Provider store={store}>
      <div>
        <ReduxToastr timeOut={30000} newestOnTop={false} preventDuplicates position='top-right' transitionIn='fadeIn'
          transitionOut='fadeOut' progressBar />
        <Router history={BrowserRouter} routes={Routes} />
      </div>
    </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
