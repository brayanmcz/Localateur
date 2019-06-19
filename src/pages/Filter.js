import React, {Component} from "react";
import styled from "styled-components";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";


const Wrapper = styled.div`
    padding-bottom: 30px;
    .category-on {
        color: white;
        background-color: #f44336;
        border-radius: 5px;
        text-align: center;
        white-space: nowrap;
        font-weight: 400;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        border: 1px solid white;
        margin: 2px;
        display: inline-block;
    }
    .category-off {
        color: #f44336;
        background-color: white;
        border-radius: 5px;
        text-align: center;
        white-space: nowrap;
        font-weight: 400;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        border: 1px solid;
        margin: 2px;
        display: inline-block;
    }
    .category-container {
        padding-top: 15px;
    }
    .category {
        cursor: pointer;
    }
    .done {
        margin-top: 30px !important;
        margin-bottom: 15px !important;
    }
`;

class FilterPage extends Component {
    state = {
        selectedCategories: []
    };

    availableCategories = [
        "American",
        "Barbeque",
        "Chinese",
        "French",
        "Hamburger",
        "Indian",
        "Italian",
        "Japanese",
        "Mexican",
        "Pizza",
        "Seafood",
        "Steak",
        "Sushi",
        "Thai",
        "Korean",
        "Coffee",
        "Bakery",
        "Island",
        "Bar & Tapas",
        "Vegan",
        "Vegetarian",
        "Paleo",
        "Keto",
        "Gluten Free",
        "Halal",
        "Kosher",
        "Market"
    ];

    handleActiveCategoryUpdate = (cat) => {
        this.state.activeCategories.includes(cat) ?
          this.addCat(cat)
          :
          this.removeCat(cat);
      }

    handleCuisineToggle = (foodType) => {
        //Code for removing from selectedFoods on Filter page.
//if statement checking if button being clicked is (already selected)
        if (this.state.selectedCategories.includes(foodType)) {
            var listCurrent = this.state.selectedCategories;
            for (var i = 0; i < listCurrent.length; i++){
                if (listCurrent[i] === foodType) {
                    listCurrent.splice(i, 1);
                    i--;
                }
            }
            // if (listCurrent.includes(foodType)) {
            //     var i = listCurrent.indexOf(foodType);
            //     listCurrent.splice(i, 1);
            // }
            this.setState({
                selectedCategories: listCurrent
            });
        } else {
            var listAddFilter = this.state.selectedCategories;
            listAddFilter.push(foodType);
            this.setState({selectedCategories: listAddFilter});
        }
    };

    handleClick = () => {
        // this.props.updateFilters(this.state.selectedCategories);
        // this.props.closeFilter();
    }

    componentDidMount = () => {
        this.setState({
            selectedCategories: this.props.categoryFilters
        });
    }

    render (){
        return (
            <Wrapper>
                <MDBContainer>
                    {/* <MDBRow>
                        <MDVCol>//I will add "name sections (price, ambiance, distance)"
                            <SliderPage opt0='$' opt1='$$' opt2="$$$"   />
                            <SliderPage opt0='Quick-Eats' opt1='Cozy-Diner' opt2="Fine-Dining"   />
                            <SliderPage opt0='Closest To You' opt1='Under 10 miles' opt2="Adventure-Time"   />
                        </MDVCol>
                    </MDBRow> */}
                <MDBContainer>
                <MDBRow>
                    <MDBCol size="12" className="mt-5">
                    {this.availableCategories.map((foodType, index) => {
                        console.log(foodType);
                        return (
                            <span
                                key={index}
                                className={
                                    this.state.selectedCategories.includes(foodType)
                                    ? "category-on category"
                                    : "category-off category"
                                }
                                onClick={() => {
                                    this.handleCuisineToggle(foodType);
                                }}
                            >
                                { foodType }
                            </span>
                        );
                    })}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
                <MDBRow>
                    <MDBCol size="9" className="offset-1">
                        <MDBBtn className="btn btn-block done" color="primary" onClick={this.handleClick}>
                        DONE
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Wrapper>
        );
    };
}

export { FilterPage }