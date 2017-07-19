import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

import AppContainer from './containers/AppContainer';
import './index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);


render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
