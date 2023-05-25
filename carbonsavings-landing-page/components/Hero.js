import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4 text-carbonsavings">Reduce, Earn, Repeat: <p className="text-dark font-weight-medium">Unlock rewards by embracing sustainable mobility</p></h1>
              <p className="text-muted mb-4 pb-2">CarbonSavings is a free aplication that rewards your physical activity. We are commited to promote low emission transportation alternatives making use of the move-to-earn blockchain-based paradigm.</p>
              <a href="https://github.com/homexiang3/CarbonSavingsWeb" className="btn btn-carbonsavings">
                GitHub Repository<span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Walk.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;