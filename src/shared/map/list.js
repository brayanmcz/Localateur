import React, { Component } from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { RestaurantCardImage } from "../cardImage";

const Wrapper = styled.div`
    margin-top: 15px;
`;

export class List extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12" sm="5" md="3">
                <RestaurantCardImage />
            </MDBCol>
            <MDBCol size="12" sm="7" md="9">
                info
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12" sm="5" md="3">
                <RestaurantCardImage />
            </MDBCol>
            <MDBCol size="12" sm="7" md="9">
                info
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}
