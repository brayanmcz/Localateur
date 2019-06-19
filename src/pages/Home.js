import React, { Component } from "react";
import firebase from "firebase";
import { Recommended } from "../shared/lrn_cardRecommend";
import styled from "styled-components";
import { VideoCmpt } from "../shared/Video_cmp";
import Search from "../shared/search_bar";
import Buttons from "../shared/Buttons_cmp";

const Wrapper = styled.div`
  margin-top: 70px;

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
              <div align="center" className="searchVideoDiv">
                <Search></Search>
                <Buttons></Buttons>
                <VideoCmpt />
              </div>
                <Recommended />
                <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            </Wrapper>
          );
    }
}

export { HomePage };