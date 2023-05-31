import React from 'react';
import { useState, useEffect} from 'react';
import { Container, Row, Col, Form, Label, Input, Alert } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {MdHome, MdDirectionsCar, MdRestaurant, MdAnalytics, MdTipsAndUpdates, MdWarning, MdCheckCircle} from 'react-icons/md'
import 'react-tabs/style/react-tabs.css';

const FormField = (props) => {
  return(
  <Row className="ps-2 align-items-center">
          <Col lg={3} className="my-2">
          <Label for={props.InputId}>
            {props.label}
          </Label>
          </Col>
          <Col lg={4} className="my-2">
            <Input
              id={props.inputId}
              name={props.inputId}
              min = "0"
              placeholder={props.inputPlaceholder}
              type="number"
              value = {props.inputVal}
              conversion = {props.conversion}
              onChange = {props.inputFunction}
            />
         </Col>
         <Col lg={4} className="my-2">
            <Input
              id={props.resultId}
              min = "0"
              name={props.resultId}
              placeholder="Kg/CO2e"
              type="number"
              value = {props.conversionVal}
              readOnly = {true}
            />
         </Col>
        </Row>
);}

const Calculator = () => {

  const [values, setValues] = useState({
    electricity:'',
    naturalGas:'',
    diesel:'',
    glp:'',
    propane:'',
    butane:'',
    wood:'',
    coal:'',
    gasolineCar:'',
    dieselCar:'',
    motorcycle:'',
    train:'',
    underground:'',
    bus:'',
    flight:'',
    beefLamb:'',
    shellfish:'',
    omeats:'',
    fish:'',
    milkYoghurt:'',
    cheeseButter:'',
    fvc:''
  });
  const [conversions, setConversions] = useState({
    celectricity:'',
    cnaturalGas:'',
    cdiesel:'',
    cglp:'',
    cpropane:'',
    cbutane:'',
    cwood:'',
    ccoal:'',
    cgasolineCar:'',
    cdieselCar:'',
    cmotorcycle:'',
    ctrain:'',
    cunderground:'',
    cbus:'',
    cflight:'',
    cbeefLamb:'',
    cshellfish:'',
    comeats:'',
    cfish:'',
    cmilkYoghurt:'',
    ccheeseButter:'',
    cfvc:''
  });
  const[homeTotal, setHomeTotal] = useState(0);
  const[transportTotal, setTransportTotal] = useState(0);
  const[foodTotal, setFoodTotal] = useState(0);
  const[total,setTotal] = useState(0);
  const globalAverage = 4650;
  const nationalAverage = 6220;

  const handleValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let conversion = (parseFloat(value)*parseFloat(e.target.getAttribute('conversion'))).toFixed(4);
    setValues({
      ...values,
      [name]: value
    });
    let cName = "c" + name;
    const conversionValues = {
      ...conversions,
      [cName]: +conversion
    }
    setConversions(conversionValues);
  }
  const homeConversions = [conversions.celectricity,conversions.cnaturalGas,conversions.cdiesel,conversions.cglp,conversions.cpropane,conversions.cbutane,conversions.cwood,conversions.ccoal]
  const transportConversions = [conversions.cgasolineCar,conversions.cdieselCar,conversions.cmotorcycle,conversions.ctrain,conversions.cunderground,conversions.cbus, conversions.cflight]
  const foodConversions = [conversions.cbeefLamb,conversions.cshellfish,conversions.comeats,conversions.cfish,conversions.cmilkYoghurt,conversions.ccheeseButter,conversions.cfvc]

  function getSum(sectionConversions,sectionFunc) {
    //change values of section
    const sectionValues = Object.values(sectionConversions);
    const sectionCleanValues = sectionValues.filter(Boolean)
    let sectionSum = sectionCleanValues.reduce((acc, c) => acc + c, 0);
    sectionFunc(parseFloat(sectionSum).toFixed(4));
    //change total values
    const totalValues = Object.values(conversions);
    const totalCleanValues = totalValues.filter(Boolean)
    let totalSum = totalCleanValues.reduce((acc, c) => acc + c, 0);
    setTotal(parseFloat(totalSum).toFixed(4));
  }
  useEffect(() => getSum(homeConversions,setHomeTotal), homeConversions);
  useEffect(() => getSum(transportConversions,setTransportTotal), transportConversions);
  useEffect(() => getSum(foodConversions,setFoodTotal), foodConversions);

//CALCULATOR RENDER
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
              <div className="calculator-tabs">
              <Tabs className = "Tabs bg-light shadow">
                <TabList>
                  <Tab><h5>Home</h5> <MdHome size={24}/> </Tab>
                  <Tab><h5>Transport</h5> <MdDirectionsCar size={24}/></Tab>
                  <Tab><h5>Food</h5> <MdRestaurant size={24}/></Tab>
                  <Tab><h5>Results</h5> <MdAnalytics size={24}/></Tab>
                </TabList>

                <TabPanel>
                  <Row className="mt-5">
                    <Col lg={{size:6, offset:0}} md={{size:8,offset:2}}>
                      <FormField label="Electricity" inputId="electricity" inputVal={values.electricity} conversionVal={conversions.celectricity} inputFunction ={handleValue} inputPlaceholder="Annual KWh" resultId="celectricity" conversion="0.273" />
                      <FormField label="Natural Gas" inputId="naturalGas" inputVal={values.naturalGas} conversionVal={conversions.cnaturalGas} inputFunction ={handleValue} inputPlaceholder="Annual m3" resultId="cnaturalGas" conversion="2.124"/>
                      <FormField label="Diesel" inputId="diesel" inputVal={values.diesel} conversionVal={conversions.cdiesel} inputFunction ={handleValue} inputPlaceholder="Annual Kg" resultId="cdiesel" conversion="2.883"/>
                      <FormField label="GLP" inputId="glp" inputVal={values.glp} conversionVal={conversions.cglp} inputFunction ={handleValue} inputPlaceholder="Annual Kg" resultId="cglp" conversion="2.985"/>
                    </Col>
                    <Col lg={{size:6, offset:0}} md={{size:8,offset:2}}>
                      <FormField  label="Propane" inputId="propane" inputVal={values.propane} conversionVal={conversions.cpropane} inputFunction ={handleValue} inputPlaceholder="Annual Kg" resultId="cpropane" conversion="2.94"/>
                      <FormField  label="Butane" inputId="butane" inputVal={values.butane} conversionVal={conversions.cbutane} inputFunction ={handleValue} inputPlaceholder="Annual Kg" resultId="cbutane" conversion="2.96"/>
                      <FormField  label="Wood" inputId="wood" inputVal={values.wood} conversionVal={conversions.cwood} inputFunction ={handleValue} inputPlaceholder="Annual Kg" resultId="cwood" conversion="1.747"/>
                      <FormField  label="Coal" inputId="coal" inputVal={values.coal} conversionVal={conversions.ccoal} inputFunction ={handleValue} inputPlaceholder="Annual Kg" resultId="ccoal" conversion="2.667"/>
                    </Col>
                  </Row>
                  <Row className="text-center mt-5">
                    <Col lg={{size:8,offset:2}}>
                      <Alert color="warning" fade={false}>
                        <MdTipsAndUpdates size={24} color="warning" className="me-3"/>Tips - Reduce household consumption and use renewable energies
                      </Alert>
                      <h5>Home Carbon Footprint: <span id="home-result">{homeTotal}</span> Kg/CO<sub>2</sub>e</h5>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row className="mt-5">
                    <Col lg={{size:6, offset:0}} md={{size:8,offset:2}}>
                      <FormField label="Gasoline Car" inputId="gasolineCar" inputVal={values.gasolineCar} conversionVal={conversions.cgasolineCar} inputFunction ={handleValue} inputPlaceholder="Annual Km" resultId="cgasolineCar" conversion="0.18855"/>
                      <FormField label="Diesel Car" inputId="dieselCar" inputVal={values.dieselCar} conversionVal={conversions.cdieselCar} inputFunction ={handleValue}inputPlaceholder="Annual Km" resultId="cdieselCar" conversion="0.15525"/>
                      <FormField label="Motorcycle" inputId="motorcycle" inputVal={values.motorcycle} conversionVal={conversions.cmotorcycle} inputFunction ={handleValue}inputPlaceholder="Annual Km" resultId="cmotorcycle" conversion="0.11314"/>
                      <FormField label="Train" inputId="train"inputVal={values.train} conversionVal={conversions.ctrain} inputFunction ={handleValue} inputPlaceholder="Annual Km" resultId="ctrain" conversion="0.03258"/>
                    </Col>
                    <Col lg={{size:6, offset:0}} md={{size:8,offset:2}}>
                      <FormField label="Underground" inputId="underground" inputVal={values.underground} conversionVal={conversions.cunderground} inputFunction ={handleValue}inputPlaceholder="Annual Km" resultId="cunderground" conversion="0.0566"/>
                      <FormField label="Bus" inputId="bus" inputVal={values.bus} conversionVal={conversions.cbus} inputFunction ={handleValue}inputPlaceholder="Annual Km" resultId="cbus" conversion="0.07392"/>
                      <FormField label="Flight" inputId="flight" inputVal={values.flight} conversionVal={conversions.cflight} inputFunction ={handleValue} inputPlaceholder="Annual Km" resultId="cflight" conversion="0.15"/>
                    </Col>
                  </Row>
                  <Row className="text-center mt-5">
                    <Col lg={{size:8,offset:2}}>
                      <Alert color="warning" fade={false}>
                        <MdTipsAndUpdates size={24} color="warning" className="me-3"/>Tips - Use public & shared transport alternatives and avoid flights
                      </Alert>
                      <h5>Transport Carbon Footprint: <span id="transport-result">{transportTotal}</span> Kg/CO<sub>2</sub>e</h5>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row className="mt-5">
                    <Col lg={{size:6, offset:0}} md={{size:8,offset:2}}>
                      <FormField label="Beef & Lamb" inputId="beefLamb" inputVal={values.beefLamb} conversionVal={conversions.cbeefLamb} inputFunction ={handleValue} inputPlaceholder="Annual Kg" resultId="cbeefLamb" conversion="28.32"/>
                      <FormField label="Shellfish" inputId="shellfish" inputVal={values.shellfish} conversionVal={conversions.cshellfish} inputFunction ={handleValue}inputPlaceholder="Annual Kg" resultId="cshellfish" conversion="14.71"/>
                      <FormField label="Other meats & eggs" inputId="omeats" inputVal={values.omeats} conversionVal={conversions.comeats} inputFunction ={handleValue} inputPlaceholder="Annual Kg" resultId="comeats" conversion="4.82"/>
                      <FormField label="fish" inputId="fish" inputVal={values.fish} conversionVal={conversions.cfish} inputFunction ={handleValue} inputPlaceholder="Annual Kg" resultId="cfish" conversion="4.41"/>
                    </Col>
                    <Col lg={{size:6, offset:0}} md={{size:8,offset:2}}>
                      <FormField label="Milk & yoghurt" inputId="milkYoghurt" inputVal={values.milkYoghurt} conversionVal={conversions.cmilkYoghurt} inputFunction ={handleValue}inputPlaceholder="Annual Kg" resultId="cmilkYoghurt" conversion="1.4"/>
                      <FormField label="Cheese & butter" inputId="cheeseButter" inputVal={values.cheeseButter} conversionVal={conversions.ccheeseButter} inputFunction ={handleValue}inputPlaceholder="Annual Kg" resultId="ccheeseButter" conversion="10.19"/>
                      <FormField label="Fruits & vegetables & cereals" inputId="fvc" inputVal={values.fvc} conversionVal={conversions.cfvc} inputFunction ={handleValue}inputPlaceholder="Annual Kg" resultId="cfvc" conversion="0.5"/>
                    </Col>
                  </Row>
                  <Row className="text-center mt-5">
                    <Col lg={{size:8,offset:2}}>
                      <Alert color="warning" fade={false}>
                        <MdTipsAndUpdates size={24} color="warning" className="me-3"/>Tips - Reduce animal consumption and introduce more fruits, vegetables and cereals
                      </Alert>
                      <h5>Food Carbon Footprint: <span id="food-result">{foodTotal}</span> Kg/CO<sub>2</sub>e</h5>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                <div className="text-center mt-5">
                  <Row>
                    <Col lg={{size:6, offset:0}} md={{size:8,offset:2}}>
                      <h5 className='mt-4'>User Carbon Footprint</h5>
                      <p className="mt-4">Home Carbon Footprint: <span className="fw-bold">{homeTotal} Kg/CO<sub>2</sub>e</span></p>
                      <p className="mt-4">Transport Carbon Footprint: <span className="fw-bold">{transportTotal} Kg/CO<sub>2</sub>e</span></p>
                      <p className="mt-4">Food Carbon Footprint: <span className="fw-bold">{foodTotal} Kg/CO<sub>2</sub>e</span></p>
                      <p className="mt-4 text-carbonsavings">Total Carbon Footprint: <span className="fw-bold">{total} Kg/CO<sub>2</sub>e</span></p>
                    </Col>
                    <Col lg={{size:6, offset:0}} md={{size:8,offset:2}}>
                      <h5 className='mt-3'>Average Carbon Footprint</h5>
                      <p className="mt-3">Global average Carbon Footprint: <span className="fw-bold">{globalAverage} Kg/CO<sub>2</sub>e</span></p>
                      {total >= globalAverage ?
                        <Alert color="danger" className="mx-5" fade={false}>
                          <MdWarning size={24}  className="me-3"/>Worse or equal than global average!
                        </Alert>
                        :
                        <Alert color="success" className="mx-5" fade={false}>
                          <MdCheckCircle size={24}  className="me-3"/>Better than global average!
                        </Alert>
                      }
                      <p className="mt-3">National average Carbon Footprint: <span className="fw-bold">{nationalAverage} Kg/CO<sub>2</sub>e</span></p>
                      {total >= nationalAverage ?
                        <Alert color="danger" className="mx-5" fade={false}>
                          <MdWarning size={24} className="me-3"/>Worse or equal than national average!
                        </Alert>
                        :
                        <Alert color="success" className="mx-5" fade={false}>
                          <MdCheckCircle size={24}  className="me-3"/>Better than national average!
                        </Alert>
                      }
                    </Col>
                  </Row>
                  </div>
                </TabPanel>
              </Tabs>
              </div>
            </Row>
        </Container>
    </section>
  );
}
export default Calculator;