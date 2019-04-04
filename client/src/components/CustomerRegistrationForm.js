import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class CustomerRegistrationForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmed_password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Register a customer account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input onClick={this.handleChange} fluid name="name" placeholder='Name' />
                <Form.Input onClick={this.handleChange} fluid name="email" placeholder='E-mail address' />
                <Form.Input
                  fluid
                  placeholder='Password'
                  type='password'
                  name="password"
                  onClick={this.handleChange}
                />
                <Form.Input
                  fluid
                  placeholder='Confirm password'
                  type='password'
                  name="confirmed_password"
                  onClick={this.handleChange}
                />
                <Button fluid size='large'>
                  Register
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CustomerRegistrationForm
