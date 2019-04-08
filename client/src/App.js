import React, { Component } from 'react';

import './App.css';
import HomePage from './components/HomePage'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import StoreContainer from './containers/StoreContainer'
import StoreForm from './components/StoreForm'
import ProductContainer from './containers/ProductContainer'
import ProductAdapter from './adapters/ProductAdapter'
import ProductForm from './components/ProductForm'
import NotFound from './components/NotFound'

import 'semantic-ui-css/semantic.min.css'
import { Menu, Image, Icon } from "semantic-ui-react"
import { Route, NavLink, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    ProductAdapter.getProducts()
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
          <Menu.Item as={NavLink} to="/stores" content="Stores" />
          <Menu.Item as={NavLink} to="/stores/new" content="Create Stores" />
          <Menu.Item as={NavLink} to="/product/new" content="Create Product" />
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
        <Switch>
          <Route path="/stores" exact component={StoreContainer} />
          <Route path="/stores/new" component={StoreForm} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          {this.props.selectedStore ? <Route path={`/${this.props.selectedStore.name}`} component={ProductContainer} /> : null}
          <Route path="/product/new" component={ProductForm} />
          <Route path="/" exact component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedStore: state.stores.selectedStore
  }
}

export default connect(mapStateToProps)(App)
