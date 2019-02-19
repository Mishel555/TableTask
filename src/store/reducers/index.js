import { combineReducers } from 'redux';
import testReducer from './testReducer';
// import { routerReducer } from 'react-router-redux';

const stores = combineReducers({
  testReducer,
});

export default stores;
