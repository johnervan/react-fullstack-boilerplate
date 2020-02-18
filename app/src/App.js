import React from 'react'
import './App.css'
import Child from './Child'
import axios from 'axios'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      isLoading: true
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    axios.get('/api/users').then((response) => {
      this.setState({
        isLoading: false,
        firstName: response.data.firstName,
        lastName: response.data.lastName
      })
      console.log(response.data)
    })
  }

  handleChange (e) {
    if (e.target.name === 'firstName') {
      this.setState({
        firstName: e.target.value
      })
    } else if (e.target.name === 'lastName') {
      this.setState({
        lastName: e.target.value
      })
    } else if (e.target.name === 'title') {
      this.setState({
        title: e.target.value
      })
    }
  }

  render () {
    return (
      <>
        <div>Fill in your first name and last name</div>
        First Name: <input type='text' name='firstName' defaultValue={this.state.firstName} onChange={this.handleChange} />
        <br />
        Last Name: <input type='text' name='lastName' defaultValue={this.state.lastName} onChange={this.handleChange} />
        <br />
        Title: <input type='text' name='title' defaultValue={this.state.title} onChange={this.handleChange} />
        <div>Your name is {this.state.firstName} {this.state.lastName} </div>
        <Child firstName={this.state.firstName} lastName={this.state.lastName} />
      </>
    )
  }
}

export default App
