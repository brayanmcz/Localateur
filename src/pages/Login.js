import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const config = {
  apiKey: "AIzaSyCFc_Jl0OBWrQNTYh6kEQkdBbn_i_cAnZU",
  authDomain: "localateur-app.firebaseapp.com"
};

firebase.initializeApp(config);

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/login",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

const Wrapper = styled.div`
  .title {
    font-family: "Lobster Two", cursive;
    font-size: 70px;
    text-align: center;
    color: #f44336;
    margin: 30px 15px;
    margin-top: 0px;
  }

  .form-control {
    width: 220px;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .separator-container {
    margin-top: 15px;
    margin-bottom: 0px;

    text-align: center;
  }

  .separator-half{
    display: inline-block;
    width: 90px;
    color: lightgrey;
  }
  .separator-word{
    position: relative;
    color: lightgrey;
    top: -12px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .center{
    margin: auto;
  }

  .btn-signin{
    position: relative;
    width: 220px;
    background-color: #3454D1 !important;
  }

  .signin-message{
    font-size: 13px;
    width: 220px;
    word-wrap: break-word;
    text-align: justify;
  }
`;

class LoginPage extends Component {
  state = {
    isSignedIn: false
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user
      });
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <Wrapper>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="12">
                <div className="title">Localateur</div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <div className="signin-message center">
                  Sign in with your Localateur account
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="12">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="Username"
                />
                <input
                  type="password"
                  className="form-control"
                  id="userPassword"
                  placeholder="Password"
                />
                <div className="center">
                <MDBBtn className="btn btn-block btn-md btn-signin">
                  Sign In
                </MDBBtn>
                </div>
                
              </MDBCol>
            </MDBRow>

            <MDBRow>
            <MDBCol>
            <div className="separator-container" >
            <hr className="separator-half"/>
            <span className="separator-word">or</span>
            <hr className="separator-half"/>
            </div>
              
            </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="12">
                <StyledFirebaseAuth
                  uiConfig={uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <div>
                  Create your account
                </div>
              </MDBCol>
            </MDBRow>

            
          </MDBContainer>
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <p>
          Welcome {firebase.auth().currentUser.displayName}! You are now
          signed-in!
        </p>
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </Wrapper>
    );
  }
}

export { LoginPage };
 