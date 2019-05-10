import React from "react"
import Layout from "../components/layout"
// import Hero from "../components/hero"
import HeroCompany from '../components/HeroCompany'
import SEO from "../components/seo"
import OnlineServices from '../components/onlineServices'
import Testimonials from '../components/testimony'
import Technology from '../components/technology'
import Team from '../components/team'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroCompany />
    <OnlineServices />
    <Testimonials />
    <Technology />
    <Team />
  </Layout>
)

export default IndexPage
