import React from "react"

interface ArticleProps {
  link: string
  publication: string
  title: string
}

function Article({ link, publication, title }: ArticleProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="bg-ac1 no-underline base-w">
      <div className="articleLink pa3-ns">
        <div className="pa1 f5 barlow">
          {publication}
        </div>
        <div className="f4 pa1 lh-copy">
          {title}
        </div>
        <div className="pa1 barlow f6">read article →</div>
      </div>
    </a>
  )
}

export default Article
