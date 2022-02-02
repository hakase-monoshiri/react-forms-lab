import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",


    };
  }

  login = () => {
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state.username, this.state.password)
    }
  }

  updateUsername = (event) => {
    this.setState(
      {username: event.target.value} 
    )
  }

  updatePassword = (event) => {
    this.setState(
      {password: event.target.value}
    )
  }

  submitForm = (event) => {
    event.preventDefault();
    this.login();
  }
  
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.updateUsername} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.updatePassword} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
