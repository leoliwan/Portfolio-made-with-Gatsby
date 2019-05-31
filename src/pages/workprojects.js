import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import jamvacc from '../images/jamvacc.png'
import eyabooks from '../images/eyabooks.png'
import splitscreen from '../images/split-screen.png'
import ebookoptin from '../images/ebook-optin.png'
import barbershop from '../images/gruppo_mockup.png'
import onlineebook from '../images/avila.com.png'
import hotbestbuy from '../images/hotbestbuy.png'
import pasinaya from '../images/pasinaya.png'
import pandacare from '../images/pandacare.png'
import premiva from '../images/premiva homepage.png' 
import BubbleText from '../components/bubbleText';

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
                                <Card.Img variant="top" src={jamvacc} />
                                <Card.Body>
                                    <Card.Title>English Center Company Website</Card.Title>
                                    <div className="badges">
                                        <Badge variant="success">React JS</Badge>
                                        <Badge variant="danger">Gatsby</Badge>
                                        <Badge variant="secondary">Bootstrap4</Badge>
                                        <Badge variant="secondary">HTML/CSS</Badge>
                                    </div>
                                    <Card.Link className="btn btn-info" href="https://jam-vaccenglish.com/">View Live</Card.Link>
                                </Card.Body>
                            </Card> 
                        </Col>
                        <Col sm="6" md="4" lg="3" className="mb-3">
                           <Card style={{height: '22rem'}}>
                                <Card.Img variant="top" src={eyabooks} />
                                <Card.Body>
                                    <Card.Title>Website for selling ebook</Card.Title>
                                    <div className="badges">
                                        <Badge variant="success">React JS</Badge>
                                        <Badge variant="danger">Gatsby</Badge>
                                        <Badge variant="secondary">Bootstrap4</Badge>
                                        <Badge variant="secondary">HTML/CSS</Badge>
                                    </div>
                                    <Card.Link className="btn btn-info" href="https://eya-ecommerce.com/">View Live</Card.Link>
                                </Card.Body>
                            </Card> 
                        </Col>
                        <Col sm="6" md="4" lg="3" className="mb-3">
                           <Card style={{height: '22rem'}}>
                                <Card.Img variant="top" src={splitscreen} />
                                <Card.Body>
                                    <Card.Title>Split Screen Landing Page</Card.Title>
                                    <div className="badges">
                                        <Badge variant="warning">Vanilla Javscript</Badge>
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
                                        <Badge variant="warning">Vanilla Javscript</Badge>
                                        <Badge variant="secondary">Bootstrap4</Badge>
                                        <Badge variant="secondary">HTML/CSS</Badge>
                                    </div>
                                    <Card.Link className="btn btn-info" href="https://leoliwan.github.io/ebook-simple-optin/">View Sample</Card.Link>
                                </Card.Body>
                            </Card> 
                        </Col>
                        <Col sm="6" md="4" lg="3" className="mb-3">
                           <Card style={{height: '22rem'}}>
                                <Card.Img variant="top" src={pandacare} />
                                <Card.Body>
                                    <Card.Title>Drop Shipping Website</Card.Title>
                                    <div className="badges">
                                        <Badge variant="warning">WordPress + WooCommerce</Badge>
                                        <Badge variant="secondary">Elementor Page Builder</Badge>
                                        <Badge variant="success">Ocean WP</Badge>
                                    </div>
                                    <Card.Link className="btn btn-info" href="https://pandacare.store/">View Sample</Card.Link>
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
                                    <Card.Title className="mt-3">Website for selling ebook</Card.Title>
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
            <BubbleText />
          
    </Layout>
)

export default WorkProject