import React, { Component } from "react";
// import { Jumbotron, Button } from "react-bootstrap";

class Signup extends Component {
  render() {
    const { handleSubmit, handleChange, accounts } = this.props;
    console.log(accounts);
    return (
      <div>
        <div className="signup">
          <h1>Sign up:</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                id="username"
                name="username"
                type="username"
                className="form-control"
                placeholder="username"
                onChange={handleChange}
                value={accounts.username}
              ></input>
            </div>
            <div className="form-group">
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                value={accounts.password}
              ></input>
            </div>
            <div className="form-group">
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={accounts.password_digest}
              ></input>
            </div>
            <div className="form-group">
              <input
                id="description"
                name="description"
                type="description"
                className="form-control"
                placeholder="Description"
                onChange={handleChange}
                value={accounts.description}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
