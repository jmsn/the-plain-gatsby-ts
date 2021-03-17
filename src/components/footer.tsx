import React, { FC } from "react"

interface FooterProps {
  siteTitle?: string
}

const Footer: FC<FooterProps> = ({ siteTitle = "" }) => (
  <div className="footer">
    <span className="block">
      &copy; {new Date().getFullYear()} {siteTitle}
    </span>
    <span className="block">
      <small>
        {` </>`} Powered by {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and{` `}
        <a href="https://github.com/jmsn/the-plain-gatsby-ts">
          The Plain Gatsby starter
        </a>
      </small>
    </span>
  </div>
)

export default Footer
