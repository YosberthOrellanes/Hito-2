import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavbarHome = () => {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>

        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" style={{ width: '200px', height: '50px' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />


        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            <Link to="/registro" className="nav-link">Registrarse</Link>
            <Link to="/iniciosesion" className="nav-link">Iniciar Sesión</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
