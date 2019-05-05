import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    background-color: lightgrey;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 15px;

    .card-image{
        height: 100px;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
    }

    .card-text{
        position: relative;
        left: -15px;
        bottom: 21px;
        margin: 0 -15px 0 15px;

        width: calc(100%);

        display: inline-block;
        color: white;

        background-color: #000000AA;
        padding-left: 5px;
        border-radius: 0px 0px 5px 5px;
        font-size: 14px;
        font-weight: 400;

        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-thumb-container{
        height: 35px;
        max-width: 70px;

        position: relative;
        top: -135px;
        right: -10px;
        
        float: right;

        background-color: #F44336;
        color: white;

        padding: 5px;
        border: 2px solid white;
        border-radius: 5px;
    }

    .card-thumb-icon{
        display: inline;
        color: white;
        margin-left: 10px;
    }

    .card-thumb-icon{
        position: relative;
        right: 0px;
        top: -2px;
    }

    .thumb-align {
        display: inline;
    }
`;

class RestaurantCardImage extends Component {

    static defaultProps = {
        src: "test",
        alt: "test",
        name: "test",
        thumbs: "test"
    }

    render() {
        const { src, alt, name, thumbs } = this.props;
        return (
            <Wrapper {...this.props}>
                <img className="card-image" src={src} alt={alt} />
                <p className="card-text">{name}</p>
                <div className="card-thumb-container">
                    <p className="thumb-align">{thumbs}</p>
                    <MDBIcon className="card-thumb-icon" icon="thumbs-up" size="sm" />
                </div>
            </Wrapper>
        );
    }
}

export { RestaurantCardImage };