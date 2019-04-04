import React, { Component } from 'react';

import './App.css';
import ProductForm from './components/ProductForm'
import LoginForm from './components/LoginForm'
import CustomerRegistrationForm from './components/CustomerRegistrationForm'
import VendorRegistrationForm from './components/VendorRegistrationForm'
import ProductContainer from './containers/ProductContainer'
import 'semantic-ui-css/semantic.min.css'
import ProductAdapter from './adapters/ProductAdapter'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    ProductAdapter.getProducts()
  }

  render() {
    return (
      <div className="App">
        <ProductContainer />
        <ProductForm />
        <LoginForm />
        <CustomerRegistrationForm />
        <VendorRegistrationForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(App);
