import React from "react"

import "./layout.css"

function Article({link, publication, title}) {
  return (
    <a href={link} target="_blank" className="bg-ac1 no-underline base-w">
    <div className="articleLink pa3-ns">
      <div className="pa1 f5 barlow">
      {publication}
      </div>
      <div className="f4 pa1 lh-copy">
      {title}
      </div>
      <div className="pa1 barlow f6" >read article →</div>
    </div>
    </a>
  )
}

export default Article