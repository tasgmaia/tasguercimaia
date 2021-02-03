import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function BigStatement(props) {
  return (
    <div className={props.bgClass}>
      <div className="contentMW pv6 flex items-center">
        <div className="center">
        <label className="mv0 barlow gray-d"> 
          {props.label}
        </label>
        <h2 className="mt0 f2-ns f4 normal pt1 lh-title mw7">
          {props.Statement}
        </h2>
        <div className="flex">
          <p className="f5-ns barlow f3 lh-copy tj mr5 w-25 "> 
            {props.col1}
          </p>
          <p className="f5-ns barlow f3 lh-copy tj mr5 w-25 "> 
            {props.col2}
          </p>
          <p className="f5-ns barlow f3 lh-copy tj w-25 "> 
            {props.col3}
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BigStatement
