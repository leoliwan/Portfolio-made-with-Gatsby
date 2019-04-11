import React from 'react'
import Layout from "../components/layout"
import { Container, Col, Row, Card } from 'react-bootstrap'

const Contact = () => (
    <Layout>
            <Container className="py-5 contact-me">
                <div className="text-center">
                    <h2>Contact Me</h2>
                    <p className="lead">If you’re looking to get in contact with me for business inquiries or if you have a question, feel free to reach me via the following:</p>
                    <Row>
                        <Col md="6" lg="6">
                            <a href="https://www.facebook.com/Levi-Web-Design-And-Development-363924167438736/" className="btn fb">Official Facebook Page</a>
                        </Col>
                        <Col md="6" lg="6">
                            <a href="www.google.com" className="btn gmail">Email: leoyukdawan@gmail.com</a>
                        </Col>
                    </Row>
                </div>
                <p className="lead mt-5 text-center">Or you can send me a message below</p>
                <Row>
                    <Col md="8" lg="8" className="mx-auto">
                    <Card>
                        <Card.Body>
                            <form
                                name="message"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                            >
                            <Row className="mb-3">
                                <Col md="6" lg="6">
                                    <label>First Name</label>
                                    <input className="form-control" name="firstname"></input>
                                </Col>
                                <Col md="6" lg="6">
                                    <label>Last Name</label>
                                    <input className="form-control" name="lastname"></input>
                                </Col>
                            </Row>
                            <label>Message</label>
                            <textarea className="form-control mb-3" row="3" name="message"></textarea>
                            <button type="submit" className="btn btn-dark">Send Message</button>
                            </form>        
                        </Card.Body>
                    </Card>    
                    </Col>
                </Row>
            </Container>
    </Layout>
) 

export default Contact
