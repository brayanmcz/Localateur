import React, { Component } from "react";
import styled from "styled-components";
import { Map } from "../shared/map/map";
import { List } from "../shared/map/list";

const Wrapper = styled.div`
  min-height: calc(100vh - 46px);
  position: fixed;

  .map{
    box-shadow: 5px 0px 5px 5px #eeeeee;
  }
`;

export class MapPage extends Component {
  state = {
    isListOpen: true
  };

  render() {
    return (
      <Wrapper>
        {this.state.isListOpen === true ? 
          <>
            <Map className="map" height="calc(50vh - 23px)" width="100vw" />
            <List height="calc(50vh - 23px)" />
          </>
         : 
          <Map height="calc(100vh - 46px)"  width="100vw"/>
        } 
      </Wrapper>
    );
  }
}
