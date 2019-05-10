import React from 'react'
import { Link } from "gatsby"
import { Container, Row, Col, Card } from 'react-bootstrap'
import styled from 'styled-components'
import efonfire from '../images/efonfire.png'
import avila from '../images/avila.com.png'
import premiva from '../images/premiva.png'

const Testimonials = () => (
    <TestimonialsWrapper>
        <Container className="py-5 text-center">
            <h2 className="mb-5 text-white">What our clients say about us?</h2>
            <Row>
                <Col sm="12" md="6" lg="4" className="mb-3">     
                    <Card body>
                        <div className="text-center mb-4">
                            <img src={efonfire} alt="testi" className="img-fluid" />
                        </div>
                        <p class="mb-0 align-middle"><em>"I like Levi Web Design. It does a good job. If you are looking for a web developer/designer, I would highly recommend Levi Web Design."</em></p>
                        <hr />
                        <small class="text-muted">By Noe: ESL Teacher and Owner of Efonfire.com</small>  
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4" className="mb-3">
                    <Card body>
                        <div className="text-center mb-4">
                            <img src={premiva} alt="testi" className="img-fluid" />
                        </div>
                        <p class="mb-0 align-middle"><em>"Leo went above and beyond what the job entailed. He anticipated my needs and was able to give very quality service and results. He is available all the time and responds quickly. Highly recommend him. Great work!"</em></p>
                        <hr />
                        <small class="text-muted">By travelling.caravan: Owner of premivamarketing.com</small>  
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card body>
                        <div className="text-center mb-4">
                            <img src={avila} alt="testi" className="img-fluid" />
                        </div>
                        <p class="mb-0 align-middle"><em>"Accommodating, he answers questions from the buyer. And he's willing to help if there are concerns arise even after the job. Great job!</em></p>
                        <hr />
                        <small class="text-muted">By Ab.j: Owner of abavila.com</small>  
                    </Card>
                </Col>
            </Row>
            <Link to="/workprojects"><button className="btn btn-outline-danger btn-lg mt-5">Browse Our Works</button></Link>
        </Container>
    </TestimonialsWrapper>
)

export default Testimonials

const TestimonialsWrapper = styled.div`
    background-color: #3DCDC0;
    img {
        width: 50%;
    }
    p {
        font-size: 14px;
    }
`