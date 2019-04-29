import React, { Component } from "react";
import styled from "styled-components";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyDiDLXMnE76vMVZ-xfbMFaWriBS_gs4lQY");

const Wrapper = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
`;

export class Map extends Component {
    static defaultProps = {
        center: {
            lat: 37.548616,
            lng: -122.059097
        },
        zoom: 13,
    };

    render() {
        return (
            <Wrapper {...this.props}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDiDLXMnE76vMVZ-xfbMFaWriBS_gs4lQY' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                >
                </GoogleMapReact>
            </Wrapper>
        );
    };
}