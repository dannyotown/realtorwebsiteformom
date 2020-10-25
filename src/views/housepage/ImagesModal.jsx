import React, { useState } from "react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import Carousel from "../../components/carousel/carousel";

export const ImagesModal = ({ getProperty }) => {
  const [getModal, showModal] = useState(false);

  const toggle = () => {
    showModal(!getModal);
  };
  return (
    <MDBContainer>
      <button className="w-100 viewMoreImages gbBlueBg p-0" onClick={toggle}>
        View Images
      </button>
      <MDBModal isOpen={getModal} toggle={toggle} size="xl">
        <MDBModalHeader toggle={toggle}>{getProperty.address}</MDBModalHeader>
        <MDBModalBody className="mx-auto">
          <Carousel getProperty={getProperty} />
        </MDBModalBody>
        <MDBModalFooter>
          <button className="gbBlueBg" onClick={toggle}>
            Close
          </button>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ImagesModal;
