import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

import { connect } from 'react-redux'

import UserAdapter from '../adapters/UserAdapter'

class CustomerLoginForm extends React.Component {
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
		fetch("http://localhost:3000/api/v1/userlogin", {
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
				localStorage.setItem('user_id', response.jwt)
        UserAdapter.setUser(response.user.id)
        UserAdapter.logUser()
        UserAdapter.getUserOrders(response.user.id)
        .then(() => {
          const activeOrder = this.props.orders.find(order => order.status === false)
          if (activeOrder) {
            localStorage.setItem('order_id', activeOrder.id)
          }
        })
			}
		})
    this.setState({
      email: "",
  		password: ""
    })
    this.props.history.push('/')
	}


  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Log-in as a consumer
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

function mapStateToProps(state) {
  return {
    orders: state.user.orders
  }
}

export default connect(mapStateToProps)(CustomerLoginForm)
