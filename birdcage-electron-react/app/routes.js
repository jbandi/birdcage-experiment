import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import BirdcagePage from './containers/BirdcagePage';
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    {/*<IndexRoute component={HomePage} />*/}
    <IndexRoute component={BirdcagePage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
