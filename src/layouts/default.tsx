/**
 * Default layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.scss'
import { SiteTitleQuery } from '../../types/graphql-types'

interface LayoutProps {
  location?: Location
  title?: string
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  const { site } = useStaticQuery<SiteTitleQuery>(
    graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
            avatar
          }
        }
      }
    `
  )

  const avatar = site?.siteMetadata?.avatar || ''
  const title = site?.siteMetadata?.title || ''

  return (
    <>
      <Header avatar={avatar} />
      <div id="content">{children}</div>
      <Footer siteTitle={title} />
    </>
  )
}

export default DefaultLayout
