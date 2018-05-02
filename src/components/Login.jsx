import React, { Component } from 'react';

class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Login Here!</h1>
        <form>
          <input type="text" placeholder="email..."/>
        </form>
      </div>
    );
  }
}

export default Login;