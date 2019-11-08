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
// import Dropzone from "react-dropzone";
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
    users: "",
    selectedFile: "",
    images: null
  };

  componentDidMount() {
    const localUserId = localStorage.getItem("userId");

    if (localUserId) {
      this.fetchCurrentUser(localUserId);
    }
  }

  fetchCurrentUser = userId => {
    let configObj = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    };

    fetch(`http://localhost:3000/profile/${userId}`, configObj)
      .then(response => response.json())
      .then(response => {
        this.setState({
          currentUser: response
        });
      });
  };

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
    // console.log("login", this.state.login);
    // console.log("thiis hits", event);
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
        console.log("json", json);
        if (!json.hasOwnProperty("error")) {
          window.localStorage.setItem("token", json.jwt);
          window.localStorage.setItem("username", json.user.username);
          window.localStorage.setItem("userId", `${json.user.id}`);
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

  fileSelectHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      images: event.target.files[0]
    });
  };

  fileUploadHandler = event => {
    event.preventDefault();
    const currentId = localStorage.getItem("userId");
    const formData = new FormData();
    const formImage = this.state.images;
    formData.append("image", formImage);
    let configObj = {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: formData
    };

    fetch(`http://localhost:3000/api/image/${currentId}`, configObj)
      .then(res => res.json())
      .then(images => {
        console.log("status", images);
        this.setState({
          images
        });
      });
    this.componentDidMount();
  };

  onDrop = acceptedFiles => {
    this.setState({
      images: acceptedFiles[0]
    });
  };

  render() {
    console.log("state", this.state.current_user);

    return (
      <Router>
        <div className="App">
          <CustomNav
            currentUser={this.state.current_user}
            handleClickLogout={this.handleClickLogout}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home currentUser={this.state.current_user} />}
            />
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
                  fileSelectHandler={this.fileSelectHandler}
                />
              )}
            />
          </Switch>
          <div>
            {this.state.current_user.image ? (
              <img
                src={`http://localhost:3000/${this.state.current_user.image}`}
                alt=""
                width="50%;"
                height="50%;"
              ></img>
            ) : (
              <h2>No Image Found</h2>
            )}
          </div>
          <div>
            <form onSubmit={this.handleUpload}>
              <input
                // style={{ display: "none" }}
                type="file"
                name="file"
                onChange={this.fileSelectHandler}
                // ref={fileInput => (this.fileInput = fileInput)}
                // value={this.state.file}
              />
              {/* <button onClick={() => this.fileInput.click()}>
                Add a Photo{" "}
              </button> */}
              <button type="submit" onClick={this.fileUploadHandler}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);

// <Dropzone
//   onDrop={this.onDrop}
//   accept="image/png, image/gif,image/jpg,image/jpeg"
// >
//   {({ getRootProps, getInputProps }) => (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       {this.state.images !== null
//         ? "File Uploaded"
//         : "Click me to upload a file!"}
//     </div>
//   )}
// </Dropzone>
