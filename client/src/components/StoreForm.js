import React from 'react'
import { Form } from 'semantic-ui-react'

class ProductForm extends React.Component {
  state = {
    name: '',
    photo: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFileChange = (e) => {
    this.setState({
      photo: e.target.files[0]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', this.state.name)
    formData.append('photo', this.state.photo)
    formData.append('vendor_id', 1)
    fetch("http://localhost:3000/api/v1/products", {
      method: "POST",
      body: formData
    })

  }

  render() {
    return (
      <div className="regForm">
        <Form onSubmit={this.handleSubmit}>
          <Form.Input onChange={this.handleChange} fluid name="name" label='Product name' placeholder='Product name' />
          <Form.Input onChange={this.handleFileChange} name="photo" fluid type="file" label='Product Image' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ProductForm;
