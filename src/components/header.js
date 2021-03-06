import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo.js"
import "./layout.css"
import "./tachyons.css"

const Header = ({ siteTitle }) => (
  <header
  className='fade z-1 pa2 pt3 ph4-ns pt4-ns fixed-ns absolute  w-100'
  >
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500&family=Nanum+Myeongjo&display=swap"
      rel="stylesheet"
    />
    <div
      className='flex justify-between header-m-d'
      style={{
        margin: `0 auto`,
        maxWidth: 1550,
      }}
    >
      <Link to="/">
        <Logo/>
      </Link>
      <div style={{ margin: 0 }} className="flex flex-column">
        <Link className='ph1 mh2-ns f4-ns f5 base-b underline-link' to="/"> Home </Link>
        <Link className='ph1 mh2-ns f4-ns f5 base-b underline-link' to="/about"> About </Link>
        <Link className='ph1 mh2-ns f4-ns f5 base-b underline-link' to="/#articles"> Articles </Link>
        {/* <Link className='mh2-ns f4-ns f5 base-b underline-link' to="/"> Contact </Link>
        <Link className='mh2-ns f4-ns f5 base-b underline-link' to="/"> Process </Link>
        <Link className='mh2-ns f4-ns f5 base-b underline-link' to="/"> Work </Link> */}
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
