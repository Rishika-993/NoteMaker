import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" bg='primary' variant='dark' className="bg-body-tertiary">
    <Container>
    <Navbar.Brand>
        <Link to={"/"}>Note Maker</Link>
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='m-auto'>
                <Form inline>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                    />
                </Form>
            </Nav>
        <Nav>
        <Nav.Link className='highlight'>
            <Link to={"/mynotes"}>My Notes</Link>
        </Nav.Link>
          <NavDropdown title="Rishika agarwal" id="basic-nav-dropdown" className='custom-dropdown'>
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Log Out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header