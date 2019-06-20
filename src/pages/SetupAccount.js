import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBAnimation
} from "mdbreact";
import {PersonalDetailsForm} from "../shared/setupAccount/personalDetails";
import styled from "styled-components";
import { SelectAccountType } from "../shared/setupAccount/selectAccountType";

const Wrapper = styled.div`
  margin-top: -46px;
  height: 100vh;
  background: #f44436;

  input {
    background-color: transparent !important;
    color: white !important;
    border-color: #ff8f8f;
  }

  input:focus {
    box-shadow: 0px 0px 5px white;
    border: 1px solid white;
  }

  input::placeholder {
    color: white !important;
    font-weight: 200;
  }

  .small {
    color: white;
    font-weight: 200;
    margin-left: 5px;
  }

  .btn-rounded {
    border-radius: 5px;
    float: right;
  }

  .icon {
    margin-left: 5px;
  }
`;

class SetupAccountPage extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    activeItem: 1,
    itemsCount: 2
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  nextSlide = () => {
    console.log("next: ", this.state.activeItem);

    if (this.state.activeItem + 1 > this.state.itemsCount)
    this.setState({
      activeItem: 1
    });
    else 
      this.setState({activeItem: this.state.activeItem + 1});
  };

  render() {
    return (
      <MDBAnimation type="fadeIn" length="slow">

      <Wrapper>
        <MDBContainer>
          <MDBRow>
            <MDBCol >
            <MDBAnimation type={this.state.activeItem === 1 ? "slideInRight fadeIn" : "slideOutLeft"} delay="0.5s">
              <SelectAccountType hidden={this.state.activeItem !== 1} handleClick={this.nextSlide}/>
            </MDBAnimation>
            <MDBAnimation type={this.state.activeItem === 2 ? "slideInRight" : "slideOutLeft"}>
              <PersonalDetailsForm hidden={this.state.activeItem !== 2} handleClick={this.nextSlide}/>
            </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
      </MDBAnimation>

      );
  }
}

export { SetupAccountPage };
