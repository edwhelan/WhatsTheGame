import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rgba(14, 74, 13, .9',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        
        <Link
          to="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
            textAlign: 'right'
          }}
        >
          About
        </Link >
    </div>
  </div>
)

export default Header
