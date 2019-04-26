import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';

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
  }

  .form-control{
    width: 220px;
    margin: auto;
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
              <MDBCol size="12">
              <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Username"
              />
              <input
              type="password"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Password"
              />
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
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </Wrapper>
    );
  }
}

export { LoginPage };
