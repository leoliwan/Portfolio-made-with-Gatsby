/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
         
            <footer className="main-footer text-center">
            <p>LeviWebSolution &copy; Copyright {new Date().getFullYear()}</p>  
               Built with <a href="https://reactjs.org/">ReactJS</a> and Powered By
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
