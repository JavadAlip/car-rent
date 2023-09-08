import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../../styles/header.css"

const Header = () => {
  return <Header className="header">
    <div className='header_top'>
      <Container>
        <Row>
          <Col lg="6" md ="6"sm='6'>
            <div className="header_top__left">
              <span>Need help?</span>
              <span className="header_top_help">
              <i class="ri-phone-fill"></i> +91 6574839001
              </span>
              </div>
          </Col>
          <Col lg="6" md ="6"sm='6'>
          <div className="header_top__right">
            <Link><i class="ri-arrow-right-circle-line">Login</i></Link>
            <Link><i class="ri-user-line">Register</i></Link>
          </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  </Header>
}

export default Header