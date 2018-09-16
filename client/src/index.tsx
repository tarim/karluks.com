import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReduxToastr from 'react-redux-toastr';
let store=createStore({});
ReactDOM.render(
  <Provider store={store}>
      <div>
        <ReduxToastr timeOut={30000} newestOnTop={false} preventDuplicates position='top-right' transitionIn='fadeIn'
          transitionOut='fadeOut' progressBar />
        <App />
      </div>
    </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
