import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import profile from '../images/profile.jpg'
import { Container, Row, Col } from 'react-bootstrap'

const Team = () => (
    <TeamWrapper>
        <Container className="py-5">
            <Row>
                <Col md="12" lg="4" className="text-center">
                    <img className="img-fluid rounded-circle w-50"  src={profile} alt="profile" />
                </Col>
                <Col md="12" lg="8" className="text-center">
                    <p>Hi, my name is Leo. I am a web developer who loves writing clean, reponsive and elegant codes. I specialize in Bootstrap Framework, Javascript, REACT JS, Gatsby, PHP-Laravel Framework and Wordpress.
                    Levi-Web Solution is my company website where I showcase my works and services.</p>
                    <div className="hire_me">
                        <a href="https://www.facebook.com/Levi-Web-Design-And-Development-363924167438736/" className="btn btn-danger px-3 py-2 my-3 mr-2">Message Me For A Quote</a>
                        <Link to="/contact" className="btn btn-danger px-4 py-2 my-3 bg-transparent">HIRE ME</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </TeamWrapper>
)

export default Team

const TeamWrapper = styled.div`
    background-color: #D6D6D6;
`