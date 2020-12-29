import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo.js"

const Header = ({ siteTitle }) => (
  <header
  // style={{
  //   background: `rebeccapurple`,
  //   marginBottom: `1.45rem`,
  // }}
  >
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
    />

    <div
      className='flex justify-between'
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Logo/>
      <div style={{ margin: 0 }}>
        <Link className='ph2 f5' to="/"> Home </Link>
        <Link className='ph2 f5' to="/"> About </Link>
        <Link className='ph2 f5' to="/"> Work </Link>
        <Link className='ph2 f5' to="/"> Process </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
