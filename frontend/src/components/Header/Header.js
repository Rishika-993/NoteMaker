import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';

const Header = ({setSearch}) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem('userInfo');
    history('/');
  };
  
  return (
    <Navbar expand="lg" bg='primary' variant='dark' className="bg-body-tertiary custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="custom-brand">
          Note Maker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search notes..."
                className="mr-sm-2 custom-search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          { userInfo ? (
            <Nav>
              <Nav.Link as={Link} to="/mynotes" className='highlight custom-nav-link'>
                My Notes
              </Nav.Link>
              <NavDropdown title={userInfo?.name || "User"} id="basic-nav-dropdown" className="custom-dropdown">
                <NavDropdown.Item href="/profile" className="custom-dropdown-item">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler} className="custom-dropdown-item">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login" className="custom-nav-link">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="custom-nav-link">
                Register
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header