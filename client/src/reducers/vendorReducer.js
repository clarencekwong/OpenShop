const initialVendorState = {
  vendor: ''
}

function storeReducer(state = initialVendorState, action) {
  switch (action.type) {
    case "STORE_VENDOR":
      return {...state, vendor: action.payload}
    default:
      return state
  }
}

export default storeReducer
