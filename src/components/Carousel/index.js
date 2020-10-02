import React from "react";
import {  MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem,  MDBView, MDBContainer } from "mdbreact";
import "./style.css"

function Carousel(props) {

return (
    <MDBContainer>
        <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true}  className="z-depth-1">
        <MDBCarouselInner>
            <MDBCarouselItem itemId="1" active>
            <MDBView>
                <img
                src={props.img[0]}
                alt="Image One"
                className="d-block w-100 h-auto img-thumbnail "
                />
            </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
            <MDBView>
                <img
                src={props.img[1]}
                alt="Image Two"
                className="d-block w-100 h-auto img-thumbnail "
                />
            </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
            <MDBView>
                <img
                src={props.img[2]}
                alt="Image Three"
                className="d-block w-100 h-auto img-thumbnail "
                />
            </MDBView>
        </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
    </MDBContainer>
    )
}

export default Carousel;