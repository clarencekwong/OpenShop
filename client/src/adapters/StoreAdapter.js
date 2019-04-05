import store from '../store'

class StoreAdapter {
  static STORE_URL = 'http://localhost:3000/api/v1/stores'

  static getStores() {
    fetch(`${this.STORE_URL}`)
      .then(res => res.json())
      .then(stores => {
        store.dispatch({type: 'FETCH_STORE', payload: stores
      })})
  }
}

export default StoreAdapter
