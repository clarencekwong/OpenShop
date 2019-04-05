import React, { Component } from 'react';

import './App.css';
import CustomerLoginForm from './components/CustomerLoginForm'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import ProductContainer from './containers/ProductContainer'
import HomePage from './components/HomePage'
import ProductAdapter from './adapters/ProductAdapter'

import 'semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux'
import { Menu, Image, Icon } from "semantic-ui-react"
import { Route, NavLink } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    // ProductAdapter.getProducts()
  }

  handleLogOut() {
    localStorage.clear()
  }

  render() {
    return (
      <div className="App">
        <Menu fixed="top" inverted>
          <Menu.Item as={NavLink} to="/">
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a">
              <Icon name="shopping cart" />
            </Menu.Item>
            <Menu.Item as={NavLink} to="/login" content="Log In" />
            <Menu.Item as={NavLink} to="/register" content="Register" />
            <Menu.Item as="a" onClick={this.handleLogOut} content="Log Out" />
          </Menu.Menu>
          <Menu.Item>
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu>
        {/*<ProductContainer />
        <ProductForm />*/}
        <Route path="/" exact component={HomePage} />
        <Route path="/login/" component={LoginContainer} />
        <Route path="/register/" component={RegisterContainer} />
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
