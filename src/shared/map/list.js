import React, { Component } from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { RestaurantCardImage } from "../cardImage";
import { RestaurantCardCategory } from '../cardCategory';
import { RestaurantCardAmenity } from '../cardAmenities';

const Wrapper = styled.div`
    height: ${props => props.height};

    padding-top: 15px;
    overflow-y: scroll;
    width: calc(100% - 15px);

    .rule{
      color: black;
      width: 100vw;
      margin-left: -15px;
    }

    .list-item{
      /* height: 110px; */
      margin-bottom: 15px;
    }

    .list-col{
      height: 110px;
    }

    .category-container{
      overflow: scroll;
    }

    .list-miles{
      font-size: 12px;
      display: block;
      float: right;
      margin-top: 12px;
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
                <div key={index} >
                  <MDBRow className="list-item" >
                    <MDBCol className="list-col" size="12" sm="5" md="3">
                      <RestaurantCardImage src={item.src} alt={item.alt} name={item.name} thumbs={item.thumbs} />
                    </MDBCol>
                    <MDBCol className="category-container" size="12" sm="7" md="9">
                      <MDBRow>
                        <MDBCol>
                        {
                        item.category.map((category) => {
                          return (
                          <RestaurantCardCategory category={category} />
                          )
                        })
                      }
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="9">
                        {
                          item.amenity.map((amenity) => {
                            return (
                            <RestaurantCardAmenity amenity={amenity} />
                            )
                          })
                        }
                        </MDBCol>
                        <MDBCol size="3">
                          <p className="list-miles">{0.5} miles</p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                  {
                    index === data.length - 1 ? <></> : <hr className="rule" />
                  }
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
    id: "123456789",
    category: ["Vietnamese", "Sandwiches", "Soup"],
    amenity: ["Vegan", "Wifi", "Keto", "", ""]
  },
  {
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
    id: "123456789",
    category: ["Vietnamese", "Sandwiches", "Soup"],
    amenity: ["Vegan", "Wifi", "Keto", "", ""]
  },
]