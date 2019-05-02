import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`

    .card-image{
        height: 100px;
        width: 100%;
        border-radius: 5px;
        object-fit: cover;
        border: 1px solid black;
    }

    .card-text{
        position: absolute;
        left: 0px;
        bottom: 0px;
        margin: 0 -15px 0 15px;

        width: calc(100% - 30px);

        display: inline-block;
        color: white;
        
        background-color: #000000AA;
        padding-left: 5px;
        border-radius: 0px 0px 5px 5px;
        font-size: 14px;
        font-weight: 400;
    }

    .card-thumb-container{
        position: absolute;
        top: -12px;
        right: 5px;

        background-color: red;
        color: white;

        margin-top: 5px;
        margin-right: 5px;

        height: 35px;

        padding: 5px;

        border: 2px solid white;
        border-radius: 5px;
    }

    .card-thumb-icon{
        display: inline;
        color: white;
        margin-left: 10px;
    }

    .thumb-align {
        display: inline;
    }
`;

class RestaurantCardImage extends Component{

    static defaultProps = {
        src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
        alt: "Main Image",
        name: "Bánh Mì by Rice and Spoon",
        thumbs: 52
    }

    render(){
        const { src, alt, name, thumbs } = this.props;
        return(
            <Wrapper {...this.props}>
            <img className="card-image" src={src} alt={alt}/>
            <p className="card-text">{name}</p>
            <div className="card-thumb-container">
                <p className="thumb-align">{thumbs}</p>
                <MDBIcon className="card-thumb-icon" icon="thumbs-up" />
            </div>
            </Wrapper>
        );
    }
}

export { RestaurantCardImage };