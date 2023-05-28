import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, Label, Input } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {MdHome, MdDirectionsCar, MdRestaurant, MdAnalytics} from 'react-icons/md'
import 'react-tabs/style/react-tabs.css';

const FormField = (props) => {
  const [value, setValue] = useState('');
  const applyConversion = (event) => {
    // 👇 Get input value from "event"
    setValue((parseFloat(event.target.value)*parseFloat(props.conversion)).toFixed(5));
  };
  return (
    <Row className="ps-2 align-items-center">
            <Col lg={3} className="my-2">
            <Label for={props.inputId}>
              {props.label}
            </Label>
            </Col>
            <Col lg={4} className="my-2">
              <Input
                id={props.inputId}
                name={props.inputId}
                placeholder={props.inputPlaceholder}
                type="number"
                conversion = {props.conversion}
                onChange = {applyConversion}
              />
           </Col>
           <Col lg={4} className="my-2">
              <Input
                id={props.resultId}
                name={props.resultId}
                placeholder="Kg/CO2eq"
                type="number"
                disabled="true"
                value = {value}
                className = {props.resultClass}
              />
           </Col>
          </Row>
  );
}
const HomeTab = () => {
  return(
    <Form className="mt-5">
      <Row>
        <Col lg={6} md={8}>
          <FormField label="Electricity" inputId="electricity" inputPlaceholder="Annual KWh" resultId="electricity-result" conversion="0.273" resultClass="home-result"/>
          <FormField label="Natural Gas" inputId="natural-gas" inputPlaceholder="Annual m3" resultId="natural-gas-result" conversion="2.124"resultClass="home-result"/>
          <FormField label="Diesel" inputId="diesel" inputPlaceholder="Annual Kg" resultId="diesel-result" conversion="2.883"resultClass="home-result"/>
          <FormField label="GLP" inputId="glp" inputPlaceholder="Annual Kg" resultId="glp-result" conversion="2.985"resultClass="home-result"/>
        </Col>
        <Col lg={6} md={8}>
          <FormField label="Propane" inputId="propane" inputPlaceholder="Annual Kg" resultId="propane-result" conversion="2.94"resultClass="home-result"/>
          <FormField label="Butane" inputId="butane" inputPlaceholder="Annual Kg" resultId="butane-result" conversion="2.96"resultClass="home-result"/>
          <FormField label="Wood" inputId="wood" inputPlaceholder="Annual Kg" resultId="wood-result" conversion="1.747"resultClass="home-result"/>
          <FormField label="Coal" inputId="coal" inputPlaceholder="Annual Kg" resultId="coal-result" conversion="2.667"resultClass="home-result"/>
        </Col>
      </Row>
      <Row className="text-center mt-5">
      <h5>Result: <span id="home-result">0</span> KG/CO2e</h5>
      </Row>
    </Form>
  );
}
const TransportTab = () => {
  return(
    <Form className="mt-5">
      <Row>
        <Col lg={6} md={8}>
          <FormField label="Gasoline Car" inputId="gasoline-car" inputPlaceholder="Annual Km" resultId="gasoline-car-result" conversion="0.18855"/>
          <FormField label="Diesel Car" inputId="diesel-car" inputPlaceholder="Annual Km" resultId="diesel-car-result" conversion="0.15525"/>
          <FormField label="Motorcycle" inputId="motorcycle" inputPlaceholder="Annual Km" resultId="motorcycle-result" conversion="0.11314"/>
          <FormField label="Train" inputId="train" inputPlaceholder="Annual Km" resultId="train-result" conversion="0.03258"/>
        </Col>
        <Col lg={6} md={8}>
          <FormField label="Underground" inputId="underground" inputPlaceholder="Annual Km" resultId="underground-result" conversion="0.0566"/>
          <FormField label="Bus" inputId="bus" inputPlaceholder="Annual Km" resultId="bus-result" conversion="0.07392"/>
          <FormField label="Flight" inputId="flight" inputPlaceholder="Annual Km" resultId="flight-result" conversion="0.15"/>
        </Col>
      </Row>
      <Row className="text-center mt-5">
      <h5>Result: <span id="transport-result">0</span> KG/CO2e</h5>
      </Row>
    </Form>
  );
}
const FoodTab = () => {
  return(
    <Form className="mt-5">
      <Row>
        <Col lg={6} md={8}>
          <FormField label="Beef & Lamb" inputId="beef-lamb" inputPlaceholder="Annual Kg" resultId="beef-lamb-result" conversion="28.32"/>
          <FormField label="Shellfish" inputId="shellfish" inputPlaceholder="Annual Kg" resultId="shellfish-result" conversion="14.71"/>
          <FormField label="Other meats & eggs" inputId="omeaths-eggs" inputPlaceholder="Annual Kg" resultId="omeats-eggs-result" conversion="4.82"/>
          <FormField label="fish" inputId="fish" inputPlaceholder="Annual Kg" resultId="fish-result" conversion="4.41"/>
        </Col>
        <Col lg={6} md={8}>
          <FormField label="Milk & yoghurt" inputId="milk-yoghurt" inputPlaceholder="Annual Kg" resultId="milk-yoghurt-result" conversion="1.4"/>
          <FormField label="Cheese & butter" inputId="cheese-butter" inputPlaceholder="Annual Kg" resultId="cheese-butter-result" conversion="10.19"/>
          <FormField label="Fruits & vegetables & cereals" inputId="fruits-vegetables-cereals" inputPlaceholder="Annual Kg" resultId="fruits-vegetables-cereals-result" conversion="0.5"/>
        </Col>
      </Row>
      <Row className="text-center mt-5">
      <h5>Result: <span id="food-result">0</span> KG/CO2e</h5>
      </Row>
    </Form>
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