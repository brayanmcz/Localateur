import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import styled from "styled-components";
import firebase from "firebase";

const Wrapper = styled.div`
  .navbar-button {
    color: white;
  }

  .navbar-button:visited {
    color: white;
  }

  .navbar-button:link {
    color: white;
  }

  .navbar-button:hover {
    color: white;
  }

  .navbar-button:active {
    color: white;
  }

  .title {
    font-family: "Lobster Two", cursive;
    font-size: 20px;
  }

  .button:hover {
    cursor: pointer;
  }

  .user-avatar {
    height: 22px;
    width: 22px;
    object-fit: scale-down;
    border-radius: 50%;
    position: relative;
    left: 1px;
    top: -2px;
    border: 1px solid white;
  }
`;

class Navbar extends Component {
  state = {
    isSignedIn: false,
    user: null
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user,
        user: user
      });
      console.log("user: ", user.photoURL);
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    const { user, isSignedIn } = this.state;
    return (
      <Wrapper>
        <MDBNavbar fixed="top" color="red" dark expand>
          <MDBNavbarNav center="true">
            <MDBNavItem className="mt-1">
              <Link className="navbar-button button" to="/menu">
                <MDBIcon icon="bars" size="lg" />
              </Link>
            </MDBNavItem>

            <MDBNavItem className="">
              <Link className="navbar-button button title" to="/home">
                Localateur
              </Link>
            </MDBNavItem>

            {!isSignedIn ? (
              <MDBNavItem className="mt-1">
                <Link className="navbar-button button" to="/signin">
                  <MDBIcon icon="user-circle" size="lg" />
                </Link>
              </MDBNavItem>
            ) : (
              <MDBNavItem className="mt-1">
                <Link className="navbar-button button" to={"/profile/" + user.uid}>
                  <img
                    alt={user.displayName}
                    className="user-avatar"
                    src={user.photoURL}
                  />
                </Link>
              </MDBNavItem>
            )}
          </MDBNavbarNav>
        </MDBNavbar>
      </Wrapper>
    );
  }
}

export { Navbar };
