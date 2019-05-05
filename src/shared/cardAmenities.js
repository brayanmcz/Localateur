import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  height: 25px;
  width: 25px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  
  color: white;
  border-radius: 50%;

  .amenity-icon{
    margin-left: 5px;
  }
`;

class RestaurantCardAmenity extends Component{
  render(){
    return(
      <Wrapper className="green">
        <MDBIcon className="amenity-icon" icon="leaf" size="xs"/>
      </Wrapper>
    );
  }
}

export { RestaurantCardAmenity };