import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
  CardFooter
} from 'reactstrap';
import "../App.css";

const Footer = (args) => {
  return (
    <>
    <div classname="footer">
      <Navbar {...args}>
        <NavbarBrand href="/">Back to Home</NavbarBrand>
            <NavItem>
              <NavLink href="/Catnew/">New Cat</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Catedit">
                About Us
              </NavLink>
            </NavItem>
          <NavbarText>Footer</NavbarText>
      </Navbar>
    </div>
    </>
  );
}

export default Footer;