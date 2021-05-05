import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Case from "../components/case"
import ArticleList from "../components/articleList"
import SectionTitle from "../components/sectionTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ margin: `0 auto`, maxWidth: 1400,}}>
    <div
      id="home"
      className="ph5-ns ma3 mt0-ns mt5 pt6 pa5-ns"
    >
      <div>
        <p className="normal pt6-ns gray-e f-subheadline-l lh-title f2">
          Hey, call me Tas. I am a product designer building 
          tech solutions at{" "}
          <a
            href="https://www.globo.com/"
            target="_blank"
            class="underline-link normal ph2 gray-e f-headline-l lh-title f2"
          >
            Globo
          </a>
          .
        </p>
      </div>
    </div>
    <div id="work" className="w-100 mt6 contentMW">
      <Case 
        // interaction
        caseImage="caseStone"
        company="Stone Payments 2017"
        title="Mobile point of sale, reaching strategic markets."
        link="/cases/mPOS.jsx"
        cta="Soon"
        // cta="read article →"
      />
      <Case
          // interaction
        caseImage="caseVTEX"
        company="VTEX ecommerce 2020"
        title="An enhanced and user centric customer service experience"
        link="/about"
        cta="Soon"
        // cta="read article →"
      />
    </div>
    <div id="articles" className="h2"></div>
    <section className="contentMW w-100 bg-ac2 pa5-ns pa3 pv4">
      <div className="flex-ns justify-between">
        <div className="base-w w-40-ns w-100">
          <SectionTitle
            SectionName="Articles"
            SectionSubTitle="Over the years I spent sometime sharing what I've leaned and thoght about design. 
            Here I share the articles that I like most. For more check my medium"
          />
        </div>
        <div className="w-50-ns w-100 mt0-ns mt4 pr2">
          <ArticleList />
        </div>
      </div>
    </section>
    </div>
  </Layout>
)

export default IndexPage
