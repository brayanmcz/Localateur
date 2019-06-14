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

  .vegan{
    margin-left: 3px;
  }

  .hiring{
    margin-left: 7px;
  }
`;

class RestaurantCardAmenity extends Component {
  state = {
    icon: null,
    plus: false,
    color: null
  }

  render() {
    return (
      <Wrapper className={this.props.color}>
        <MDBIcon className={this.props.name + " amenity-icon"} icon={this.props.icon} size="xs">
          {this.props.name === "vegan" ? "+" : ""}
        </MDBIcon>
      </Wrapper>
    );
  }
}

export { RestaurantCardAmenity };