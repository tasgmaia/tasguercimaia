import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/profileimage"
import SEO from "../components/seo"
import Article from "../components/article"

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
    <div className='w-100 bg-ac2 pa5'>
      <div className="flex justify-between">
        <div className="base-w w-40">
          <h1 className="mt2 f2">Articles</h1>
          <p className="barlow f4 lh-copy">Over the years I spent sometime sharing what I've leaned and thoght about design. 
            Here I share the articles that I like most. For more check my medium
          </p>
        </div>
        <div className="w-40">
        <div>
            <Article 
              publication="UX Collective  🇧🇷" 
              title="An information architecture methodology, organizing and making sense of things"
              link="https://uxplanet.org/easily-calculate-sus-score-a464d753e5aa"
            />
          </div>
          <div className="mt4">
            <Article 
              publication="UX Collective  🇧🇷" 
              title="An information architecture methodology, organizing and making sense of things"
              link="https://uxplanet.org/easily-calculate-sus-score-a464d753e5aa"
            />
          </div>
          
        </div>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
