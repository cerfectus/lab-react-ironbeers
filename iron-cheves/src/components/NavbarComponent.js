import React from "react";
import {
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
  DropdownItem
} from "reactstrap";

class NavbarComponent extends React.Component {
  render() {
    return (
      <div classname="container">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/app">reactstrap</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <DropdownMenu right>
              <DropdownItem divider />
            </DropdownMenu>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;
