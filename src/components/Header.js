import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import NucampLogo from "../app/assets/img/logo.png";
import UserLoginForm from "../features/user/UserLoginForm";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand className="ms-5" tag={Link} to="/">
        <img src={NucampLogo} alt="nucamp logo" className="float-start" />
        <h1 className="mt-1">NuCamp</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/directory">
              <i className="fa fa-list fa-lg" /> Directory
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/contact">
              <i className="fa fa-address-card fa-lg" /> Contact
            </Link>
          </NavItem>
        </Nav>
        <UserLoginForm />
      </Collapse>
    </Navbar>
  );
};

export default Header;
