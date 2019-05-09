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
    margin-left: 6px;
  }
`;

class RestaurantCardAmenity extends Component {
  state = {
    icon: null,
    plus: false,
    color: null
  }

  componentDidMount() {
    var icon = null;
    var plus = false;
    var color = null;

    switch (this.props.amenity.toLowerCase()) {
      case "vegan":
        icon = "leaf";
        plus = true;
        color = "green";
        break;
      case "vegetarian":
        icon = "leaf";
        color = "green";
        break;
      case "keto":
        icon = "bacon";
        color = "brown";
        break;
      case "wifi":
        icon = "wifi";
        color = "blue";
        break;
      case "hiring":
        icon = "briefcase";
        color = "blue";
        break;
      // case "halal":
      //   icon = "";
      //   color = "black";
      //   break;
      default:
        icon = null;
        color = null;
        plus = false;
    }

    this.setState({
      icon: icon,
      plus: plus,
      color: color,
      amenity: this.props.amenity.toLowerCase()
    })
  }

  render() {
    return (
      this.state.icon !== null ? (
        <Wrapper className={this.state.color}>
          <MDBIcon className={this.state.amenity === "vegan" ? "amenity-icon vegan" : this.state.amenity === "hiring" ? "amenity-icon hiring":"amenity-icon "} icon={this.state.icon} size="xs">
            {this.state.plus ? "+" : ""}
          </MDBIcon>
        </Wrapper>
      ) : (
          <div></div>
        )


    );
  }
}

export { RestaurantCardAmenity };