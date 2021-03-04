/**
 * Default layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { FC } from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/styles.scss"

interface LayoutProps {
  location?: Location
  title?: string
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            avatar
          }
        }
      }
    `}
    render={data => (
      <>
        <Header avatar={data.site.siteMetadata.avatar} />
        <div id="content">{children}</div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

export default DefaultLayout
