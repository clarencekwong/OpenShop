const initialProductState = {
  product: []
}

function productReducer(state = initialProductState, action) {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {...state, product: action.payload}
    case "DELETE_PRODUCT":
      const updatedProduct = state.product.filter(prod => prod.id !== action.payload)
      return {...state, product: updatedProduct}
    default:
      return state
  }
}

export default productReducer
