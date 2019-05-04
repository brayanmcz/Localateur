import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #F44336;
  display: inline-block;
  height: 20px;
  border-radius: 3px;


  .category-text{
    padding: 2px 5px 2px 5px;

    color: white;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

class RestaurantCardCategory extends Component {

  static defaultProps = {
    text: "test"
  }

  render() { 
    return (
      <Wrapper>
        <p className="category-text">{this.props.text}</p>
      </Wrapper>
    );
  }
}
 
export { RestaurantCardCategory };