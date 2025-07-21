import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';

const Header = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem('userInfo'); // Remove user info from local storage
    history('/'); // Redirect to login page after logout
  };
  return (
    <Navbar expand="lg" bg='primary' variant='dark' className="bg-body-tertiary">
    <Container>
    <Navbar.Brand as={Link} to="/">
      Note Maker
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='m-auto'>
                <Form className="d-flex">
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                    />
                </Form>
            </Nav>
        <Nav>
        <Nav.Link as={Link} to="/mynotes" className='highlight'>
          My Notes
        </Nav.Link>
        <NavDropdown title={userInfo?.name || "User"} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutHandler}>
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