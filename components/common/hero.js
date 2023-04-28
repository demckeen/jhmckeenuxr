import next from 'next';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = ({pageTitle, mainSaying, subHead, textBody, actionButton}) => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">{pageTitle}</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">{mainSaying}<span className="text-primary font-weight-medium">{subHead}</span></h1>
              <p className="text-muted mb-4 pb-2">{textBody}</p>
              <a href="#" className="btn btn-warning">
                {actionButton} <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/1861-62.jpg" alt="group of men in suits from mid 1800s" className="img-fluid mx-auto d-block"/>
              <p className="caption">Image from 1861-1862</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;