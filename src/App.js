import React, { Component } from "react";

//Component dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Imported Pages
import { HomePage } from "./pages/Home";
import { SignInPage } from "./pages/SignIn";
import { SignUpPageWithMutation as SignUpPage } from "./pages/SignUp";
import { UserProfilePage } from "./pages/UserProfile";
import { MapPage } from "./pages/Map";
import { BusinessSetupPage } from "./pages/BusinessSetup"; 

//Imported Components
import styled from "styled-components";
import { Navbar } from "./shared/Navbar";

//GraphQL Imports
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const AppWrapper = styled.div`
`;

const PageWrapper = styled.div`
  margin-top: 46px;
`;

const GET_RESTAURANTS = gql`
  query {
    allRestaurants {
      id
      createdAt
      updatedAt
      images
      visits
      amenities {
        name
        description
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
  componentDidMount() {
    this.props.allRestaurantsQuery.refetch()
      .then((ret) => {
        this.setState({
          allRestaurants: ret.data.allRestaurants
        });
        console.log(this.state.allRestaurants);
      });
  };

  render() {
    return (
      <AppWrapper>
        <Router>
          <>
            <Navbar />
            <Switch>
              <PageWrapper>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signin" component={SignInPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/profile/:id" component={UserProfilePage} />
                <Route exact path="/map" component={MapPage} />
                <Route exact path="/businesssetup" component={BusinessSetupPage} />
              </PageWrapper>
            </Switch>
          </>
        </Router>
      </AppWrapper>
    );
  };
}

const AppWithRestaurants = graphql(GET_RESTAURANTS, {
  name: 'allRestaurantsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(App)

export default AppWithRestaurants;
