import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from "mdbreact";
export const ContactMe = () => {
  return (
    <MDBContainer className="m-5 mx-auto">
      <MDBRow className="p-5 m-5">
        <MDBCol md="6" className="mb-5 mx-auto">
          <form>
            <h2 className="text-center mb-5">Contact Me</h2>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <button
                outline="true"
                color="secondary"
                className="btn-block z-depth-1a questionButton mt-4"
              >
                Send
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactMe;
