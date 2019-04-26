import React from "react";

//Component dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Imported Pages
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";

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
          //<Navbar />
        }
        <Switch>
          <PageWrapper>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
          </PageWrapper>
        </Switch>
        </>
      </Router>
    </AppWrapper>
  );
}

export default App;
