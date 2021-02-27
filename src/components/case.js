import React from "react"
import { Link } from "gatsby"

function Case({interaction, caseImage, company, title, cta, link}) {
  const int = interaction;
  if (int) {
    return (
    <Link href={link} className="no-underline base-b">
    <div className="mb6-ns mb5 caseHolder">
      <div className={caseImage}>  </div>
      <div className="w-third-ns w-100 ph0-ns ph3 mt4">
        <div className=" mv1 f5-ns f6 barlow"> {company} </div>
        <div className="mv0 f3-ns f4 lh-copy"> {title}</div>
        <div ClassName="mv1 f4-ns f5 ">{cta}</div>
      </div>
    </div>
    </Link>
    )
  } else {
    return (
    <div className="no-underline base-b">
    <div className="mb6 caseHolder">
      <div className={caseImage}>  </div>
      <div className="w-third-ns w-100 ph0-ns ph3 mt4">
        <div className=" mv1 f5 barlow"> {company} </div>
        <div className="mv0 f3 lh-copy"> {title}</div>
        <div ClassName="mv1 f3">{cta}</div>
      </div>
    </div>
    </div>
    )
   }
}

export default Case