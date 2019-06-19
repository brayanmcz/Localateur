import React from "react";
import { MDBBtn, MDBCol } from "mdbreact";

const Buttons = () => {
  return (
    <MDBCol>
        <MDBBtn tag="a" role="button" color="primary">SEARCH</MDBBtn>
        <MDBBtn tag="span" color="primary">SOMETHING NEW?</MDBBtn>
    </MDBCol>
  );
}

export default Buttons;