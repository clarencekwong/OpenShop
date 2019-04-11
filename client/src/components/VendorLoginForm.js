import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

import { connect } from 'react-redux'

import UserAdapter from '../adapters/UserAdapter'

class VendorLoginForm extends React.Component {
  state = {
		email: "",
		password: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = () => {
		fetch("http://localhost:3000/api/v1/vendorlogin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors) {
				alert(response.errors)
			} else {
        this.props.dispatch({type: "SET_VENDOR", payload: response.vendor.id})
        localStorage.setItem('vendor_id', response.jwt)
        UserAdapter.setVendor(response.vendor.id)
        if (!response.vendor.store) {
          UserAdapter.storeCreated()
        }
        UserAdapter.logUser()
        this.props.history.push('/')
			}
		})
    this.setState({
      email: "",
      password: ""
    })
	}


  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Log-in as a vendor
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  name="email"
                  iconPosition='left'
                  placeholder='E-mail address'
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  name="password"
                  placeholder='Password'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Button fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(null)(VendorLoginForm)
