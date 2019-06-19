import React from "react";
import { MDBCol } from "mdbreact";

const Search = () => {
  return (
    <MDBCol md="6">
      <input width="505"className="form-control" type="text" placeholder="Search Your Fav Foods!" aria-label="Search" />
    </MDBCol>
  );
}

export default Search;