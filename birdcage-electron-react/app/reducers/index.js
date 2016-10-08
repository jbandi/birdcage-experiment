import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import tweets from './tweets';

const rootReducer = combineReducers({
  counter,
  tweets,
  routing
});

export default rootReducer;
