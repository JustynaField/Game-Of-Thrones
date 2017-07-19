import { combineReducers } from 'redux';
import HousesReducer from './HousesReducer';

const rootReducer = combineReducers({
  houses: HousesReducer
})

export default rootReducer;
