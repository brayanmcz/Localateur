import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody
} from "mdbreact";

const NeedsSetupFromGraphCool = true;

class SetupAccountModal extends Component {
  state = {
    modal1: NeedsSetupFromGraphCool,
    redirect: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  redirect = () => {
    this.props.redirect();
  };

  render() {
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.state.modal1}
          toggle={this.toggle(1)}
          frame
          position="bottom"
        >
          <MDBModalBody className="text-center">
            <MDBRow>
              <MDBCol size="12" className="mt-5 mb-3">
                <h1>OH NO!</h1>
                You have not set up your account. How would you like to
                continue?
              </MDBCol>
            </MDBRow>
            <MDBBtn color="primary" onClick={this.redirect}>
              Setup Account
            </MDBBtn>
            <MDBBtn color="danger" outline onClick={this.toggle(1)}>
              Close
            </MDBBtn>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export { SetupAccountModal };
