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
    <div className="footer">
      <Navbar {...args}>
        <NavbarBrand href="/">Back to Home</NavbarBrand>
        <div className='footer-textbox'> &copy;Aileen | Raymond | Sammy |</div>
      </Navbar>
    </div>
    </>
  );
}

export default Footer;