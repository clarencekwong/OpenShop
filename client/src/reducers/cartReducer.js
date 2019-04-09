const initialCartState = {
  cart: [],
  order: null
}

function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case "FETCH_CART":
      return {...state, cart: action.payload}
    case "SUBMIT_CART":
      return {...state, cart: action.payload}
    default:
      return state
  }
}

export default cartReducer
