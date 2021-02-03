import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function CaseHero(props) {
  // return <div className="no-underline base-b">
  // <div className="mb6 caseHolder">
  //   <div className={props.CaseImage}>  </div>
  //   <div className="w-third-ns w-100 ph0-ns ph3 mt4">
  //     <div className=" mv1 f5 barlow"> {props.company} </div>
  //     <div className="mv0 f3 lh-copy"> {props.title}</div>
  //     <div ClassName="mv1 f3">{props.cta}</div>
  //   </div>
  // </div>
  // </div>

  return (
    <div className="pt0-ns pt6 mw-100 bg-stone ">
      <div className="pv6-ns flex justify-center items-center flex-column flex-row-ns flex-column-reverse">
        <div className="mw6 ma4-ns pa3  w-60-ns mw-100">
          <label className="barlow gray-d">{props.label}</label>
          <h1 className="f2-ns f4 mt0 pt1 lh-title">{props.title}</h1>
          <p className="f5-ns f6 lh-copy">{props.description}</p>
        </div>
        <div className={props.heroBG}></div>
      </div>
    </div>
  )
}

export default CaseHero
