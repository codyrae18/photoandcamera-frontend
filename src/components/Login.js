import React, { Component } from "react";
class Login extends Component {
  render() {
    return (
      <div>
        <div className="signup">
          <h1>LOGIN</h1>
        </div>
        <div>
          <form>
            <div className="form-group">
              <input
                type="Username"
                className="form-control"
                placeholder="Username"
                name="username"
                value={this.props.login.username}
                onChange={this.props.handleLoginChange}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.props.login.password}
                onChange={this.props.handleLoginChange}
              ></input>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.props.handleClick}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
