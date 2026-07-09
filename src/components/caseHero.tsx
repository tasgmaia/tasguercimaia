import React from "react"

interface CaseHeroProps {
  heroBG: string
  label: string
  title: string
  description: string
  heroImage: string
}

function CaseHero({ heroBG, label, title, description, heroImage }: CaseHeroProps) {
  return (
    <div className={heroBG}>
      <div className="pt0-ns pt6 mw-100">
        <div className="pv6-ns flex justify-center items-center flex-column flex-row-ns flex-column-reverse">
          <div className="mw6 ma4-ns pa3  w-60-ns mw-100">
            <label className="barlow gray-d">{label}</label>
            <h1 className="f2-ns f4 mt0 pt1 lh-title">{title}</h1>
            <p className="f5-ns f6 lh-copy">{description}</p>
          </div>
          <div className={heroImage}></div>
        </div>
      </div>
    </div>
  )
}

export default CaseHero
