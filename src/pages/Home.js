import React, { Component } from 'react';
import firebase from 'firebase';

import styled from 'styled-components';

const Wrapper = styled.div`

`;

class HomePage extends Component{

    state = {
        isSignedIn: false
    };

    componentWillMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
          console.log("loggedin: ", user);

          this.setState({
            isSignedIn: !!user
          });
        });
      }
    
      componentWillUnmount() {
        this.unregisterAuthObserver();
      }


    render() {
        if (!this.state.isSignedIn)
      {
        return (
            <Wrapper>
                not logged in
            </Wrapper>
          );
      }
        return (
            <Wrapper>
                <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            </Wrapper>
          );
    }
}

export { HomePage };