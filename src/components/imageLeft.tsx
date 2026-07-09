import React from "react"

interface ImageLeftProps {
  featuredImage: string
  label: string
  title: string
  description: string
  label2?: string
  title2?: string
  description2?: string
}

function ImageLeft({
  featuredImage,
  label,
  title,
  description,
  label2 = "",
  title2 = "",
  description2 = ""
}: ImageLeftProps) {
  return (
    <div className="bg-case-stone pt0-ns pt6 mw-100">
      <div className="pv6-ns flex justify-center flex-column flex-row-ns flex-column-reverse">
        <div className={featuredImage}></div>
        <div className="mw6 ma4-ns pa2  w-60-ns mw-100">
          <label className="barlow gray-d">{label}</label>
          <h1 className="f2-ns normal f4 mt0 pt1 lh-title">{title}</h1>
          <p className="f5-ns f6 lh-copy">{description}</p>
          {label2 && <label className="barlow gray-d pt2">{label2}</label>}
          {title2 && <h1 className="f2-ns normal f4 mt0 pt1 lh-title">{title2}</h1>}
          {description2 && <p className="f5-ns f6 lh-copy">{description2}</p>}
        </div>
      </div>
    </div>
  )
}

export default ImageLeft
