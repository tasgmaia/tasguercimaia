import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function Article(props) {
  return <div className="base-w w-100">
    <div className="barlow">
    {props.publication}
    </div>
    <div className="f3 lh-copy">
    {props.title}
    </div>
    <a href={props.link} className="underline-link-inverted barlow no-underline base-w" >read article →</a>
    </div>;
}

export default Article