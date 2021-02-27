import React from "react"

function SectionTitle(props) {
  return <div>
    <h1 className="mv2 normal f2">{props.SectionName}</h1>
    <p className="barlow f5 lh-copy">{props.SectionSubTitle}</p>
  </div>
}

export default SectionTitle