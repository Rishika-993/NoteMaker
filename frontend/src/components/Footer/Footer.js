import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
      <footer style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
          justifyContent: "center",
          background: "#158cba"
      }}>
          <Container>
              <Row>
                  <Col className='text-center py-3'>
                      © 2023 Note Maker. All rights reserved.
                  </Col>
              </Row>
          </Container>
    </footer>
  )
}

export default Footer