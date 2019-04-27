import React, { Component } from "react";
import styled from "styled-components";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Map } from "../shared/map/map";

const Wrapper = styled.div` 
`;

export class MapPage extends Component {
    render() {
        return (
            <Wrapper>
                <Map
                height="calc(100vh - 40px)"
                width="calc(100vw - 15px)"
                />
            </Wrapper>
        );
    };
}