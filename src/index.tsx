import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import reducer from './reducers';

import './index.css';

const store: Store<any> = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
