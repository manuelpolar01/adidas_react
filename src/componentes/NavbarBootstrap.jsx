import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Navbar.css"
import CartWidgetReact from './CartWidgetReact';
function NavbarBootstrap() {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <img src="./logo1.png" alt="logo"  className='primerLogo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">uomo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                donne
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">bambini</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               scarpe
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
               abbigliamento
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
               outlet
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetReact/>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;