import storeReducer from './storeReducer';
import vendorReducer from './vendorReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  stores: storeReducer,
  vendor: vendorReducer,
  user: userReducer,
  cart: cartReducer
})

// state.productReducer.products....
