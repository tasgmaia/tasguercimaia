import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/profileimage"
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

    {/* HERO BEGINING*/}
    <div className="ph5-ns ma3 mt0-ns mt5 pt6 pa5-ns">
      <div >
        <p className="normal gray-e f-subheadline-l lh-title f2">
          Hey, call me Tas. I am a designer transforming the commerce industry
          at{" "}
          <a href="https://vtex.com/us-en/" target="_blank" class="underline-link normal gray-e f-headline-l lh-title f2" >VTEX</a>.
        </p>
      </div>
    </div>
    {/* HERO END*/}
    {/* <div className='w-100 vh-100 bg-blue'>

    </div> */}
    
  </Layout>
)

export default IndexPage
