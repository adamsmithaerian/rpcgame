import { combineReducers } from 'redux';
import user from './user';
import computer from './computer';
import app from './app';

const rootReducer = combineReducers({
  app,
  user,
  computer
});

export default rootReducer;
