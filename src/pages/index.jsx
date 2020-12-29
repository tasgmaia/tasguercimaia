import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Tas Guerci Maia" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image - changed to logo />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
     <div>
      <div className=" pa5-ns h-100
">
        <p className="f-subheadline lh-title normal base-b">
          Hey, call me Tas. I am a designer transforming the commerce industry
          at{' '}
          <a href="https://vtex.com/us-en/" target="_blank" class="gray-c link normal f-headline lh-title">
            VTEX
          </a>
          .
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
