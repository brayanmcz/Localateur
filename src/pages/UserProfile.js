import React, { Component } from "react";
import styled from "styled-components";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";
import { Link } from 'react-router-dom';


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

  .center{
    text-align: center;
  }

  .light{
    font-weight: 300;
  }

  .bold{
    font-weight: 500;
  }

  .left-btn{
    margin-left: 10px !important; 
  }
  .right-btn{
    margin-left: -10px !important; 
  }

  .flat{
    box-shadow: 0 0 0 0 white;
  }
  .flat:active{
    box-shadow: 0 0 0 0 red;
  }
  .flat:link{
    box-shadow: 0 0 0 0 white;
  }
  .flat:hover{
    box-shadow: 0 0 0 0 white;
  }
  .flat:visited{
    box-shadow: 0 0 0 0 white;
  }
  .flat:focus{
    box-shadow: 0 0 0 0 white;
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
                </MDBCardHeader>
                <MDBCardBody />
                <MDBRow>
                  <MDBCol>
                    <h5 className="name center">Brayan Castro</h5>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <p className="rank light center">Rank: <span className="bold">Critic</span></p>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBBtn block className="left-btn flat" flat>Profile</MDBBtn>
                  </MDBCol>
                  <MDBCol>
                    <MDBBtn block className="right-btn flat" flat>Reviews</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="center">
                    <MDBBtn outline color="red"><Link to="/test">Upgrade to Business Account</Link></MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export { UserProfilePage };
