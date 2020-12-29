import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo.js"

const Header = ({ siteTitle }) => (
  <header
  className='pa2 pt4 ph4-ns pt4-ns fixed-ns w-100'
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
        maxWidth: 2000,
      }}
    >
      <Link to="/">
        <Logo/>
      </Link>
      <div style={{ margin: 0 }} className="flex flex-column">
        <Link className='mh2-ns f4-ns f5 base-b underline-link' to="/"> Home </Link>
        <Link className='mh2-ns f4-ns f5 base-b underline-link' to="/"> About </Link>
        <Link className='mh2-ns f4-ns f5 base-b underline-link' to="/"> Work </Link>
        <Link className='mh2-ns f4-ns f5 base-b underline-link' to="/"> Process </Link>
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
