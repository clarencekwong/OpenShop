import storeReducer from './storeReducer';
import vendorReducer from './vendorReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  stores: storeReducer,
  vendor: vendorReducer,
  user: userReducer
})

// state.productReducer.products....
