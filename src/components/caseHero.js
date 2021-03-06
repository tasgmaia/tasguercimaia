import React from "react"

function CaseHero(props) {
  return (
    <div className={props.heroBG}>
      <div className="pt0-ns pt6 mw-100">
        <div className="pv6-ns flex justify-center items-center flex-column flex-row-ns flex-column-reverse">
          <div className="mw6 ma4-ns pa3  w-60-ns mw-100">
            <label className="barlow gray-d">{props.label}</label>
            <h1 className="f2-ns f4 mt0 pt1 lh-title">{props.title}</h1>
            <p className="f5-ns f6 lh-copy">{props.description}</p>
          </div>
          <div className={props.heroImage}></div>
        </div>
      </div>
    </div>
  )
}

export default CaseHero
