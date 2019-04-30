import React, { Component } from "react";
import styled from "styled-components";
import { Map } from "../shared/map/map";
import { List } from "../shared/map/list";

const Wrapper = styled.div`
  .map-container {
    height: 100vh;
    width: 100%;
  }
`;

export class MapPage extends Component {
  state = {
    isListOpen: true
  };

  render() {
    return (
      <Wrapper>
        {this.state.isListOpen ? (
          <>
            <Map height="calc(50vh - 46px)" width="100%" />
            <List />
          </>
        ) : (
          <Map height="calc(100vh - 46px)" width="100%" />
        )}
      </Wrapper>
    );
  }
}
