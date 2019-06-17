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
import { FilterPage } from "./pages/Filter";
// import { BusinessSetupPage } from "./pages/BusinessSetup"; 

//Imported Components
import styled from "styled-components";
import { Navbar } from "./shared/Navbar";

//GraphQL Imports
import { graphql } from "react-apollo";
import gql from "graphql-tag";

//Geolocation Import
import { geolocated } from "react-geolocated";

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
  state = {
    allRestaurants: null,
    minLat: -122.559032,
    maxLat: -121.559032,
    minLng: 37.048384,
    maxLng: 38.048384
  }

  getLocation = () => {
    if (this.props.isGeolocationAvailable && this.props.coords)
    {
      this.setState({
        minLat: this.props.coords.latitude - 0.05,
        maxLat: this.props.coords.latitude + 0.05,
        minLng: this.props.coords.longitude - 0.05,
        maxLng: this.props.coords.longitude + 0.05,
      });
    }
  }

  componentDidMount() {
    this.props.allRestaurantsQuery.refetch().then(ret => {
      this.setState({
        allRestaurants: ret.data.allRestaurants
      });
    });
    this.getLocation();
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
            <Route exact path="/" component={ () => {
              return this.state.allRestaurants !== null ? (
                  <HomePage restaurants={this.state.allRestaurants} />
                ) : (
                  <></>
                );}} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/profile/:id" component={UserProfilePage} />
            <Route exact path="/filter" component= { FilterPage } />
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

const geolocatedApp = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);

const AppWithRestaurants = graphql(GET_RESTAURANTS, {
  name: "allRestaurantsQuery",
  options: () => ({
    variables: { latMin: 10.1, lngMin: 10.1, latMax: 10.2, lngMax: 10.2 },
    fetchPolicy: "network-only"
  })
})(geolocatedApp);

export default AppWithRestaurants;
