import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #F44336;
  display: inline-block;
  height: 20px;
  border-radius: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;

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
    category: "test"
  }

  render() { 
    return (
      <Wrapper>
        <p className="category-text">{this.props.category}</p>
      </Wrapper>
    );
  }
}
 
export { RestaurantCardCategory };