import React, { Component } from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Wrapper = styled.div `
    meme
`

export class List extends Component {
    render() {
        return (
            <Wrapper>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Wrapper>
        );
    };
}