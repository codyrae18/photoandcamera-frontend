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
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              ></input>
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
