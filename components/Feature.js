import React from 'react';
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
const Feature = () => {
  const features = [
    { title : "Earn while you move", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Track your progress", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Engage and connect", desc : "Join and build a vibrant community who are passionate about sustainable mobility. Share your archievements, inspire others and compete on daily leaderboards" },
    { title : "Security and transparency", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  ]
  const carouselItems = [
    {
      src: '/images/Earth.png',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header'
    },
    {
      src: '/images/Subway.png',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header'
    },
    {
      src: '/images/Tree.png',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header'
    }
  ];
  
  return (
    <section className="section bg-light" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="font-weight-normal text-dark">features</h2>
              <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </Col>
        </Row>
        <Row>
        <Col lg={{size:7,offset:0}} md={{size:8, offset:2}}>
          <Row>
          {
            features.map((service, key) =>
              <Col key={key} lg={6} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
          </Row>
        </Col>
        <Col lg={{size:5, offset:0}} md={{size:8, offset:2}}>
          <UncontrolledCarousel items={carouselItems}/>
        </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <h4>Technology Stack</h4>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Kotlin.png" alt="" className="img-fluid mx-auto d-block technology-img"/>
            </div>
          </Col>
          <Col>
            <div className="mt-5 mt-lg-0">
              <img src="/images/JetpackCompose.png" alt="" className="img-fluid mx-auto d-block technology-img"/>
            </div>
          </Col>
          <Col>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Firebase.png" alt="" className="img-fluid mx-auto d-block technology-img"/>
            </div>
          </Col>
          <Col>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Solidity.png" alt="" className="img-fluid mx-auto d-block technology-img"/>
            </div>
          </Col>
          <Col>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Infura.png" alt="" className="img-fluid mx-auto d-block technology-img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Feature;