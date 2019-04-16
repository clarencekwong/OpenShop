import React, { Component } from 'react';

import './App.css';
import HomePage from './components/HomePage'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import StoreContainer from './containers/StoreContainer'
import StoreForm from './components/StoreForm'
import EditForm from './components/EditForm'
import ProductContainer from './containers/ProductContainer'
import StoreProductContainer from './containers/StoreProductContainer'
import TransactionContainer from './containers/TransactionContainer'
import CartContainer from './containers/CartContainer'
import DashboardContainer from './containers/DashboardContainer'
// import StripeContainer from './containers/StripeContainer'
import ProductForm from './components/ProductForm'
import NotFound from './components/NotFound'
import UserAdapter from './adapters/UserAdapter'

import 'semantic-ui-css/semantic.min.css'
import { Menu, Image, Icon } from "semantic-ui-react"
import { Route, NavLink, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Script from 'react-load-script'

class App extends Component {
  state = {}

  componentDidMount() {
    if (localStorage.getItem('user_id')) {
      UserAdapter.autoLoginUser()
      UserAdapter.logUser()
    }
    if (localStorage.getItem('vendor_id')) {
      UserAdapter.autoLoginVendor()
      UserAdapter.logUser()

    }
  }

  handleLogOut() {
    localStorage.clear()
    UserAdapter.logUserOut()
    UserAdapter.resetStoreToggle()
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  render() {
    const jwtUser = localStorage.getItem('user_id')
    const jwtVendor = localStorage.getItem('vendor_id')
    return (
      <div className="App">
        <Script
          url="https://js.stripe.com/v3/"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Menu fixed="top" inverted>
          <Menu.Item as={NavLink} to="/">
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          { jwtVendor ? null : <Menu.Item as={NavLink} to="/stores" content="Stores" />}
          { this.props.storeCreated ? null : <Menu.Item as={NavLink} to="/stores/new" content="Create Stores" />}
          { jwtVendor ?
            <React.Fragment>
              <Menu.Item as={NavLink} to="/product/new" content="Create Product" />
              <Menu.Item as={NavLink} to="/product" content="My Products" />
            </React.Fragment>
            : null
          }
          <Menu.Menu position="right">
            { jwtUser ? <Menu.Item as={NavLink} to="/transactions" content="Transactions" /> : null}
            {/*<Menu.Item as={NavLink} to="/checkout" content="Checkout" />*/}
            { jwtVendor ? <Menu.Item as={NavLink} to="/dashboard" content="Dashboard" /> : null}
            { jwtVendor ? null :
            <React.Fragment>
              <Menu.Item as={NavLink} to="/cart">
                <Icon name="shopping cart" />
              </Menu.Item>
            </React.Fragment>
            }
            { this.props.logged_in ?
              null :
              <React.Fragment>
                <Menu.Item as={NavLink} to="/login" content="Log In" />
                <Menu.Item as={NavLink} to="/register" content="Register" />
              </React.Fragment>
            }
            { this.props.logged_in ? <Menu.Item as={NavLink} to="/home" onClick={this.handleLogOut} content="Log Out" /> : null }
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route path="/stores" exact component={StoreContainer} />
          <Route path="/stores/new" component={StoreForm} />
          <Route path="/product" exact component={StoreProductContainer} />
          <Route path="/cart" component={CartContainer} />
          {/*<Route path="/checkout" component={StripeContainer} />*/}
          <Route path="/login" component={LoginContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/transactions" component={TransactionContainer} />
          {this.props.selectedStore ? <Route path={`/${this.props.selectedStore.name}`} component={ProductContainer} /> : null}
          <Route path="/product/:id/edit" component={EditForm} />
          <Route path="/product/new" component={ProductForm} />
          <Route path="/home" component={HomePage} />
          <Route path="/" exact component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedStore: state.stores.selectedStore,
    logged_in: state.user.logged_in,
    storeCreated: state.user.storeCreated,
    vendor: state.user.vendor
  }
}

export default connect(mapStateToProps)(App)
