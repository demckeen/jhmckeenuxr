import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';

const Hero = ({pageTitle, mainSaying, subHead, textBody, imgUrl, imgAlt, url}) => {
  return (
    <section className={url + " section position-relative hero"}>
      <Container className="hero-text">
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="pr-lg-5">
              <p className="text-uppercase page-title">{pageTitle}</p>
              <p className="main-saying">{mainSaying}</p>
              <p className="subhead">{subHead}</p>
              <p className="text-muted mb-4 pb-2">{textBody}</p>
              
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-img">
      </div>
    </section>
  );
}
export default Hero;