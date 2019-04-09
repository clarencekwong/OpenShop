import store from '../store'

class UserAdapter {
  static USER_URL = 'http://localhost:3000/api/v1/users'

  static getUserOrders(user_id) {
    console.log('get user order fired')
    return fetch(`${this.USER_URL}/${user_id}`)
      .then(res => res.json())
      .then(user => {
        store.dispatch({type: 'FETCH_USER_ORDER', payload: user.orders})
      })
  }

  static setUser(user_id) {
    console.log('set user fired')
    fetch(`${this.USER_URL}/${user_id}`)
      .then(res => res.json())
      .then(user => {
        store.dispatch({type: 'SET_USER', payload: user})
      })
  }
}

export default UserAdapter
