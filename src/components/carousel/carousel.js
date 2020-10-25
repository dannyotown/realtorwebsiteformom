import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";

function Carousel({ getProperty }) {
  return (
    <>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId={1}>
            <img
              src={`https://djangorealtorbackend.s3.us-east-2.amazonaws.com/${getProperty.photo1}`}
              alt="Property 1"
              className="h-100"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img
              src={`https://djangorealtorbackend.s3.us-east-2.amazonaws.com/${getProperty.photo1}`}
              alt="Property 2"
              className="h-100"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img
              src={`https://djangorealtorbackend.s3.us-east-2.amazonaws.com/${getProperty.photo1}`}
              alt="Property 3"
              className="h-100"
            />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
}

export default Carousel;
