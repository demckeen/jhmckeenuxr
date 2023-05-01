import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    { id : 1, title : "",
      child : [
          { title : "Home", link : "/" },
          { title : "Resume", link : "/resume" },
          { title : "Case Studies", link : "/case-studies" },
          { title : "Writing", link : "/writing" }
      ]
    }
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={12}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={6}>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={6}>
                <p className="column-title">Keep in Touch</p>
                <a href="mailto:henry@jhmckeenuxr.com" className="email contact">henry@jhmckeenuxr.com</a>
                <ul className="list-unstyled footer-social-list mt-4">
                  {/* <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li> */}
                  <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/henrymckeen"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col md={12}>
            <div className="text-center text-muted copyright">
              <p className="mb-0 f-15">2023 © J. Henry McKeen</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;