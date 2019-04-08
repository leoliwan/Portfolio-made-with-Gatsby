import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Col, Row, Form, Card, Button } from 'react-bootstrap'

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
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
                            <Form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                                <Row>
                                    <Col md="6" lg="6">
                                    <Form.Group>
                                        <Form.Label htmlFor="name">Name</Form.Label>
                                        <Form.Control type="text" id="name" />
                                    </Form.Group>
                                    </Col>
                                    <Col md="6" lg="6">
                                    <Form.Group>
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group>
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" name="textarea" id="textarea" rows="3" />
                                </Form.Group>
                                <Form.Group>
                                    <div data-netlify-recaptcha="true"></div>
                                </Form.Group>
                                <Button variant="info" type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScF8_Vl8_bDNxCeiIYAMHdhERTcgM4F2eNjscg8733NS9nqjQ/viewform?embedded=true" width="640" height="1075" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                    </Card>
                        
                    </Col>
                </Row>
            </Container>
    </Layout>
) 

export default Contact
