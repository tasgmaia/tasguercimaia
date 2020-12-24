import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    // style={{
    //   background: `rebeccapurple`,
    //   marginBottom: `1.45rem`,
    // }}
  >
    <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
          />
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Nanum+Myeongjo&display=swap');
          </style>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
