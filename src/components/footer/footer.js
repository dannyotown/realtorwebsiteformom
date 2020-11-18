import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 gbBlueBg">
      <MDBContainer fluid className="text-center text-md-left gbBlueBg">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Jeanne Town</h5>
            <p>Thank you for visiting!</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Other Websites</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.coldwellbankerhomes.com/mo/o-fallon/agent/jeanne-town/aid_196837/">
                  Coldwell Banker Website
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
