import React from 'react';
import { Container, Row, Col } from "reactstrap";
const ChallengeBox = (props) => {
  return (
    <>
    {
      props.challenges.map((challenge, key) =>
      (challenge.id % 2 !== 0) ?
        <Row key={key} className={challenge.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={challenge.img} alt="" className="img-fluid d-block mx-auto"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={challenge.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{challenge.title}</h5>
                <p className="text-muted mb-3 f-15">{challenge.desc}</p>
                <a href={challenge.link} className="f-16 text-carbonsavings">Read More <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{challenge.title}</h5>
            <p className="text-muted mb-3 f-15">{challenge.desc}</p>
            <a href={challenge.link} className="f-16 text-carbonsavings">Read More <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <img src={challenge.img} alt="" className="img-fluid d-block mx-auto"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Challenge = () => {
const challenges = [
    {id : 1, img : "./images/Factory.png", title : "Climate Change", desc : "Climate Change constitutes the global warming problem, the main actors are GHG emissions produced by sectors like industry, transportation, residential and commercial.", link : "/"},
    {id : 2, img : "./images/Earth.png", title : "Global Agreements", desc : "The Paris Agreement aims to target Climate Change problem by reducing the amount of GHG emissions, they create the 2030 agenda and the sustainable development goals.", link : "/"},
    {id : 3, img : "./images/Tree.png", title : "Mitigation Campaings", desc : "Several mitigation campaings are launched at european, national and regional level. Nevertheless, the best mitigation approach is avoid the production of GHG emissions.", link : "/"},
    {id : 4, img : "./images/Subway.png", title : "Sustainable Transport", desc : "Sustainable transportation is key to reduce the environmental impact produced by the citizens, walking, cycling, public transport or shared transportation are some of the examples.", link : "/"},
    {id : 5, img : "./images/SustainableCity.png", title : "Sustainable City", desc : "Create a more sustainable Barcelona city by adopting sustainable transportation behaviors, download CarbonSavings to reward your effort", link : "/"},
  ];
return (
    <section className="section" id="challenge">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="font-weight-normal text-dark">Challenges</h2>
              <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </Col>
        </Row>
        <ChallengeBox challenges={challenges} />
      </Container>
    </section>
  );
}
export default Challenge;