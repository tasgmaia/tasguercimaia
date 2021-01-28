import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function Article(props) {
  return <div className="base-w">
    <div className="pa1 f5 barlow">
    {props.publication}
    </div>
    <div className="f4 pa1 lh-copy">
    {props.title}
    </div>
    <a href={props.link} target="_blank" className="underline-link-inverted pa1 barlow no-underline base-w f6" >read article →</a>
    </div>;
}

export default Article