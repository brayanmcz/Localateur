import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBBtn,
  MDBCol,
  MDBRow
} from "mdbreact";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: -46px;
  height: 100vh;
  background: #F44436;

  .carousel {
    padding-top: 46px;

    height: 100vh;
    box-shadow: 0 0 0 0 white !important;
  }

  input{
    background-color: #FF7070 !important;
    color: white !important;
    border-color: #FF8F8F;
  }

  input:focus{
    box-shadow: 0px 0px 5px white;
    border: 1px solid white;
  }

  input::placeholder{
    color: white !important;
    font-weight: 200;
  }

  .small{
    color: white;
    font-weight: 200;
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
    zip: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={false}
            showIndicators={true}
            slide={true}
            multiItem
            interval={false}
            className="z-depth-1 carousel"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <div>
                    <form
                      className="needs-validation"
                      onSubmit={this.submitHandler}
                      noValidate
                    >
                      <MDBRow>
                        <MDBCol md="4" className="mb-3">

                          <input
                            value={this.state.fname}
                            name="fname"
                            onChange={this.changeHandler}
                            type="text"
                            id="defaultFormRegisterNameEx"
                            className="form-control"
                            placeholder="First Name"
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">

                          <input
                            value={this.state.lname}
                            name="lname"
                            onChange={this.changeHandler}
                            type="text"
                            id="defaultFormRegisterEmailEx2"
                            className="form-control"
                            placeholder="Last name"
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">

                          <input
                            value={this.state.email}
                            onChange={this.changeHandler}
                            type="email"
                            id="defaultFormRegisterConfirmEx3"
                            className="form-control"
                            name="email"
                            placeholder="Email address"
                          />
                          <small id="emailHelp" className="small">
                            We'll never share your email with anyone else.
                          </small>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="4" className="mb-3">
                          <input
                            value={this.state.city}
                            onChange={this.changeHandler}
                            type="text"
                            id="defaultFormRegisterPasswordEx4"
                            className="form-control"
                            name="city"
                            placeholder="City"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid city.
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">

                          <input
                            value={this.state.state}
                            onChange={this.changeHandler}
                            type="text"
                            id="defaultFormRegisterPasswordEx4"
                            className="form-control"
                            name="state"
                            placeholder="State"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                          <input
                            value={this.state.zip}
                            onChange={this.changeHandler}
                            type="text"
                            id="defaultFormRegisterPasswordEx4"
                            className="form-control"
                            name="zip"
                            placeholder="Zip"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid zip.
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                      </MDBRow>
                      {/* <MDBCol md="4" className="mb-3">
                      <div className="custom-control custom-checkbox pl-3">
                        <input
                          className="custom-control-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label className="custom-control-label" htmlFor="invalidCheck">
                          Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </MDBCol> */}
                      <MDBBtn color="red" type="submit">
                        Start Creating 
                      </MDBBtn>
                      <MDBBtn color="primary" type="submit">
                        I am an Owner
                      </MDBBtn>
                    </form>
                  </div>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export { SetupAccountPage };
