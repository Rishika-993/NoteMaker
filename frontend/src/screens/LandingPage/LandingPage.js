import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css';

export const LandingPage = () => {
  return (
      <div className='main'>
          <Container>
              <Row>
                  <div className='intro-text'>
                      <div className='text-white'>
                          <h1 className='title'>Welcome to Note Maker</h1>
                          <p className='subtitle'>One Safe place for all your notes.</p>
                      </div>
                      <div className='buttonContainer'>
                          <a href="/login">
                              <Button size='lg' className='landingButton'>Login</Button>
                          </a>
                          <a href="/register">
                              <Button size='lg' className='landingButton' variant='outline-primary'>Register</Button>
                          </a>
                      </div>
                  </div>
              </Row>
          </Container>
    </div>
  )
}
