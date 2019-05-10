import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BubbleText from '../components/bubbleText'
import { Container, Col, Row } from 'react-bootstrap'

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
            <Container className="py-5 contact-me">
                <div className="text-center">
                    <h2>Contact Us</h2>
                    <p className="lead">If you’re looking to get in contact with us for business inquiries or if you have a question, feel free to reach me via the following:</p>
                    <Row>
                        <Col md="6" lg="6">
                            <a href="https://www.facebook.com/Levi-Web-Design-And-Development-363924167438736/" className="btn fb">Official Facebook Page</a>
                        </Col>
                        <Col md="6" lg="6">
                            <a href="www.google.com" className="btn gmail">Email: leoyukdawan@gmail.com</a>
                        </Col>
                    </Row>
                    <p className="lead mt-5">Or you can talk directly with us in the chat box below.</p>
                </div>
             </Container>
             <BubbleText />
    </Layout>
) 

export default Contact
//                 <p className="lead mt-5 text-center">Or you can send me a message below</p>
//                 <Row>
//                     <Col md="8" lg="8" className="mx-auto">
//                     <Card>
//                         <Card.Body>
//                             <form
//                                 name="contact"
//                                 method="post"
//                                 data-netlify="true"
//                                 data-netlify-honeypot="bot-field"
//                             >
//                             <Row className="mb-3">
//                                 <Col md="6" lg="6">
//                                     <label>First Name</label>
//                                     <input className="form-control" name="firstname"></input>
//                                 </Col>
//                                 <Col md="6" lg="6">
//                                     <label>Last Name</label>
//                                     <input className="form-control" name="lastname"></input>
//                                 </Col>
//                             </Row>
//                             <label>Message</label>
//                             <textarea className="form-control mb-3" row="3" name="message"></textarea>
//                             <p className="d-none">
//                                 <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
//                             </p>
//                              <input type="hidden" name="form-name" value="contact" />  
//                             <button type="submit" className="btn btn-dark">Send Message</button>
//                             </form>        
//                         </Card.Body>
//                     </Card>    
//                     </Col>
//                 </Row>



