import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";

function Carousel({ houses }) {
  const dataLength = houses.length;

  return (
    <>
      <MDBCarousel
        activeItem={1}
        length={dataLength}
        showControls={true}
        showIndicators={true}
        slide
      >
        <MDBCarouselInner>
          {houses.map((house, index) => {
            return (
              <MDBCarouselItem itemId={index + 1}>
                <img src={house.image} className="h-100 w-50" />
              </MDBCarouselItem>
            );
          })}
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
}

export default Carousel;
