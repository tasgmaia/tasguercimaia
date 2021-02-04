import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function BigStatement(props) {
  return (
    <div className={props.bgClass}>
      <div className="contentMW pv6 flex items-center">
        <div className="center pa4-ns">
        <label className="mv0 barlow gray-d mh0-ns mh3"> 
          {props.label}
        </label>
        <h2 className="mt0 f2-ns f4 normal pt1 lh-title mh0-ns mh3 mw7">
          {props.Statement}
        </h2>
        <div className="flex-ns">
          <p className="f5-ns barlow f6 lh-copy tj mr4-ns mr3 ml0-ns ml3 w-third-ns "> 
            {props.col1}
          </p>
          <p className="f5-ns barlow f6 lh-copy tj mr4-ns mr3 ml0-ns ml3 w-third-ns "> 
            {props.col2}
          </p>
          <p className="f5-ns barlow f6 lh-copy tj mr4-ns mr3 ml0-ns ml3 w-third-ns "> 
            {props.col3}
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BigStatement
