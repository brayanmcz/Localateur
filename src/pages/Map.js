import React, { Component } from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Map } from "../shared/map/map";

const Wrapper = styled.div`
    .map-container{
        height: 100vh;
        width: 100%;
    }
`;

export class MapPage extends Component {

  state = {
      isListOpen: false
  }

  render() {
    return (
      <Wrapper>
        
        { 
            this.state.isListOpen ? (
                <>
                <Map height="calc(50vh - 46px)" width="100%" />
                <MDBContainer>
                <MDBRow>
                    <MDBCol size="12">
                    test
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
                </>
            ) : (
                <Map height="calc(100vh - 46px)" width="100%" />
            )
        }
       
      </Wrapper>
    );
  }
}
