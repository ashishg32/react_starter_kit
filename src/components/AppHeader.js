import React from 'react';
import {
  Navbar 
} from 'react-bootstrap';

const  AppHeader = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Star Wars</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  );
}

export default AppHeader;