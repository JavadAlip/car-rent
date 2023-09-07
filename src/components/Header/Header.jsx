import React from 'react'
import { Container,Row,Col } from 'reactstrap'

const Header = () => {
  return <Header className="header">
    <div className='header_top'>
      <Container>
        <Row>
          <col lg="6" md ="6"sm='6'>
            <div className="header_top__left">
              <span>Need help?</span>
              <div className="header_top_help">
                
              </div>
            </div>
          </col>
        </Row>
      </Container>
    </div>
  </Header>
}

export default Header