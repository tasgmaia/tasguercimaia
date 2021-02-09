import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function ImageLeft(props) {
  return (
    <div className="bg-case-stone pt0-ns pt6 mw-100">
      <div className="pv6-ns flex justify-center flex-column flex-row-ns flex-column-reverse">
      <div className={props.featuredImage}></div>
        <div className="mw6 ma4-ns pa2  w-60-ns mw-100">
          <label className="barlow gray-d">{props.label}</label>
          <h1 className="f2-ns normal f4 mt0 pt1 lh-title">{props.title}</h1>
          <p className="f5-ns f6 lh-copy">{props.description}</p>
          <label className="barlow gray-d pt2">{props.label2}</label>
          <h1 className="f2-ns normal f4 mt0 pt1 lh-title">{props.title2}</h1>
          <p className="f5-ns f6 lh-copy">{props.description2}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageLeft