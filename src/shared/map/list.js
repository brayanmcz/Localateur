import React, { Component } from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { RestaurantCardImage } from "../cardImage";
import { RestaurantCardCategory } from '../cardCategory';

const Wrapper = styled.div`
    height: ${props => props.height};

    padding-top: 15px;
    overflow-y: scroll;

    .rule{
      color: black;
      width: 100vw;
      margin-left: -15px;
    }
    .list-item{
      height: 100px;
      margin-bottom: 15px;
    }

    .list-col{
      height: inherit;
    }
`;

export class List extends Component {

  render() {
    return (
      <Wrapper {...this.props}>
        <MDBContainer>
          {
            data.map((item, index) => {
              return (
                <div key={index}>
                  <MDBRow className="list-item" >
                    <MDBCol className="list-col" size="5" sm="5" md="3">
                      <RestaurantCardImage src={item.src} alt={item.alt} name={item.name} thumbs={item.thumbs} />
                    </MDBCol>
                    <MDBCol size="7" sm="7" md="9">
                      <RestaurantCardCategory />
                    </MDBCol>
                  </MDBRow>
                  <hr className="rule" />
                </div>
              )
            })
          }
        </MDBContainer>
      </Wrapper>
    );
  }
}

const data = [
  {
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
  }, {
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
  }, {
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
  }, {
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
  }, {
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
  },
]