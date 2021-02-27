import React from "react"
import "./layout.css"

function BigStatement({bgClass, label, statement, col1, col2, col3}) {
  return (
    <div className={bgClass}>
      <div className="contentMW pv6 flex items-center">
        <div className="center pa4-ns">
        <label className="mv0 barlow gray-d mh0-ns mh3"> 
          {label}
        </label>
        <h2 className="mt0 f2-ns f4 normal pt1 lh-title mh0-ns mh3 mw7">
          {statement}
        </h2>
        <div className="flex-ns">
          <p className="f5-ns barlow f6 lh-copy tj mr4-ns mr3 ml0-ns ml3 w-third-ns "> 
            {col1}
          </p>
          <p className="f5-ns barlow f6 lh-copy tj mr4-ns mr3 ml0-ns ml3 w-third-ns "> 
            {col2}
          </p>
          <p className="f5-ns barlow f6 lh-copy tj mr4-ns mr3 ml0-ns ml3 w-third-ns "> 
            {col3}
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BigStatement
