import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  .navbar-button {
    color: white;

  }

  .navbar-button:visited {
    color: white;
  }

  .navbar-button:link {
    color: white;
  }

  .navbar-button:hover {
    color: white;
  }

  .navbar-button:active {
    color: white;
  }

  .title {
    font-family: "Lobster Two", cursive;
    font-size: 20px;
  }

  .button:hover {
    cursor: pointer;
  }

  .custom-size-left {
    font-size: 16px;
  }

  .custom-size-right {
    font-size: 18px;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <MDBNavbar fixed="top" color="red" dark expand>
          <MDBCollapse id="navbarCollapse" navbar>
            <MDBNavbarNav center="true">
              <MDBNavItem className="mt-1">
                <Link className="navbar-button button" to="/map">
                  <MDBIcon icon="map" className="custom-size-left" />
                </Link>
              </MDBNavItem>

              <MDBNavItem className="mt-1">
                <Link className="navbar-button button" to="/filter">
                  <MDBIcon icon="filter" className="custom-size-left" />
                </Link>
              </MDBNavItem>

              <MDBNavItem className="">
                <Link className="navbar-button button title" to="/home">
                  Localateur
                </Link>
              </MDBNavItem>

              <MDBNavItem className="mt-1">
                <Link className="navbar-button button" to="/notifications">
                  <MDBIcon icon="bell" className="custom-size-right" />
                </Link>
              </MDBNavItem>

              <MDBNavItem className="mt-1">
                <Link className="navbar-button button" to="/profile">
                  <MDBIcon icon="user-circle" className="custom-size-right" />
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Wrapper>
    );
  }
}

export { Navbar };
