import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'
//import * as Redux from 'redux';
//let promise: Redux.Middleware = require('redux-promise');
import { composeWithDevTools } from 'redux-devtools-extension';
//import { createLogger } from 'redux-logger';

const configureStore = (initialState: any) => {
  let store = createStore(
    reducer,
    initialState,composeWithDevTools(applyMiddleware(thunk)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;