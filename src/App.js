import React, { Component } from "react";

//Component dependencies
import { BrowserRouter as Router, Route } from "react-router-dom";

//Imported Pages
import { HomePage } from "./pages/Home";
import { SignInPage } from "./pages/SignIn";
import { SignUpPageWithMutation as SignUpPage } from "./pages/SignUp";
import { UserProfilePage } from "./pages/UserProfile";
import { MapPage } from "./pages/Map";
import { SetupAccountPage } from "./pages/SetupAccount";

//Imported Components
import styled from "styled-components";
import { Navbar } from "./shared/Navbar";

//GraphQL Imports
import { graphql } from "react-apollo";
import gql from "graphql-tag";

//Geocode Imports
import Geocode from 'react-geocode';

Geocode.setApiKey("AIzaSyDiDLXMnE76vMVZ-xfbMFaWriBS_gs4lQY");

const AppWrapper = styled.div``;

const PageWrapper = styled.div`
  margin-top: 46px;
`;

const GET_RESTAURANTS = gql`
  query localRestaurants($latMin: Float!, $lngMin: Float!, $latMax: Float!, $lngMax: Float!) {
    allRestaurants(filter: {location: {AND: [{lat_lte: $latMax, lng_lte: $lngMax}, {lat_gte: $latMin, lng_gte: $lngMin}]}}) {
      id
      createdAt
      updatedAt
      name
      images
      visits
      thumbs
      location {
        lat
        lng
      }
      amenities {
        name
        description
        icon
        color
      }
      categories {
        name
      }
      owner {
        id
        account {
          firstName
          lastName
        }
      }
      visits
      visitors {
        account {
          firstName
          lastName
        }
      }
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRestaurants: null
    };
  }

  getLocation = () => {

  }

  componentDidMount() {
    this.props.allRestaurantsQuery.refetch().then(ret => {
      this.setState({
        allRestaurants: ret.data.allRestaurants
      });
      console.log("All Restaurants: ", this.state.allRestaurants);
    });
  }

  render() {
    return (
      <AppWrapper>
        <Router>
          <PageWrapper>
            <Route
              render={location => {
                return location.location.pathname === "/create" ? (
                  <></>
                ) : (
                  <Navbar />
                );
              }}
            />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/profile/:id" component={UserProfilePage} />
            <Route
              path="/map"
              component={() => {
                return this.state.allRestaurants !== null ? (
                  <MapPage restaurants={this.state.allRestaurants} />
                ) : (
                  <></>
                );
              }}
            />
            <Route exact path="/create" component={SetupAccountPage} />
          </PageWrapper>
        </Router>
      </AppWrapper>
    );
  }
}

const AppWithRestaurants = graphql(GET_RESTAURANTS, {
  name: "allRestaurantsQuery",
  options: props => ({
    variables: { latMin: 10.1, lngMin: 10.1, latMax: 10.2, lngMax: 10.2 },
    fetchPolicy: "network-only"
  })
})(App);

export default AppWithRestaurants;
