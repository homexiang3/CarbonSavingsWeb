import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Calculator = () => {
  return (
    <section className="section" id="calculator">
        <Container>
            <Row className="justify-content-center">
            <Col lg={6} md={8}>
                <div className="title text-center">
                <h2 className="font-weight-normal text-dark mb-5">Carbon Footprint Calculator</h2>
                </div>
            </Col>
            </Row>
        </Container>
    </section>
  );
}
export default Calculator;