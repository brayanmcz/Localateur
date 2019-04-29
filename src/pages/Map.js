import React, { Component } from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Map } from "../shared/map/map";

const Wrapper = styled.div`
    .map-container {
        width: 100vw;
        height: calc(${props => props.height});
        margin-right: px;
        margin-left: -62px;
    }
`;

export class MapPage extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        height: "100vh - 46px"
    };

    render() {
        return (
            <Wrapper {...this.props}>
                <Map
                    height="100%"
                    width="100%"
                />
            </Wrapper>
        );
    };
}