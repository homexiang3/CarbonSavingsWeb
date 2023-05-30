import React from 'react';
import { Container, Row, Col } from "reactstrap";
import {FaInstagramSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa'
const Footer = () => {
    const links = [
        {
            id: 1, title: "About Us",
            child: [
                { title: "Contact Us", link: "#" },
                { title: "FAQs", link: "#" },
                { title: "Privacy Policy", link: "#" },
            ]
        },
    ];

    return (
        <section className="footer section bg-light">
            <Container>
                <Row className="text-center">
                    <Col lg={12}>
                        <Row>
                            {
                                links.map((link, key) =>
                                    <Col key={key} md={4}>
                                        <h6 className="text-dark mb-3">{link.title}</h6>
                                        <ul className="list-unstyled company-sub-menu">
                                            {
                                                link.child.map((fLink, key) =>
                                                    <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                                                )
                                            }
                                        </ul>
                                    </Col>
                                )
                            }
                            <Col md={4}>
                                <h6 className="text-dark mb-3">Social media</h6>
                                <ul className="list-unstyled footer-social-list mt-4">
                                    <li className="list-inline-item"><a href="#"><FaInstagramSquare size={32}/></a></li>
                                    <li className="list-inline-item"><a href="#"><FaTwitterSquare size={32}/></a></li>
                                    <li className="list-inline-item"><a href="#"><FaLinkedin size={32}/></a></li>                 
                                </ul>
                            </Col>
                            <Col md={4}>
                                <h6 className="text-dark mb-3">Our Address</h6>
                                <p className="text-muted f-14">Carrer de Roc Boronat, 138, 08018 Barcelona</p>
                                <h6 className="text-muted pb-2">Email: carbonsavingsapp@gmail.com</h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12}>
                        <div className="text-center text-muted">
                            <p className="mb-0 f-15">2023 © CarbonSavings. All rights reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Footer;