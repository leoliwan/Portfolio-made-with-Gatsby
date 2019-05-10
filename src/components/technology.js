import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import reactlogo from '../images/logo.svg'
import styled from 'styled-components'
import gatsbylogo from '../images/gatsby-icon.png'
import netlify from '../images/netlify.png'
import contentful from '../images/contentful.png'

const Technology = () =>(
    <React.Fragment>
        <Container className="py-5">
            <h4 className="text-center display-4 mb-5">Our Technologies</h4>
            <Row>
                <Col md="6" lg="6">
                    <Title>
                        <h1 className="react-title">React JS</h1>
                        <p className="lead">The top Javascript Library for building User Interfaces.</p>
                        <div className="logoWrapper">
                            <img src={reactlogo} className="img-fluid App-logo" style={{width: '200px'}} alt="logo" />
                        </div>
                        <a href="https://reactjs.org/" className="btn btn-react btn-sm mt-3">Learn More About React JS</a>
                    </Title>
                </Col>
                <Col md="6" lg="6" className="text-center">
                <Title>
                    <h1 className="gatsby-title">Gatsby</h1>
                    <p className="lead">Static Site generator for building blazing fast website and apps.</p>
                    <div className="logoWrapper">
                        <img src={gatsbylogo} className="img-fluid App-logo" style={{width: '110px'}} alt="logo" />
                    </div>
                    <a href="https://www.gatsbyjs.org/" className="btn btn-gatsby btn-sm mt-3">Learn More About Gatsby</a>
                    </Title>
                </Col>
            </Row>
            <hr />
            <Row className="mt-3">
                <Col md="6" lg="6">
                    <Title>
                        <h1 className="netlify-title">Netlify</h1>
                        <p className="lead">We use Netlify for website deployment</p>
                        <div className="logoWrapper">
                            <img src={netlify} className="img-fluid App-logo" style={{width: '150px'}} alt="logo" />
                        </div>
                        <a href="https://www.netlify.com/" className="btn btn-netlify btn-sm mt-3">Learn More About Netlify</a>
                    </Title>
                </Col>
                <Col md="6" lg="6" className="text-center">
                <Title>
                    <h1 className="contentful-title">Contentful</h1>
                    <p className="lead">Super amazing headless Content Managment System</p>
                    <div className="logoWrapper">
                        <img src={contentful} className="img-fluid App-logo" style={{width: '110px'}} alt="logo" />
                    </div>
                    <a href="https://www.contentful.com/" className="btn btn-contentful btn-sm mt-3">Learn More About Contentful</a>
                    </Title>
                </Col>
            </Row>
        </Container>
        <small><em>Logos credited to React JS, Gatsby, Contenful and Netlify</em></small>
    </React.Fragment>
)

export default Technology

const Title = styled.div`
    display: flex;
    min-height: 300px;
    width: 100%;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
        font-weight: 300;
        text-transform: uppercase;
    }
    .react-title {
        color: #61DAFB;
    }
    .gatsby-title {
        color: #663399;
    }
    .netlify-title {
        color:#15407A;
    }
    .contentful-title {
        color: #F05751;
    }
    .btn-react {
        background: #61DAFB;
        color: #fff;
    }
    .btn-gatsby {
        background: #663399;
        color: #fff;
    }
    .btn-netlify {
        background: #15407A;
        color: #fff;
    }
    .btn-contentful {
        background: #F05751;
        color: #fff;
    }
`

