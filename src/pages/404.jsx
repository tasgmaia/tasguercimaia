import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="pt6 mt4 min-vh-100 flex flex-column items-center">
      <svg width="400" height="400" viewBox="0 0 586 586" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="586" height="586">
          <circle cx="293" cy="293" r="293" fill="#E9F0F4" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="293" cy="293" r="293" fill="#E9F0F4" />
        </g>
        <path d="M360.107 356.331L483.865 171.391V356.331H360.107Z" fill="#000368" />
        <path d="M78 356L202 171V356H78Z" fill="#000368" />
        <rect x="454.662" y="356.331" width="29.2012" height="48.6686" fill="#6D6D6D" />
        <rect x="173" y="356" width="29" height="49" fill="#6D6D6D" />
        <circle cx="287.799" cy="229.793" r="58.4024" fill="#6D6D6D" />
        <circle opacity="0.7" cx="287.799" cy="346.598" r="58.4024" fill="#484848" />
        <rect opacity="0.8" x="229.396" y="229.793" width="116.805" height="116.805" fill="#0007DD" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M288 200C304.016 200 317 212.984 317 229V348V350H316.932C315.905 365.083 303.344 377 288 377C272.656 377 260.095 365.083 259.068 350H259V348V229C259 212.984 271.984 200 288 200Z" fill="#E9F0F4" />
      </svg>
      <p className="mb0 barlow mt4 f4">Not all those who wander are lost.  </p>
      <p className="ma0 barlow f4">Get back to <Link className="mt0 ph1 gray-d underline-link" to="/">Home</Link> and keep wandering</p>

    </div>
  </Layout>
)

export default NotFoundPage
