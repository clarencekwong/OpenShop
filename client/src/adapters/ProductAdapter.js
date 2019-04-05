import store from '../store'

class ProductAdapter {
  static PRODUCT_URL = 'http://localhost:3000/api/v1/products'

  static getProducts() {
    fetch(`${this.PRODUCT_URL}`)
      .then(res => res.json())
      .then(products => {
        store.dispatch({type: 'FETCH_PRODUCT', payload: products
      })})
  }
}

export default ProductAdapter
