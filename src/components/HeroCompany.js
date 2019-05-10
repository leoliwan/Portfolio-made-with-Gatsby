import React from "react"
import styled from 'styled-components'
import { Container, Row } from 'react-bootstrap'
import BubbleText from './bubbleText'

const HeroCompany = () => (
    <HeroCompanyWrapper>
        <Container className="py-5">
            <Row>
                <div className="col-md-12 col-lg-7">
                    <h1>Own A Highly Converting Website For Your Online Business</h1>
                    <p>We build websites that convert and boost your online business. Your website is guaranteed secure, responsive, fast-loading and with elegant design.</p>
                </div>
                <div className="col-md-12 col-lg-5">
                    <VideoWrapper>
                        <iframe src="https://www.youtube.com/embed/DiiDq4jvrzE?controls=0" title="company video"></iframe>
                    </VideoWrapper>
                </div>
            </Row>
        </Container>
        <BubbleText />
    </HeroCompanyWrapper>
)

export default HeroCompany

const HeroCompanyWrapper = styled.div`
    min-height: 250px;
    background-color: #34363C;
    width: 100%;

    h1 {
        color: #fff;
        font-size: 50px;
        font-weight: 400;
        margin-top: 32px;
        margin-bottom: 34px;
    }
    p {
        color: #CACACA;
        font-size: 24px;
    }
`
const VideoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    iframe {
        margin-top: 14px;
        width: 100%;
        height: 350px;
        border: 0;
    }
`
