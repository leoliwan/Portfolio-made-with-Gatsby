import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import styled from 'styled-components'
import online1 from '../images/online1.png'
import online2 from '../images/online2.png'
import online3 from '../images/online3.png'


const OnlineServices = () => (
    <React.Fragment>
    <OnlineWrapper>
        <div className="shopify text-center py-5">
            <h2>Ecommerce Solutions & Online Stores</h2>
            <Badge>Shopify Store</Badge>
            <Badge>Wordpress + WooCommerce</Badge>
            <Badge>Custom-made</Badge>
        </div>
    </OnlineWrapper>
    <div className="bg-light">
        <Container className="py-5">
            <Row>
                <Col md="6" lg="6" className="py-5">
                    <h3>Get your products to the web</h3>
                    <p className="lead">Let us help you build and deploy elegant, responsive and modern online store that is affordable and blazing-fast</p>
                    <a href="https://www.facebook.com/Levi-Web-Design-And-Development-363924167438736/" className="btn btn-outline-info">Request for a Quote</a>
                </Col>
                <Col md="6" lg="6">
                    <img src={online1} className="img-fluid" alt="online"/>
                    <p className="copyright-text">Image: Pixabay.com</p>
                </Col>
            </Row>
        </Container>
    </div>
    <Container className="py-5">
        <Row>
            <Col md="6" lg="6">
                <img src={online2} className="img-fluid" alt="online"/>
                <p className="copyright-text">Image: Pixabay.com</p>
            </Col>
            <Col md="6" lg="6" className="py-5">
                <h3>Own an online store that sells</h3>
                <p className="lead">Showcase your winning products to millions of online users. Allow them to view, purchase and comeback for more.</p>
                <a href="https://www.facebook.com/Levi-Web-Design-And-Development-363924167438736/" className="btn btn-outline-info">Message Us on Facebook</a>
            </Col>
        </Row>
    </Container>
    <div className="bg-light">
        <Container className="py-5">
            <Row>
                <Col md="6" lg="6" className="py-5">
                    <h3>Paypal and Credit Card Checkout Integration</h3>
                    <p className="lead">Recieve payments for your products via Paypal/Credit Card and Bank Deposits</p>
                    <a href="https://www.facebook.com/Levi-Web-Design-And-Development-363924167438736/" className="btn btn-outline-info">Contact Us</a>
                </Col>
                <Col md="6" lg="6">
                    <img src={online3} className="img-fluid" alt="online"/>
                    <p className="copyright-text">Image: Pixabay.com</p>
                </Col>
            </Row>
        </Container>
    </div>
    </React.Fragment>
)

export default OnlineServices

const OnlineWrapper = styled.div`
    .shopify {
        position: relative;
        min-height: 200px;
        background-color: #E7553D;
    }
    h2 {
        color: #fff;
    }
    .badge {
        padding: 10px 20px;
        font-weight: 300;
        font-size: 16px;
        margin: 8px;
        background-color: #3DCDC0;
        color: #fff;
    }

    @media (max-width: 505px) {
        .shopify, .overlay {
            min-height: 280px;
        }
    }
`