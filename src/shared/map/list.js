import React, { Component } from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { RestaurantCardImage } from "../cardImage";
import { RestaurantCardCategory } from '../cardCategory';
import { RestaurantCardAmenity } from '../cardAmenities';

const Wrapper = styled.div`
    height: ${props => props.height};

    padding-top: 15px;
    overflow-y: auto;
    overflow-x: none;
    width: calc(100% - 15px);

    .list-item{
      margin-bottom: 15px;
    }

    .list-item:hover{
      cursor: pointer;
      background-color: #efefefef;
      transition: background-color .5s;
    }

    .list-col{
      height: 110px;
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
                        item.category.map((category, index) => {
                          return (
                          <RestaurantCardCategory category={category} key={index} />
                          )
                        })
                      }
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="9">
                        {
                          item.amenity.map((amenity, index) => {
                            return (
                            <RestaurantCardAmenity amenity={amenity} key={index}/>
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
                    index === data.length - 1 ? <></> : <hr />
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
    amenity: ["Vegan", "Wifi", "Keto", "Vegetarian", "Hiring"]
  },{
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
    id: "123456789",
    category: ["Vietnamese", "Sandwiches", "Soup"],
    amenity: ["Vegan", "Wifi", "Keto"]
  },{
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
    id: "123456789",
    category: ["Vietnamese", "Sandwiches", "Soup"],
    amenity: ["Vegan", "Wifi", "Keto"]
  },{
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
    id: "123456789",
    category: ["Vietnamese", "Sandwiches", "Soup"],
    amenity: ["Vegan", "Wifi", "Keto"]
  },{
    src: "https://scontent-sjc3-1.cdninstagram.com/vp/bd3362479564159b3c8fb7f19ad2a250/5D75B281/t51.2885-15/e35/46215708_512422272558948_4800932770094252032_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com",
    alt: "Main Image",
    name: "Bánh Mì by Rice and Spoon",
    thumbs: "3.7k",
    id: "123456789",
    category: ["Vietnamese", "Sandwiches", "Soup"],
    amenity: ["Vegan", "Wifi", "Keto"]
  },
]