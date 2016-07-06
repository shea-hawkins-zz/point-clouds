import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';

var defaultState = {
  cloudLoading: true,
  pointCloud: []
};

var reducerMap = {
  loadingCloud: function(prevState, data) {
    return Object.assign({}, prevState, { cloudLoading: true });
  },
  loadedCloud: function(prevState, data) {
    return Object.assign({}, prevState, { cloudLoading: false });
  },
  receiveCloud: function(prevState, data) {
    return Object.assign({}, prevState, { pointCloud: data });
  }
};

var reducer = function(prevState = defaultState, action) {
  if (reducerMap[action.type]) {
    return reducerMap[action.type](prevState, action.data);
  } else {
    return prevState;
  }
};

var store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('app'));
