
import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody,CardTitle, CardSubtitle} from "reactstrap";
const Team = () => {
return (
    <section className="section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center">
              <h2 className="font-weight-normal text-dark mb-5">CarbonSavings Team</h2>
              <p className="text-muted mb-5">Our project team is formed by members of Universitat Pompeu Fabra Engineering School located in Barcelona. Hong-ming is the student 
              developing CarbonSavings while Fabio and Miquel are teachers that offer mentorship</p>
              <img src="/images/UPF.png" alt="" className="img-fluid mb-5 mx-auto d-block upf-img"/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{size:4, offset:0}} md={{ size: 8, offset: 2 }}>
            <Card className="mb-4 shadow-sm">
              <CardImg top width="100%" src="/images/Fabio.jpg" alt="Card image cap" />
              <CardBody className="text-center">
                <CardTitle><h4>Fabio Della Valle</h4></CardTitle>
                <CardSubtitle>Project Director</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col lg={{size:4, offset:0}} md={{ size: 8, offset: 2 }}>
          <Card className="mb-4 shadow-sm">
              <CardImg top width="100%" src="/images/HongMing.jpg" alt="Card image cap" />
              <CardBody className="text-center">
                <CardTitle><h4>Hong-ming Xiang Vico</h4></CardTitle>
                <CardSubtitle>Computer Science Student</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col lg={{size:4, offset:0}} md={{ size: 8, offset: 2 }}>
          <Card className="shadow-sm">
              <CardImg top width="100%" src="/images/Miquel.png" alt="Card image cap" />
              <CardBody className="text-center">
                <CardTitle><h4>Miquel Oliver Riera</h4></CardTitle>
                <CardSubtitle>Project Director</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>  
      </Container>
    </section>
  );
}
export default Team;