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

//GraphQL Imports
import { graphql } from "react-apollo"
import gql from "graphql-tag"

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

const Wrapper = styled.div`
  padding-top: 35px;
  background-color: #efefef;
  min-height: calc(100vh - 46px);
  padding-bottom: 35px;

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

  .mdl-button {
    width: 220px;
    /* margin: auto !important; */
    left: -5px;
  }

  @media only screen and (max-width: 374px) {
    .mdl-button {
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

const CREATE_CURR_ACCOUNT = gql`
  mutation createCurrAccount($authID: String!, $first: String!, $last: String!, $email: String!){
    createAccount(authID: $authID, firstName: $first, lastName: $last, email: $email) {
      id
    }
  }
`;

class SignUpPage extends Component {
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

  signUp = () => {
    var email = this.refs.email.value;
    var pass = this.refs.password.value;
    var first = this.refs.first.value;
    var last = this.refs.last.value;

    var displayName = first + " " + last;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch(err => {
        if (err.code === "auth/email-already-in-use") {
          this.setState({
            errorMessage: err.message
          });
        }
        if (err.code === "auth/weak-password") {
          this.setState({
            errorMessage: err.message
          });
        }
      })
      .then((ret) => {
        if (ret) {
          firebase.auth().currentUser.updateProfile({
            displayName: displayName
          });
          const user = firebase.auth().currentUser.getToken();
          this.props.addCurrUserMutation(user, first, last, email);
        }
      });
  };

  render() {
    if (!this.state.isSignedIn) {
      return (
        <Wrapper>
          <MDBContainer>
            <MDBCard className="signin-card">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    <div className="signin-title center">Sign Up</div>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol size="12">
                    <input
                      type="text"
                      className="form-control"
                      id="first"
                      placeholder="First name"
                      ref="first"
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="last"
                      placeholder="Last name"
                      ref="last"
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      placeholder="Email"
                      ref="email"
                    />
                    <input
                      type="password"
                      className="form-control"
                      id="userPassword"
                      placeholder="Password (8 characters minimum)"
                      ref="password"
                      required
                    />
                    <div className="center">
                      <MDBBtn
                        className="btn btn-block btn-md btn-signin"
                        color="danger"
                        onClick={this.signUp}
                        type="submit"
                      >
                        Create Account
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
                      ref="authui"
                      uiConfig={uiConfig}
                      firebaseAuth={firebase.auth()}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <div className="center signup-text">
                      <span className="new-to-text">Already a member? </span>
                      <Link to="/signin" className="signup-link">
                        Sign In{" "}
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

const SignUpPageWithMutation = graphql(CREATE_CURR_ACCOUNT, {
  name: 'createCurrAccountMutation',
  options: {
    fetchPolicy: 'network-only',
  },
})(SignUpPage)
export { SignUpPageWithMutation };
