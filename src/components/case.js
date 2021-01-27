import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function Case(props) {
  return <Link href={props.link} className="">
    <div className={props.CaseImage}>  </div>
    <div className="pa1 f5 barlow"> {props.company} </div>
    <div className="f4 pa1 lh-copy"> {props.title}</div>
    <div>read article →</div>
    </Link>
}

export default Case