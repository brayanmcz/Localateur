import React, { Component } from "react";
import styled from "styled-components";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader
} from "mdbreact";

const Wrapper = styled.div`
  padding-top: 15px;

  .avatar-header {
    height: 75px;
  }

  .user-avatar {
    height: 100px;
    width: 100px;
    background-color: black;
    border-radius: 50%;
    border: 5px solid white;
    margin-bottom: 100px;
  }

  .avatar-container{
    text-align: center;
  }
`;

class UserProfilePage extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBCard>
                <MDBCardHeader className="avatar-header" color="red">
                <div class="avatar-container">
                  <img
                    className="user-avatar"
                    src="https://lh5.googleusercontent.com/-o25W57-3VpU/AAAAAAAAAAI/AAAAAAAAD34/PVm1zwCabLk/photo.jpg"
                    alt="user-avatar"
                  />
                </div>
                test
                </MDBCardHeader>
                <MDBCardBody />
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export { UserProfilePage };
