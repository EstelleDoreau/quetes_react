import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './ShoppingCartRedux/reducers';

const store = createStore(allReducers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
