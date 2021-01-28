import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function Case(props) {
  return <Link href={props.link} className="no-underline base-b underline-link">
    <div className="mb6 caseHolder">
      <div className={props.CaseImage}>  </div>
      <div className="w-third mt4">
        <div className=" mv1 f5 barlow"> {props.company} </div>
        <div className="mv0 f3 lh-copy"> {props.title}</div>
        <div ClassName="mv1 f4 ">{props.cta}</div>
      </div>
    </div>
    </Link>
}

export default Case