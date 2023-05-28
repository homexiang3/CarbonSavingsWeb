import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {MdHome, MdDirectionsCar, MdRestaurant, MdAnalytics} from 'react-icons/md'
import 'react-tabs/style/react-tabs.css';
const HomeTab = () => {
  return(
    <h2>Home Energy</h2>
  );
}
const TransportTab = () => {
  return(
    <h2>Transport</h2>
  );
}
const FoodTab = () => {
  return(
    <h2>Food</h2>
  );
}
const ResultsTab = () => {
  return(
    <h2>Results</h2>
  );
}
const CalculatorTabs = () => {
  return(
      <Tabs className = "Tabs bg-light">
        <TabList>
          <Tab><h5>Home</h5> <MdHome size={24}/> </Tab>
          <Tab><h5>Transport</h5> <MdDirectionsCar size={24}/></Tab>
          <Tab><h5>Food</h5> <MdRestaurant size={24}/></Tab>
          <Tab><h5>Results</h5> <MdAnalytics size={24}/></Tab>
        </TabList>

        <TabPanel>
          <HomeTab/>
        </TabPanel>
        <TabPanel>
          <TransportTab/>
        </TabPanel>
        <TabPanel>
          <FoodTab/>
        </TabPanel>
        <TabPanel>
          <ResultsTab/>
        </TabPanel>
    </Tabs>
  );
}
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
            <Row>
              <CalculatorTabs></CalculatorTabs>
            </Row>
        </Container>
    </section>
  );
}
export default Calculator;