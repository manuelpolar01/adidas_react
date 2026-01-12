import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Navbar.css"
import CartWidgetReact from './CartWidgetReact';
import { NavLink } from 'react-router-dom';
function NavbarBootstrap() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  as={NavLink} to='./'></Navbar.Brand>
        <img src="./logo1.png" alt="logo"  className='primerLogo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={NavLink} to='./'>Home</Nav.Link>
            <NavDropdown title="menu" id="basic-nav-dropdown">
              <NavDropdown.Item  as={NavLink} to='/category/uomo'>uomo</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/donne'>
                donne
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/bambini'>bambini</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/scarpe'>
               scarpe
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/abbigliamento'>
               abbigliamento
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/outlet'>
               outlet
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <NavLink to='/cart'>
        <CartWidgetReact/>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;