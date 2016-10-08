import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import './css/photon.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <div className="window">
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>
  </div>,
  document.getElementById('root')
);
