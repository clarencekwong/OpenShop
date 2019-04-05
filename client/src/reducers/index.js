import productReducer from './productReducer';
import storeReducer from './storeReducer';
import vendorReducer from './vendorReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  products: productReducer,
  stores: storeReducer,
  vendor: vendorReducer
})

// state.productReducer.products....
