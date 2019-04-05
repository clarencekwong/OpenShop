const initialStoreState = {
  stores: []
}

function storeReducer(state = initialStoreState, action) {
  switch (action.type) {
    case "FETCH_STORE":
      return {...state, stores: action.payload}
    default:
      return state
  }
}

export default storeReducer
