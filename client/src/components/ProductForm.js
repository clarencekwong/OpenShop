import React from 'react'
import { Form } from 'semantic-ui-react'
import ProductAdapter from '../adapters/ProductAdapter'

class ProductForm extends React.Component {
  state = {
    name: '',
    description: '',
    sku: '',
    cost: '',
    inventory: '',
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
    formData.append('description', this.state.description)
    formData.append('sku', this.state.sku)
    formData.append('cost', this.state.cost)
    formData.append('inventory', this.state.inventory)
    formData.append('photo', this.state.photo)
    formData.append('store_id', 1)
    fetch("http://localhost:3000/api/v1/products", {
      method: "POST",
      body: formData
    })
    .then(() => ProductAdapter.getProducts())
    this.setState({
      name: '',
      description: '',
      sku: '',
      cost: '',
      inventory: '',
      photo: null
    })
    e.target.reset()
  }

  render() {
    return (
      <div className="regForm">
        <Form onSubmit={this.handleSubmit}>
          <Form.Input onChange={this.handleChange} fluid name="name" label='Product name' placeholder='Product name' value={this.state.name} />
          <Form.TextArea onChange={this.handleChange} name="description" label='Product description' placeholder='Product description...' value={this.state.description}/>
          <Form.Input onChange={this.handleChange} name="sku" fluid label='SKU' placeholder='SKU' value={this.state.sku}/>
          <Form.Input onChange={this.handleChange} name="cost" fluid type="number" label='Cost' placeholder='Cost' value={this.state.cost}/>
          <Form.Input onChange={this.handleChange} name="inventory" fluid type="number" label='Inventory' placeholder='Inventory' value={this.state.inventory}/>
          <Form.Input onChange={this.handleFileChange} name="photo" fluid type="file" label='Product Image'/>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ProductForm;
