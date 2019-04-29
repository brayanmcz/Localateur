import React from "react";

//Component dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Imported Pages
import { HomePage } from "./pages/Home";
import { SignInPage } from "./pages/SignIn";
import { SignUpPage } from "./pages/SignUp";
import { UserProfilePage } from "./pages/UserProfile";

//Imported Components
import styled from "styled-components";
import { Navbar } from "./shared/Navbar";

const AppWrapper = styled.div``;

const PageWrapper = styled.div`
  margin-top: 46px;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <>
        {
          <Navbar />
        }
        <Switch>
          <PageWrapper>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/profile/:id" component={UserProfilePage} />
          </PageWrapper>
        </Switch>
        </>
      </Router>
    </AppWrapper>
  );
}

export default App;
