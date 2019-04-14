import store from '../store'

import StoreAdapter from './StoreAdapter'

class UserAdapter {
  static USER_URL = 'http://localhost:3000/api/v1/users'
  static VENDOR_URL = 'http://localhost:3000/api/v1/vendors'

  static getUserOrders(user_id) {
    return fetch(`${this.USER_URL}/${user_id}`)
      .then(res => res.json())
      .then(user => {
        store.dispatch({type: 'FETCH_USER_ORDER', payload: user.orders})
        const activeOrder = user.orders.find(order => order.status === false)
        if (activeOrder) {
          localStorage.setItem('order_id', activeOrder.id)
        }
      })
  }

  static setUser(user_id) {
    fetch(`${this.USER_URL}/${user_id}`)
      .then(res => res.json())
      .then(user => {
        store.dispatch({type: 'SET_USER', payload: user})
      })
  }

  static setVendor(vendor_id) {
    fetch(`${this.VENDOR_URL}/${vendor_id}`)
      .then(res => res.json())
      .then(vendor => {
        store.dispatch({type: 'SET_VENDOR', payload: vendor})
      })
  }

  static logUser() {
    store.dispatch({type: 'LOG_USER'})
  }

  static logUserOut() {
    store.dispatch({type: 'LOGOUT_USER'})
  }

  static storeCreated() {
    store.dispatch({type: 'STORE_CREATED'})
  }

  static resetStoreToggle() {
    store.dispatch({type: 'STORE_RESET'})
  }

  static autoLoginUser() {
    const jwtUser = localStorage.getItem('user_id')
    return fetch(`http://localhost:3000/api/v1/userlogin`, {
      headers: {
        "Authorization": jwtUser
      }
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors) {
         alert(response.errors)
       } else {
         UserAdapter.setUser(response.id)
         UserAdapter.getUserOrders(response.id)
       }
    })
  }

  static autoLoginVendor() {
    const jwtVendor = localStorage.getItem('vendor_id')
    fetch(`http://localhost:3000/api/v1/vendorlogin`, {
      headers: {
        "Authorization": jwtVendor
      }
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors) {
         alert(response.errors)
       } else {
         UserAdapter.setVendor(response.id)
         if (!response.store) {
           UserAdapter.storeCreated()
         } else {
           StoreAdapter.getStoreProducts(response.store.id)
         }
       }
    })
  }
}

export default UserAdapter
