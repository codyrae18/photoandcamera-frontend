import React, { Component } from "react";
import CustomNav from "./components/CustomNav";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    accounts: {
      username: "",
      password: "",
      description: ""
    },
    login: {
      username: "",
      password: ""
    },
    loggedin: false,
    error: "",
    current_user: "",
    users: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/albums", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        // this.setState({
        //   users: data.users
        // });
        console.log(data);
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { accounts } = this.state;
    // console.log("this is the stuff you have on form", event);
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          name: accounts.name,
          username: accounts.username,
          password: accounts.password,
          description: accounts.description
        }
      })
    })
      .then(r => r.json())
      .then(r => console.log("successfully created an account", r));
  };

  handleChange = event => {
    const accounts = { ...this.state.accounts };
    accounts[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ accounts });
  };

  handleLoginChange = event => {
    const login = { ...this.state.login };
    login[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ login });
  };

  handleClick = event => {
    console.log("login", this.state.login);
    console.log("thiis hits", event);
    event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.login.username,
          password: this.state.login.password
        }
      })
    };
    fetch(`http://localhost:3000/api/login`, configObj)
      .then(resp => resp.json())
      .then(json => {
        // this.props.history.push("/home");

        if (!json.hasOwnProperty("error")) {
          window.localStorage.setItem("token", json.jwt);
          window.localStorage.setItem("username", json.user.username);
          window.localStorage.setItem("id", `${json.user.user_id}`);
          // window.location.assign("http://localhost:3000/api/users");
          this.setState({ current_user: json.user });
          console.log("fetching", json);
        } else {
          this.setState({ error: json.error });
        }
      })
      .catch(error => console.log("username or password did not match"));
    this.setState({
      username: "",
      password: ""
    });
  };

  handleClickLogout = event => {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    console.log("Current User", this.state.current_user);
    return (
      <Router>
        <div className="App">
          <CustomNav
            currentUser={this.state.current_user}
            handleClickLogout={this.handleClickLogout}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/signup"
              render={() => (
                <Signup
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  accounts={this.state.accounts}
                />
              )}
            />
            <Route path="/profile" component={Profile} />
            <Route
              path="/login"
              render={() => (
                <Login
                  handleLoginChange={this.handleLoginChange}
                  handleClick={this.handleClick}
                  handleClickLogout={this.handleClickLogout}
                  login={this.state.login}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
