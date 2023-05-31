import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion"
const ChallengeBox = (props) => {
  return (
    <>
    {
      props.challenges.map((challenge, key) =>
      (challenge.id % 2 !== 0) ?
      <motion.div
      key={key}
      initial={{opacity:0,scale:0,y:-100}}
      whileInView={{opacity:1,scale:1,y:0}}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      >
        <Row  className={challenge.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
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
                <h4 className="text-dark font-weight-normal mb-3 pt-3">{challenge.title}</h4>
                <p className="text-muted mb-3 f-15">{challenge.desc}</p>
                <a href={challenge.link} className="f-16 text-carbonsavings">Read More <span className="right-icon ml-2">&#8594;</span></a>
              </div>
            </Col>
        </Row>
        </motion.div>
      :
      <motion.div
      key={key}
      initial={{opacity:0,scale:0,y:-100}}
      whileInView={{opacity:1,scale:1,y:0}}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      >
      <Row className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h4 className="text-dark font-weight-normal mb-3 pt-3">{challenge.title}</h4>
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
      </motion.div>
      )
    }
    </>
  );
}
const Challenge = () => {
const challenges = [
    {id : 1, img : "./images/Factory.png", title : "Climate Change", desc : "Climate change refers to the long-term alterations in temperature patterns and weather conditions due to human activities, primarily the release of greenhouse gases (GHGs) into the atmosphere. GHG emissions, such as carbon dioxide, methane, and nitrous oxide, trap heat, intensifying the greenhouse effect and leading to global warming, rising sea levels, extreme weather events, and ecological disruptions.", link : "https://www.un.org/en/climatechange/what-is-climate-change"},
    {id : 2, img : "./images/Earth.png", title : "Global Agreements", desc : "The Paris Agreement is an international treaty adopted in 2015, aiming to combat climate change by limiting global warming to well below 2 degrees Celsius. The 2030 Agenda for Sustainable Development is a global blueprint that includes the Sustainable Development Goals (SDGs), consisting of 17 goals addressing social, economic, and environmental challenges to achieve a sustainable future for all.", link : "https://sdgs.un.org/goals"},
    {id : 3, img : "./images/Tree.png", title : "Mitigation Campaings", desc : "Carbon footprint mitigation campaigns aim to reduce greenhouse gas emissions through various strategies. These include promoting renewable energy, improving energy efficiency, encouraging sustainable transportation, implementing carbon pricing mechanisms, fostering circular economy practices, and raising awareness about individual and collective actions to combat climate change.", link : "https://www.un.org/en/actnow"},
    {id : 4, img : "./images/Subway.png", title : "Sustainable Transportation", desc : "Sustainable transportation, such as electric vehicles, public transit, and cycling, can help reduce carbon footprints compared to traditional transport alternatives. By emitting fewer or no greenhouse gases, promoting energy efficiency, and reducing reliance on fossil fuels, sustainable transportation contributes to mitigating climate change and improving air quality.", link : "https://sustainabledevelopment.un.org/topics/sustainabletransport"},
    {id : 5, img : "./images/SustainableCity.png", title : "Sustainable City", desc : "Sustainable transport plays a crucial role in building a sustainable city by reducing carbon emissions, improving air quality, and enhancing urban mobility. It promotes the use of low-carbon transportation options, enhances accessibility, reduces congestion, and creates healthier, more livable urban environments, fostering a sustainable and resilient city for future generations.", link : "https://unhabitat.org/wcr/"},
  ];
return (
    <section className="section" id="challenge">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h2 className="font-weight-normal text-dark">Challenges</h2>
            </div>
          </Col>
        </Row>
        <ChallengeBox challenges={challenges} />
      </Container>
    </section>
  );
}
export default Challenge;