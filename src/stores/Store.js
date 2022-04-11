import { createStore } from 'redux';
import combineReducers from '../reducers/Index';

const store = createStore(combineReducers);

export default store;