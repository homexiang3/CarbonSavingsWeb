import React from 'react';
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import {MdLock, MdPayments, MdInsertChart, MdGroups} from 'react-icons/md'

const Feature = () => {
  const features = [
    { title : "In-app economy", icon: <MdPayments size={32}/>, desc : "Gain our native CarbonSavings Token with your physical activity. Purchase one of our amazing NFTs to boost your daily effort or donate to mitigate your carbon footprint" },
    { title : "Track your progress",icon: <MdInsertChart size={32}/>, desc : "Visualize your daily and historical data such as the number of steps, the rewards obtained and the carbon footprint mitigated in a friendly interface. Set your daily goals and trascend your limits" },
    { title : "Engage and connect", icon: <MdGroups size={32}/>,desc : "Join and build a vibrant community who are passionate about sustainable mobility. Share your archievements, inspire others and compete on daily leaderboards" },
    { title : "Security and transparency", icon: <MdLock size={32}/>,desc : "Leverage the power of blockchain technologies. Ethereum is one of the most trusted networks, which provides a decentralized, transparent and secure way to manage your data" },
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
  ]
  const technologies = [
    { src: "/images/Kotlin.png", text: "Kotlin", link: "https://kotlinlang.org/"},
    { src: "/images/JetpackCompose.png", text: "Jetpack Compose", link: "https://developer.android.com/jetpack/compose/"},
    { src: "/images/Firebase.png", text: "Firebase", link: "https://firebase.google.com/"},
    { src: "/images/Solidity.png", text: "Solidity", link: "https://soliditylang.org/"},
    { src: "/images/Infura.png", text: "Infura", link: "https://www.infura.io/"},
    { src: "/images/Ethereum.png", text: "Ethereum Network", link: "https://ethereum.org/"}
  ]
  
  return (
    <section className="section bg-light" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="font-weight-normal text-dark">Features</h2>
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
                  <h5 className="text-carbonsavings font-weight-normal pt-1 mb-4"><span className="me-3">{service.icon}</span>{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
          </Row>
        </Col>
        <Col lg={{size:5, offset:0}} md={{size:8, offset:2}}>
          <UncontrolledCarousel className="mt-5" items={carouselItems}/>
        </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <h4>Technology Stack</h4>
          </Col>
        </Row>
        <Row className='mt-5'>
          {
          technologies.map((technology,key) =>
          <Col key={key} lg={2} md={6} sm={6}>
          <div className="pt-3 mt-lg-0 text-center technology-img-wrapper">
            <a href={technology.link}>
              <img src={technology.src} alt="" className="img-fluid mx-auto d-block technology-img"/>
            </a>
              <p className="text-muted mt-4">{technology.text}</p>
          </div>
        </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}
export default Feature;