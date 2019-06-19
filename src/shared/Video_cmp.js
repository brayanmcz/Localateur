import React, {Component} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
align="center";
    iframe:focus { 
        outline: none;
      }
`

class VideoCmpt extends Component {
    render () {
        return (
            <Wrapper>
                <div >
                    <iframe title="featured_video" width="600" height="315" src="https://www.youtube.com/embed/yCCyJD7cVKU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Wrapper>
            )
    }
}

export { VideoCmpt };