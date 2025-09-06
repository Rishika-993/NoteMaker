import { Container, Row, Col } from 'react-bootstrap'
import './MainScreen.css'

const MainScreen = ({ title, children }) => {
  return (
    <div className='mainback'>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <div className='page'>    
              {title && (
                <>
                  <h1 className='heading'>{title}</h1>
                  <hr />
                </>
              )}
              <div className="content-wrapper">
                {children}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MainScreen