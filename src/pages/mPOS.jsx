import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import CaseHero from "../components/caseHero"

const mPOS = () => (
  <Layout>
    <SEO title="Stone Payments" />
    <CaseHero
      heroBG="mPOS-bg"
      label="Stone Payments 2018"
      title="Reaching strategic markets with a new mPOS"
      description="Stone was the fifth Brazilian unicorn and the first independent
      Acquirer Bank to operate in Brazil. By the time we built this project,
      there was a huge market with only one competitor. There was a need to
      design a product concerning this growing and unexplored market."
    />
    
  </Layout>
)

export default mPOS
