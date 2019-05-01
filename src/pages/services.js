import React, { Component } from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import ecom from '../images/ecom.png'
import ebook from '../images/ebook.png'
import wordpress from '../images/wordpress.png'
import { FaCheck, FaAngleDown } from 'react-icons/fa'
import BubbleText from '../components/bubbleText'

class Services extends Component {
  state = {
    ecomdropDown: false,
    ebookdropDown: false,
    wordpressdropDown: false,
    ecomdisplay: 'none',
    ebookdisplay: 'none',
    wordpressdisplay: 'none',
  }
  handleEcomDisplay = () => {
   this.state.ecomdropDown ? this.setState({ecomdropDown: false, ecomdisplay: 'none'}) : this.setState({ecomdropDown:true, ecomdisplay: 'block'})
  }
  handleEbookDisplay = () => {
    this.state.ebookdropDown ? this.setState({ebookdropDown: false, ebookdisplay: 'none'}) : this.setState({ebookdropDown:true, ebookdisplay: 'block'})
   }
   handleWordPressDisplay = () => {
    this.state.wordpressdropDown ? this.setState({wordpressdropDown: false, wordpressdisplay: 'none'}) : this.setState({wordpressdropDown:true, wordpressdisplay: 'block'})
   }

  render() {
    const { ecomdisplay, ebookdisplay, wordpressdisplay } = this.state
    return (
      <Layout>
        <SEO title="Services" />
          <Container className="py-5 text-center">
            <h2>My Services</h2>
            <p className="mb-5">I specialize in building modern web applications for online business such as e-commerce, startup project prototyping, affiliate websites, wordpress development and many more.</p>
            <Row>
              <Col md="4" lg="4">
                <img src={ecom} className="img-fluid" alt="ecom" />
                <Card className="ecom">
                  <Card.Header className="ecom-head e-com" onClick={this.handleEcomDisplay}>Click For More Details <FaAngleDown /></Card.Header>
                    <Card.Body style={{display: `${ecomdisplay}`}}>
                      <ListGroup>
                        <ListGroup.Item><FaCheck className="ecom-icon"/> Shopify eCommerce</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ecom-icon"/> WordPress/WooCommerce Website</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ecom-icon"/> Paypal and Stripe Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ecom-icon"/> AliExpress and Oberlo Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ecom-icon"/> Social Media Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ecom-icon"/> Google Map Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ecom-icon"/> Blog Page</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ecom-icon"/> About Page</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ecom-icon"/> Contact Page</ListGroup.Item>
                      </ListGroup>
                      <Link to="/contact" className="btn e-com contact">Request for A Quote</Link>
                    </Card.Body>
                </Card>
              </Col>

              <Col md="4" lg="4">
                <img src={ebook} className="img-fluid" alt="ebook" />
                <Card className="ebook">
                  <Card.Header className="ecom-head e-book" onClick={this.handleEbookDisplay}>Click For More Details <FaAngleDown /></Card.Header>
                    <Card.Body style={{display: `${ebookdisplay}`}}>
                      <ListGroup>
                        <ListGroup.Item><FaCheck className="ebook-icon"/> Ebook Sales Page</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ebook-icon"/> Email Marketing Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ebook-icon"/> Paypal and Stripe Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ebook-icon"/> Blog Page</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ebook-icon"/> About Page</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="ebook-icon"/> Contact Page</ListGroup.Item>
                      </ListGroup>
                      <Link to="/contact" className="btn e-book contact ">Request for A Quote</Link>
                    </Card.Body>
                </Card>
              </Col>

              <Col md="4" lg="4">
                <img src={wordpress} className="img-fluid" alt="wordpress" />
                <Card className="wordpress">
                  <Card.Header className="wordpress-head w-ordpress" onClick={this.handleWordPressDisplay}>Click For More Details <FaAngleDown /></Card.Header>
                    <Card.Body style={{display: `${wordpressdisplay}`}}>
                      <ListGroup>
                        <ListGroup.Item><FaCheck className="wordpress-icon"/> Any WordPress Website</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="wordpress-icon"/> Shop Page Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="wordpress-icon"/> Paypal and Stripe Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="wordpress-icon"/> Social Media Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="wordpress-icon"/> Google Map Integration</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="wordpress-icon"/> Blog Page</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="wordpress-icon"/> About Page</ListGroup.Item>
                        <ListGroup.Item><FaCheck className="wordpress-icon"/> Contact Page</ListGroup.Item>
                      </ListGroup>
                      <Link to="/contact" className="btn w-ordpress contact ">Request for A Quote</Link>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <BubbleText />
    </Layout>
    )
  }
  
}

export default Services
