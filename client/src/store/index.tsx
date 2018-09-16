import * as Redux from 'redux';

let createStore: (initialState: any)=> Redux.Store<any>;

if (process.env.NODE_ENV === 'development') {
  createStore = require('./store.dev').default;
} else {
  createStore = require('./store.prod').default;
}

export default createStore;