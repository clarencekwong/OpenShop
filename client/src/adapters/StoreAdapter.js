import store from '../store'

class StoreAdapter {
  static STORE_URL = 'http://localhost:3000/api/v1/stores'

  static getStores() {
    fetch(`${this.STORE_URL}`)
      .then(res => res.json())
      .then(stores => {
        store.dispatch({type: 'FETCH_STORE', payload: stores})
      })
  }

  static getStoreProducts(store_id) {
    fetch(`${this.STORE_URL}/${store_id}`)
      .then(res => res.json())
      .then(products => {
        store.dispatch({type: 'FETCH_STORE_PRODUCTS', payload: products.products})
      })
  }

  static selectStore(store_id, history) {
    fetch(`${this.STORE_URL}/${store_id.id}`)
      .then(res => res.json())
      .then(selectedStore => {
        console.log('selectStore fired')
        store.dispatch({type: 'SELECT_STORE', payload: selectedStore})
      })
      .then(x => history.push(`/${store_id.name}`))
  }
}

export default StoreAdapter
