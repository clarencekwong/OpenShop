const initialProductState = {
  products: []
}

function productReducer(state = initialProductState, action) {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {...state, products: action.payload}
    default:
      return state
  }
}

export default productReducer
