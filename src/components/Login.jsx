import React, { Component } from 'react';

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  loginButton = () => {
    let {history} = this.props
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    let random = Math.ceil(Math.random()*10000000)
    let token = user.username + random
    console.log(token)
    localStorage.setItem('token', 'hahaha')
    history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Login Here!</h1>
        <form>
          <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="username..."
          value={this.state.username}
          onChange={this.handleChange}
          />
          </div>
          <label>Password </label>
          <input type="password" name="password" placeholder="password..."
          value={this.state.password}
          onChange={this.handleChange}
          />
          <button type="button" onClick={this.loginButton}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;