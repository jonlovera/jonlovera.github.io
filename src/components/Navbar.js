import React, { useState } from "react";

import {
  Collapse,
  Navbar as DefaultNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container
} from "reactstrap";

import content from "content";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  const github = content.social.find(({ name }) => name === "github");

  return (
    <DefaultNavbar color="transparent" expand="md" light>
      <Container>
        <NavbarBrand href="/">{content.name}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </NavItem>
            {github && (
              <NavItem>
                <NavLink href={github.link} target="_blank">
                  GitHub
                </NavLink>
              </NavItem>
            )}
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/#contact">
                <Button color="primary">Contact</Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </DefaultNavbar>
  );
};

export default Navbar;
