import React, { Component } from 'react'

import '../styles/Login.css'
import twitterLogo from '../assets/twitter.svg'
import LoginForm from '../components/LoginForm'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = { username: '' }

    this.handleInputChange = (e) => {
      this.setState({ username: e.target.value })
    }

    this.handleSubmit = (e) => {
      e.preventDefault()

      const { username } = this.state

      if (!username.length) return

      localStorage.setItem('@GoTwitter:username', username)
      this.props.history.push('/timeline')
    }
  }

  render () {
    return (
      <div className='login-wrapper'>
        <img src={twitterLogo} alt='Twitter logo' />
        <LoginForm
          username={this.state.username}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    )
  }
}
