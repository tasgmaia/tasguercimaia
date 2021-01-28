import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function Case(props) {
  // return <Link href={props.link} className="no-underline base-b">
  //   <div className="mb6-ns mb5 caseHolder">
  //     <div className={props.CaseImage}>  </div>
  //     <div className="w-third-ns w-100 ph0-ns ph3 mt4">
  //       <div className=" mv1 f5-ns f6 barlow"> {props.company} </div>
  //       <div className="mv0 f3-ns f4 lh-copy"> {props.title}</div>
  //       <div ClassName="mv1 f4-ns f5 ">{props.cta}</div>
  //     </div>
  //   </div>
  //   </Link>
    return <div className="no-underline base-b">
    <div className="mb6 caseHolder">
      <div className={props.CaseImage}>  </div>
      <div className="w-third-ns w-100 ph0-ns ph3 mt4">
        <div className=" mv1 f5 barlow"> {props.company} </div>
        <div className="mv0 f3 lh-copy"> {props.title}</div>
        <div ClassName="mv1 f3">{props.cta}</div>
      </div>
    </div>
    </div>
}

export default Case