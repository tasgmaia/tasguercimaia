import React from "react"

interface SectionTitleProps {
  SectionName: string
  SectionSubTitle: string
}

function SectionTitle({ SectionName, SectionSubTitle }: SectionTitleProps) {
  return (
    <div>
      <h1 className="mv2 normal f2">{SectionName}</h1>
      <p className="barlow f5 lh-copy">{SectionSubTitle}</p>
    </div>
  )
}

export default SectionTitle
