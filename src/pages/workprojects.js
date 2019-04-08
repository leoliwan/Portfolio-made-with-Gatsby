import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import converter from '../images/converter.png'
import ebooklandingpage from '../images/ebook-landing-page.png'
import splitscreen from '../images/split-screen.png'
import ebookoptin from '../images/ebook-optin.png'
import barbershop from '../images/gruppo_mockup.png'
import onlineebook from '../images/avila.com.png'
import hotbestbuy from '../images/hotbestbuy.png'
import pasinaya from '../images/pasinaya.png'
import premiva from '../images/premiva homepage.png' 

const WorkProject = () => (
    <Layout>
        <SEO title="Work and Projects" />
        <h2 className="text-center pt-5">Web Applications</h2>
        <Col md="3" className="mx-auto bor-bo"></Col>
            <div className="work-projects text-center mt-5">
                <Container className="py-5">
                    <Row>
                        <Col sm="6" md="4" lg="3" className="mb-3">
                           <Card style={{height: '22rem'}}>
                                <Card.Img variant="top" src={converter} />
                                <Card.Body>
                                    <Card.Title>Real Time Currency Converter</Card.Title>
                                    <div className="badges">
                                        <Badge variant="secondary">ES6</Badge>
                                        <Badge variant="secondary">Bootstrap4</Badge>
                                        <Badge variant="secondary">HTML/CSS</Badge>
                                        <Badge variant="secondary">Fetch API</Badge>
                                    </div>
                                    <Card.Link className="btn btn-info" href="https://www.facebook.com/Levi-Web-Design-And-Development-363924167438736/">View Sample</Card.Link>
                                </Card.Body>
                            </Card> 
                        </Col>
                        <Col sm="6" md="4" lg="3" className="mb-3">
                           <Card style={{height: '22rem'}}>
                                <Card.Img variant="top" src={ebooklandingpage} />
                                <Card.Body>
                                    <Card.Title>E-book Sale Landing Page</Card.Title>
                                    <div className="badges">
                                        <Badge variant="secondary">Vanilla JS</Badge>
                                        <Badge variant="secondary">Bootstrap4</Badge>
                                        <Badge variant="secondary">HTML/CSS</Badge>
                                    </div>
                                    <Card.Link className="btn btn-info" href="https://leoliwan.github.io/ebook-landing-page/">View Sample</Card.Link>
                                </Card.Body>
                            </Card> 
                        </Col>
                        <Col sm="6" md="4" lg="3" className="mb-3">
                           <Card style={{height: '22rem'}}>
                                <Card.Img variant="top" src={splitscreen} />
                                <Card.Body>
                                    <Card.Title>Split Screen Landing Page</Card.Title>
                                    <div className="badges">
                                        <Badge variant="secondary">Vanilla Javscript</Badge>
                                        <Badge variant="secondary">Bootstrap4</Badge>
                                        <Badge variant="secondary">HTML/CSS</Badge>
                                    </div>
                                    <Card.Link className="btn btn-info" href="https://leoliwan.github.io/split-ebook-optin/">View Sample</Card.Link>
                                </Card.Body>
                            </Card> 
                        </Col>
                        <Col sm="6" md="4" lg="3" className="mb-3">
                           <Card style={{height: '22rem'}}>
                                <Card.Img variant="top" src={ebookoptin} />
                                <Card.Body>
                                    <Card.Title>Ebook Optin Landing Page</Card.Title>
                                    <div className="badges">
                                        <Badge variant="secondary">Vanilla Javscript</Badge>
                                        <Badge variant="secondary">Bootstrap4</Badge>
                                        <Badge variant="secondary">HTML/CSS</Badge>
                                    </div>
                                    <Card.Link className="btn btn-info" href="https://leoliwan.github.io/ebook-simple-optin/">View Sample</Card.Link>
                                </Card.Body>
                            </Card> 
                        </Col>
                    </Row>
                </Container>
            </div>

            <h2 className="text-center pt-5">Other Websites Done</h2>
            <p className="lead text-center">Made with Wordpress/WooCommerce and Shopify</p>
            <Col md="3" className="mx-auto bor-bo"></Col>
            <Container className="py-5 text-center">
                <Row>
                    <Col sm="6" md="4" lg="4" className="mb-5">
                        <Card>
                            <Card.Img variant="top" style={{height: '160px'}} src={barbershop} alt="barber" />
                                <Card.Body>
                                    <Card.Title className="mt-3">Barber Shop Website</Card.Title>
                                    <p>Made with WordPress</p>
                                    <Card.Link href="" className="btn btn-danger">See it Live</Card.Link>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="6" md="4" lg="4" className="mb-5">
                        <Card>
                            <Card.Img variant="top" style={{height: '160px'}} src={onlineebook} alt="barber" />
                                <Card.Body>
                                    <Card.Title className="mt-3">Sell Ebook Online Website</Card.Title>
                                    <p>Made with WordPress</p>
                                    <Card.Link href="" className="btn btn-danger">See it Live</Card.Link>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="6" md="4" lg="4" className="mb-5">
                        <Card>
                            <Card.Img variant="top" style={{height: '160px'}} src={hotbestbuy} alt="barber" />
                                <Card.Body>
                                    <Card.Title className="mt-3">E-commerce Website</Card.Title>
                                    <p>Made with WordPress</p>
                                    <Card.Link href="" className="btn btn-danger">See it Live</Card.Link>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="6" md="4" lg="4" className="mb-5">
                        <Card>
                            <Card.Img variant="top" style={{height: '160px'}} src={premiva} alt="barber" />
                                <Card.Body>
                                    <Card.Title className="mt-3">Corporate Giveaway Website</Card.Title>
                                    <p>Made with WordPress</p>
                                    <Card.Link href="" className="btn btn-danger">See it Live</Card.Link>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="6" md="4" lg="4">
                        <Card>
                            <Card.Img variant="top" style={{height: '160px'}} src={pasinaya} alt="barber" />
                                <Card.Body>
                                    <Card.Title className="mt-3">Real Estate Website</Card.Title>
                                    <p>Made with Weebly</p>
                                    <Card.Link href="" className="btn btn-danger">See it Live</Card.Link>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
          
    </Layout>
)

export default WorkProject