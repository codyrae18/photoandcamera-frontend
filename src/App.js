import React, { Component, Fragment } from "react";
import CustomNav from "./components/CustomNav";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Switch, Route, withRouter } from "react-router-dom";

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
    images: null,
    posts: [],
    filteredPosts: [],
    userPost: [],
    categories: [],
    currentDropDown: "",
    currentCategory: "",
    visible: false,
    modalIsOpen: false,
    postTitle: "",
    dropDownPlaceHolder: "Category",
    onePhoto: "",
    showPhotoModal: false
  };

  componentDidMount() {
    this.fetchAllCategories();
    this.fetchAllPost();
    const localUserId = localStorage.getItem("userId");

    if (localUserId) {
      this.fetchCurrentUser(localUserId);
    }
  }

  fetchAllPost = post => {
    let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    };
    fetch(`http://localhost:3000/posts`, configObj)
      .then(response => response.json())
      .then(posts => {
        // console.log("this is all the photos", posts);
        this.setState({
          filteredPosts: posts,
          posts: posts
        });
      })
      .then(this.userImages);
  };

  fetchAllCategories = category => {
    let configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    };
    fetch(`http://localhost:3000/categories`, configObj)
      .then(response => response.json())
      .then(categories => {
        console.log("this is all the category", categories);
        this.setState({
          categories
        });
      });
  };

  fetchCurrentUser = userId => {
    let configObj = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }
    };

    fetch(`http://localhost:3000/api/profile/${userId}`, configObj)
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
          password: accounts.password
          // description: accounts.description
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

  titleHandleChange = event => {
    const postTitle = { ...this.state.postTitle };
    postTitle[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ postTitle });
  };

  handleClick = event => {
    console.log("login", this.state.login);

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
        // console.log("json", json);
        if (!json.hasOwnProperty("error")) {
          window.localStorage.setItem("token", json.jwt);
          window.localStorage.setItem("username", json.user.username);
          window.localStorage.setItem("userId", `${json.user.id}`);
          // window.location.assign("http://localhost:3000/users");
          this.setState({ current_user: json.user });
          // console.log("fetching", json);
        } else {
          this.setState({ error: json.error });
        }
      })
      .catch(error => console.log("username or password did not match"));
    this.setState({
      username: "",
      password: ""
    });
    this.props.history.push("/");
  };

  userImages = () => {
    let myUserId = parseInt(localStorage.getItem("userId"));
    let filteredPost = this.state.posts.filter(post => {
      return post.user_id === myUserId;
    });
    this.setState({
      userPost: filteredPost
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

  categoryOnClick = event => {
    let filteredId = parseInt(event.target.id);
    let filteredPost = this.state.posts.filter(post => {
      return post.category_id === filteredId;
    });
    this.setState({
      currentCategory: filteredId,
      filteredPosts: filteredPost
    });
    // this.fetchAllPost();
  };

  dropDownSelect = event => {
    event.preventDefault();
    this.setState({
      currentDropDown: event.target.id,
      dropDownPlaceHolder: event.target.innerText
    });
    // debugger;
  };

  fileUploadHandler = event => {
    event.preventDefault();
    const currentId = localStorage.getItem("userId");
    const formPayLoad = new FormData();
    const postImage = this.state.images;
    const postTitle = this.state.postTitle;
    // console.log("postTitle", postTitle.title);
    // console.log("currentId", currentId);

    formPayLoad.append("post_image", postImage);
    formPayLoad.append("title", postTitle.title);
    formPayLoad.append("user_id", currentId);
    formPayLoad.append("category_id", this.state.currentDropDown);

    // console.log("formPayload", formPayLoad);
    let configObj = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: formPayLoad
    };

    fetch(`http://localhost:3000/posts`, configObj)
      .then(res => res.json())
      .then(images => {
        // console.log("status >>>> ", images);
        this.setState({
          images
        });
        this.fetchAllPost();
      })
      .catch(function() {
        console.log("error");
      });
  };

  onDrop = acceptedFiles => {
    this.setState({
      images: acceptedFiles[0]
    });
  };

  toggleAlert = event => {
    event.preventDefault();

    this.setState({
      visible: !this.state.visible
    });
  };

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  searchHandleChange = input => {
    console.log("input", input.target.value);
  };

  onePhotoClick = event => {
    // console.log("one photo click", event.target.currentSrc);
    this.setState({
      onePhoto: event.target.currentSrc,
      showPhotoModal: !this.state.showPhotoModal
    });
  };

  render() {
    console.log("onePhoto:", this.state.onePhoto);
    console.log("show photo:", this.state.showPhotoModal);
    // console.log("modalIsOpen", this.state.modalIsOpen);
    return (
      <Fragment>
        <div className="App">
          <CustomNav
            currentUser={this.state.current_user}
            handleClickLogout={this.handleClickLogout}
            searchHandleChange={this.searchHandleChange}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  filteredPosts={this.state.filteredPosts}
                  currentUser={this.state.current_user}
                  categories={this.state.categories}
                  categoryOnClick={this.categoryOnClick}
                  toggleAlert={this.toggleAlert}
                  toggleModal={this.toggleModal}
                  dropDownSelect={this.dropDownSelect}
                  visible={this.state.visible}
                  fileUploadHandler={this.fileUploadHandler}
                  fileSelectHandler={this.fileSelectHandler}
                  dropDownPlaceHolder={this.state.dropDownPlaceHolder}
                  titleHandleChange={this.titleHandleChange}
                  onePhotoClick={this.onePhotoClick}
                  onePhoto={this.state.onePhoto}
                  show={this.state.showPhotoModal}
                />
              )}
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
            <Route
              path="/profile"
              render={() => <Profile userPost={this.state.userPost} />}
            />
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
        </div>
      </Fragment>
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
// //   )}
// // </Dropzone>
// <div>
// <form onSubmit={this.handleUpload}>
//   <input
//     // style={{ display: "none" }}
//     type="file"
//     name="file"
//     onChange={this.fileSelectHandler}
//     // ref={fileInput => (this.fileInput = fileInput)}
//     // value={this.state.file}
//   />
//   {/* <button onClick={() => this.fileInput.click()}>
//     Add a Photo
//   </button> */}
//   <div>
//     <DropdownButton
//       id="dropdown-basic-button"
//       title="Dropdown button"
//       onClick={this.dropdownSelect}
//     >
//       {this.state.categories.map(category => (
//         <Dropdown.Item key={category.id} id={category.id}>
//           {category.title}
//         </Dropdown.Item>
//       ))}
//       {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">
//         Another action
//       </Dropdown.Item>
//       <Dropdown.Item href="#/action-3">
//         Something else
//       </Dropdown.Item> */}
//     </DropdownButton>
//   </div>

//   <button type="submit" onClick={this.fileUploadHandler}>
//     Submit
//   </button>
// </form>
// </div>

// <div>
//             {this.state.current_user.image ? (
//               <img
//                 src={`http://localhost:3000/${this.state.current_user.image}`}
//                 alt=""
//                 width="50%;"
//                 height="50%;"
//               ></img>
//             ) : (
//               <h2>No Image Found</h2>
//             )}
//           </div>
