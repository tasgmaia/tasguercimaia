import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

function Article(props) {
  return <a href={props.link} target="_blank" className="bg-ac1 no-underline base-w">
    <div className="articleLink pa3-ns">
      <div className="pa1 f5 barlow">
      {props.publication}
      </div>
      <div className="f4 pa1 lh-copy">
      {props.title}
      </div>
      <div className="pa1 barlow f6" >read article →</div>
    </div>
    </a>;
}

export default Article