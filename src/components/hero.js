import React from "react"
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import  profile  from '../images/profile.jpg'

const Hero = () => (
   <div className="home-section">
        <div className="dark-overlay">
            <Container>
                <Row>
                    <Col lg="8" className="mx-auto intro text-center">
                       <h1 className="display-6">I <span className="solution">design and develop</span> websites that stand out</h1>
                        <Row className="mx-auto text-white tagline">
                            <Col md="4">
                            <p>Responsive</p>
                            </Col>
                            <Col md="4">
                            <p>Innovative</p>
                            </Col>
                            <Col md="4">
                            <p>User-friendly</p>
                            </Col>
                        </Row>
                        <Link to="/services" className="btn btn-danger">View My Services</Link>
                    </Col>
                </Row>
            </Container>
            
            <div className="about">
                <Container>
                    <Row>
                        <Col md="12" lg="4" className="text-center">
                            <img className="img-fluid rounded-circle" src={profile} alt="profile" />
                        </Col>
                        <Col md="12" lg="8" className="text-center">
                            <p>Hi, my name is Leo. I am a web developer who loves writing clean, reponsive and elegant codes. I specialize in Bootstrap Framework, Javascript, REACT JS, Gatsby, PHP-Laravel Framework and Wordpress.
                            Levi-Web Solution is my personal website where I showcase my works and services.</p>
                            <div className="hire_me">
                                <Link to="/workprojects" className="btn btn-danger px-3 py-2 my-3 mr-2">My Works and Projects</Link>
                                <Link to="/contact" className="btn btn-danger px-4 py-2 my-3 bg-transparent">HIRE ME</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
   </div>
)

export default Hero
