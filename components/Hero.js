import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {FaGithub} from 'react-icons/fa'
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
            <motion.div
                initial={{opacity:0,scale:0,x:75}}
                whileInView={{opacity:1,scale:1,x:0}}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                >
              <h1 className="mb font-weight-normal line-height-1_4 text-carbonsavings">Reduce, Earn, Repeat:</h1>
              </motion.div>
              <motion.div
                initial={{opacity:0,scale:0,x:-75}}
                whileInView={{opacity:1,scale:1,x:0}}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                >
              <h1 className="mb-4 text-dark font-weight-medium">Unlock rewards by embracing sustainable mobility</h1>
              </motion.div>
              <p className="text-muted mb-4 pb-2">CarbonSavings is an innovative move-to-earn platform that promotes sustainable mobility choices. With every step performed, you not only contribute to reducing carbon emissions but also earn valuable tokens that can be redeemed for exciting rewards.</p>
              <div className="d-flex justify-content-start">
              <a href="https://github.com/homexiang3/CarbonSavingsdApp" className="btn btn-carbonsavings">
                <FaGithub size={24}/><span className="ms-3">App Repository</span>
              </a>
              <a href="https://github.com/homexiang3/CarbonSavingsWeb" className="btn btn-carbonsavings ms-3">
                <FaGithub size={24}/><span className="ms-3">Web Repository</span>
              </a>
              </div>
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