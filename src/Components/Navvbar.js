import React, { useState } from 'react';
import {
  InputGroup, Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Unbox from './../Assets/unbox.svg';

function Navvbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>

<div>
      <Navbar className="navv cat"  expand="md">
        <NavbarBrand href="/">
        <img className='ml-5' src={Unbox} width="50" height="67.29" alt="logoimage" loading="lazy" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                CATEGORY
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="cat">
                  New Arivals
                </DropdownItem>
                <DropdownItem className="cat">
                  Best Sellers
                </DropdownItem>
                <DropdownItem className="cat">
                  Tech & Gadgets
                </DropdownItem>
                <DropdownItem className="cat">
                  For Him
                </DropdownItem>
                <DropdownItem className="cat">
                  For Her
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="ml-5">
                <InputGroup>
                  <Input className="form-control search mr-sm-2" type="search" placeholder="Search Unbox" aria-label="Search" />
                </InputGroup>
            </NavItem>
            <NavItem className="ml-5">
              <NavLink href="https://github.com/reactstrap/reactstrap">HELP</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <button className="btn btn-danger mr-5 bn text-white my-2 my-sm-0" type="submit">SIGN IN</button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
    </>
  )
}

export default Navvbar