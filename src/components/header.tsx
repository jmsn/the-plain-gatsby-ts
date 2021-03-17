import { Link } from 'gatsby'
import React, { FC } from 'react'
import { Location } from '@reach/router'

interface HeaderProps {
  avatar?: string
}

const Header: FC<HeaderProps> = ({ avatar = '' }) => (
  <header className="logo">
    <Location>
      {({ location }) => {
        return location.pathname == '/' ? (
          <div>
            <Link to="/about/">
              <img src={avatar} className="logo-avatar" />
            </Link>
            <span className="logo-prompt code">About the Author</span>
          </div>
        ) : (
          <div>
            <Link to="/">
              <img src={avatar} className="logo-avatar" />
            </Link>
            <span className="logo-prompt code">Back Home</span>
          </div>
        )
      }}
    </Location>
  </header>
)

export default Header
