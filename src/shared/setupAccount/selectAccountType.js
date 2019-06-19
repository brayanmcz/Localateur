import React, { Component } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdbreact";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 46px;

    .title{
        color: white;
        text-align: center;
        margin: 45px 0 45px 0;
    }
`;

class SelectAccountType extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    city: "",
    state: "",
    zip: "",
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <Wrapper hidden={this.props.hidden}>
            <h3 className="title">Verify Your Information</h3>
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
                    className="form-control"
                    placeholder="Last name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </MDBCol>
                {
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
                    We'll never share your email with anyone.
                  </small>
                </MDBCol>
              }
              </MDBRow>
              <MDBRow>
               
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
              <MDBBtn
                className="btn-rounded"
                color="white"
                onClick={this.handleClick}
              >
                Next
                <MDBIcon className="icon" icon="chevron-right" />
              </MDBBtn>
            </form>
      </Wrapper>
    );
  }
}

export { SelectAccountType };
