import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Footer = () => (
  <div className="pa4 w-100 flex gray-d justify-between flex-column flex-row-ns">
    © 2021 Jonatas Guerci Maia

  <div>
    <a className='ma2 gray-d underline-link' target="_blank" href="mailto: tasgmaia@gmail.com"> tasgmaia@gmail.com </a>
    <a className='ma2 gray-d underline-link' target="_blank" href="https://medium.com/@tasguerci"> Medium </a>
    <a className='ma2 gray-d underline-link' target="_blank" href="https://dribbble.com/tasguerci"> Dribbble </a>
    <a className='ma2 gray-d underline-link' target="_blank" href="https://www.linkedin.com/in/tasguerci/"> Linkedin </a>
    {/* <Link className='ma2 gray-d underline-link' to="/"> Instagram </Link> */}
  </div>
  </div>
)
export default Footer