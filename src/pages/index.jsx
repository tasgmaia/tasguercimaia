import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/profileimage"
import SEO from "../components/seo"
import Article from "../components/article"
import Case from "../components/case"
import ArticleList from "../components/articleList"
import SectionTitle from "../components/sectionTitle"

const IndexPage = () => (
  <Layout>
    <SEO title="Tas Guerci Maia" />
    <div style={{ margin: `0 auto`, maxWidth: 1400,}}>
    {/* HERO BEGINING*/}
    <div
      id="home"
      className="ph5-ns ma3 mt0-ns mt5 pt6 pa5-ns"
    >
      <div>
        <p className="normal pt6-ns gray-e f-subheadline-l lh-title f2">
          Hey, call me Tas. I am a product designer transforming the retail
          industry at{" "}
          <a
            href="https://vtex.com/us-en/"
            target="_blank"
            class="underline-link normal ph2 gray-e f-headline-l lh-title f2"
          >
            VTEX
          </a>
          .
        </p>
      </div>
    </div>
    {/* HERO END*/}
    {/* CASES BEGINING*/}
    <div id="work" className="w-100 mt6 contentMW">
      <Case
        CaseImage="caseStone"
        company="Stone Payments 2017"
        title="Mobile point of sale, reaching strategic markets."
        link="/cases/mPOS.jsx"
        cta="Soon"
        // cta="read article →"
      />
      <Case
        CaseImage="caseVTEX"
        company="VTEX ecommerce 2020"
        title="An enhanced and user centric customer service experience"
        link="/about"
        cta="Soon"
      />
    </div>
    {/* CASES END*/}
    {/* ARTICLES BEGINING*/}
    <div id="articles" className="h2"></div>
    <div className="contentMW w-100 bg-ac2 pa5-ns pa3 pv4">
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
    </div>
    {/* ARTICLES END*/}
    </div>
  </Layout>
)

export default IndexPage
