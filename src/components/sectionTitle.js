import React from "react"

// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function SectionTitle(props) {
  return <div>
    <h1 className="mv2 normal f2">{props.SectionName}</h1>
    <p className="barlow f5 lh-copy">{props.SectionSubTitle}</p>
  </div>
}

export default SectionTitle