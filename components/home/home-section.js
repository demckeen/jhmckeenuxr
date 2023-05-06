import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';

const Hero = ({pageTitle, mainSaying, subHead, textBody, imgUrl, imgAlt, imgCaption}) => {
  return (
    <section className="section position-relative home-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="page-title">{pageTitle}</p>
              <p className="main-saying">{mainSaying}</p>
              <p className="subhead">{subHead}</p>
              <p className="text-body">{textBody}</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0 img-box">
              <Image src={imgUrl} alt={imgAlt} width="384px" height="534px" className="img-fluid mx-auto d-block section-img"/>
              {imgCaption ? <p className="caption">{imgCaption}</p> : ""}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;