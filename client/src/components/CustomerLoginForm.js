import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import store from '../store'

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
			}
			})
	}


  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  name="email"
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  name="password"
                  placeholder='Password'
                  type='password'
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

export default CustomerLoginForm
