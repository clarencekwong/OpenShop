import React, { Component } from 'react';

import './App.css';
import ProductForm from './components/ProductForm'
import LoginForm from './components/LoginForm'
import CustomerRegistrationForm from './components/CustomerRegistrationForm'
import VendorRegistrationForm from './components/VendorRegistrationForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductForm />
        <LoginForm />
        <CustomerRegistrationForm />
        <VendorRegistrationForm />
      </div>
    );
  }
}

export default App;
