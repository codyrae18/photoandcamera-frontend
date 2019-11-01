import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <div className="signup">
          <h1>Sign up:</h1>
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
            <div className="form-group">
              <input
                type="confirmpassword"
                className="form-control"
                placeholder="Confirm Password"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="description"
                className="form-control"
                placeholder="Description"
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
