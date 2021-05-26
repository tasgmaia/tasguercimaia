import React from "react"

function Experience({date, company}) {
  return (
    <div className="bb gray-b pt2 pb2">
        <p className="barlow-m mv2 gray-c f5-ns f6">{date}</p>
        <p className="mv2 gray-e b f4-ns f5">{company}</p>
    </div>
  )
}

export default Experience