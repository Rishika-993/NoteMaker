import { Container, Row, Col } from 'react-bootstrap'
import './MainScreen.css'

const MainScreen = ({ title, children, variant = 'full' }) => {
  return (
    <div className='mainback'>
      <Container fluid={variant === 'full'}>
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className={`page ${variant}`}>    
              {title && (
                <>
                  <h1 className='heading'>{title}</h1>
                  <hr />
                </>
              )}
              <div className={`content-wrapper ${variant}`}>
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