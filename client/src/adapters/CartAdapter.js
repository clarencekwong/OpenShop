import store from '../store'

class CartAdapter {
  static ORDER_URL = 'http://localhost:3000/api/v1/orders'

  static getCart(order_id) {
    console.log('cart fetched')
    return fetch(`${this.ORDER_URL}/${order_id}`)
      .then(res => res.json())
      .then(cart => {
        store.dispatch({type: 'FETCH_CART', payload: cart})
      })
  }
}

export default CartAdapter
