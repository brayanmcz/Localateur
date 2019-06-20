import React, { Component } from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Wrapper = styled.div`
    .rec {
        height: 150px;
        margin: auto;
        margin-top: 32px;
        background-image: url("https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397__340.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border: 5px solid #F44336;
        border-radius: 10px;
    }

    .container {
        width: 100vw;
    }

    .btn {
        float: left;
        box-shadow: none;
        margin-left: 0px;
        padding-left: 0px;
    }

    .btn:hover {
        box-shadow: none;
    }

    .btn:focus {
        box-shadow: none;
    }

    .btn-right {
        margin-right: 0px;
        margin-left: auto;
        padding-right: 0px;
    }
    
    .circle {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: rgba(100,100,100,0.5);
        margin-top: 35px;
    }

    .circle-right{
        float: right;
    }

    .chevron {
        margin-top: 7px;        
    }
    
    .image {
        float: left;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`;

//Recommendations based on user preferences "recommended" class

export class Recommended extends Component {
//Nav bar is rendered on all pages in parent class.
    render() {
        return (
            <Wrapper>
                <MDBContainer className="container">
                    <MDBRow>
                        <MDBCol className="rec" size="12">
                            <MDBRow>
                                <MDBCol className="bton" size="1">
                                    <div className="circle">
                                        <MDBIcon className="chevron" icon="chevron-left" />
                                    </div>
                                </MDBCol>
                                <MDBCol className="bton btn-right" size="1">
                                    <div className="circle circle-right">
                                        <MDBIcon className="chevron" icon="chevron-right" />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* <div className="rec">
                    <div className="circle circle-left">
                        <MDBIcon className="chevron" icon="chevron-left" />
                    </div>
                    <img className="image" src="https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397__340.jpg"/>
                    <div className="circle circle-right">
                        <MDBIcon className="chevron" icon="chevron-right" />
                    </div>
                </div> */}
            </Wrapper>
        );
    }
}
