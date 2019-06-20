import React from "react";
import { MDBBtn, MDBCol } from "mdbreact";
import styled from 'styled-components';

const Wrapper = styled.div`
  .center{
    text-align: center;
    margin: auto;
  }
`;


const Buttons = () => {
  return (
    <Wrapper>
    <MDBCol className="center">
        <MDBBtn tag="a" role="button" color="primary">SEARCH</MDBBtn>
        <MDBBtn tag="span" color="primary">SOMETHING NEW?</MDBBtn>
    </MDBCol>
    </Wrapper>

  );
}

export default Buttons;