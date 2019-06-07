import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import styled from "styled-components";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCard
} from "mdbreact";
import { Link } from "react-router-dom";

const config = {
  apiKey: "AIzaSyCFc_Jl0OBWrQNTYh6kEQkdBbn_i_cAnZU",
  authDomain: "localateur-app.firebaseapp.com"
};

firebase.initializeApp(config);

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ]
};

const Wrapper = styled.div`
  padding-top: 35px;
  background-color: #efefef;
  min-height: calc(100vh - 46px);

  .title {
    font-family: "Lobster Two", cursive;
    font-size: 70px;
    text-align: center;
    color: #f44336;
    margin: 0px 15px;
  }

  .form-control {
    width: 220px;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 12px;
  }

  .separator-container {
    margin-top: 15px;
    margin-bottom: 0px;

    text-align: center;
  }

  .separator-half {
    display: inline-block;
    width: 90px;
    color: lightgrey;
  }

  .separator-word {
    position: relative;
    color: lightgrey;
    top: -12px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .center {
    margin: auto;
    text-align: center;
  }

  .btn-signin {
    position: relative;
    width: 220px;
    background-color: #f44336 !important;
  }

  .signin-title {
    font-size: 30px;
    width: 220px;
    word-wrap: break-word;
    text-align: center;
    font-weight: 600;
    color: #000f08;
  }

  .signup-text {
    font-size: 13px;
  }

  .signup-link {
    color: red;
  }

  .signup-link:hover {
    cursor: pointer;
  }

  .signin-card {
    margin: auto;
    max-width: 300px !important;
  }

  .new-to-text {
    color: grey;
    font-weight: 200;
  }

  .mdl-button{
    width: 220px;
    /* margin: auto !important; */
    left: -5px;
    }

  @media only screen and (max-width: 374px){
    .mdl-button{
    width: 220px;
    margin: auto !important;
    left: -10px;
    }
  }

  .error-message {
    margin-top: 15px;
    margin-bottom: -10px;
    text-align: center;
    color: red;
    font-size: 10px;
    width: 220px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

class SignInPage extends Component {
  state = {
    isSignedIn: false,
    errorMessage: ""
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

  signIn = () => {
    var email = this.refs.email.value;
    var pass = this.refs.password.value;

    firebase.auth().signInWithEmailAndPassword(email, pass)
      .catch(err => {
        console.log(err);
        this.setState({
          errorMessage: err.message
        })
      })
      .then(ret=> {
        console.log(ret);
      })
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <Wrapper>
          <MDBContainer>
            <MDBCard className="signin-card">
              <MDBCardBody>

                <MDBRow>
                  <MDBCol>
                    <div className="signin-title center">Sign In</div>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol size="12">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      ref="email"
                    />
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      ref="password"
                    />
                    <div className="center">
                      <MDBBtn className="btn btn-block btn-md btn-signin" color="danger" onClick={this.signIn}>
                        Sign In
                      </MDBBtn>
                    </div>
                    <p className="error-message">{this.state.errorMessage}</p>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <div className="separator-container">
                      <hr className="separator-half" />
                      <span className="separator-word">or</span>
                      <hr className="separator-half" />
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
                    <div className="center signup-text">
                      <span className="new-to-text">New to Localateur? </span>
                      <Link to="/signup" className="signup-link">
                        Sign Up{" "}
                      </Link>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
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

export { SignInPage };
