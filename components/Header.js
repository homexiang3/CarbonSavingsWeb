import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 180) {
            setSticky(true);
        } else if (window.scrollY < 180) {
            setSticky(false);
        }
    }

    return (
        <Navbar color="light" light container="md" expand="md" className="shadow-sm" sticky={sticky ? "top" : ""}>
            <NavbarBrand href="/"><img src="/images/Logo.png" alt="" className="logo"/><span className="text-carbonsavings">CarbonSavings</span></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <Nav className="m-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#feature">Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#calculator">Calculator</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about">Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#challenge">Challenges</NavLink>
                        </NavItem>
                    </Nav>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;