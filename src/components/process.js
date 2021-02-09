import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function Process(props) {
  return (
    <div className="bg-ac2 pt0-ns pt6 mw-100">
      <div className="pv6-ns flex justify-center flex-column flex-row-ns flex-column-reverse">
        <label className="barlow gray-d">Process</label>
        <h1 className="base-w f1-ns normal f4 mt0 pt1 lh-title">{props.Step1}</h1>
        <svg
          width="135"
          height="4"
          viewBox="0 0 134 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.0078125"
            y1="0.5"
            x2="133.003"
            y2="0.5"
            stroke="#FAFAFA"
          />
        </svg>
        <h1 className="base-w f1-ns normal f4 mt0 pt1 lh-title">{props.Step2}</h1>
        <svg
          width="135"
          height="1"
          viewBox="0 0 134 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.0078125"
            y1="0.5"
            x2="133.003"
            y2="0.5"
            stroke="#FAFAFA"
          />
        </svg>
        <h1 className="base-w f1-ns normal f4 mt0 pt1 lh-title">{props.Step3}</h1>
        <svg
          width="135"
          height="1"
          viewBox="0 0 134 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.0078125"
            y1="0.5"
            x2="133.003"
            y2="0.5"
            stroke="#FAFAFA"
          />
        </svg>
        <h1 className="base-w f1-ns normal f4 mt0 pt1 lh-title">{props.Step4}</h1>
      </div>
    </div>
  )
}

export default Process
