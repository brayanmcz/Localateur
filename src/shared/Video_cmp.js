import React, {Component} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`

class VideoCmpt extends Component {
    render () {
        return (
            <Wrapper>
                <div className="video-container">
                    <iframe title="featured_video" src="https://www.youtube.com/embed/yCCyJD7cVKU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </Wrapper>
            )
    }
}

export { VideoCmpt };