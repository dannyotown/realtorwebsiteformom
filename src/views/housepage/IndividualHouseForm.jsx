import React from "react";
import { MDBInput, MDBIcon } from "mdbreact";
const IndividualHouseForm = () => {
  return (
    <>
      <MDBInput
        label="Your email"
        group
        type="email"
        validate
        error="wrong"
        success="right"
      />
      <MDBInput type="textarea" rows="2" label="Your message" />
      <div className="text-center mb-3">
        <button className="btn-block z-depth-1a questionButton">
          Send
          <MDBIcon far icon="paper-plane" className="ml-2" />
        </button>
      </div>
    </>
  );
};

export default IndividualHouseForm;
