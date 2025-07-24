import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';
// import { useEffect } from 'react';

export const LandingPage = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
  
    const logoutHandler = () => {
      dispatch(logout());
      localStorage.removeItem('userInfo'); // Remove user info from local storage
      history('/'); // Redirect to login page after logout
    };

    // useEffect(() => {
    //     if (userInfo) {
    //         history('/mynotes'); // Redirect to My Notes if user is logged in
    //     }
    // }, [userInfo, history]);
  return (
      <div className='main'>
          <Container>
              <Row>
                  <div className='intro-text'>
                      <div className='text-white'>
                          <h1 className='title'>Welcome to Note Maker</h1>
                          <p className='subtitle'>One Safe place for all your notes.</p>
                      </div>
                      {!userInfo ?
                          <div className='buttonContainer'>
                              <a href="/login">
                              <Button size='lg' className='landingButton'>Login</Button>
                          </a>
                          <a href="/register">
                              <Button size='lg' className='landingButton' variant='outline-primary'>Register</Button>
                          </a>
                          </div>
                          :
                          <div className='buttonContainer'>
                          <a href="/mynotes">
                              <Button size='lg' className='landingButton'>My Notes</Button>
                            </a>

                          <Button size='lg' className='landingButton' variant='outline-primary' onClick={logoutHandler}>Logout</Button>
                          </div>
                      }
                  </div>
              </Row>
          </Container>
    </div>
  )
}
