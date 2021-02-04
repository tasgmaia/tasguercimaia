import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import CaseHero from "../components/caseHero"
import BigStatement from "../components/bigStatement"

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
    <BigStatement
      label="Overview"
      Statement="Brazil has around 45 million people,  without any bank account or any access to financial services producing 817bi reais."
      col1="In Brazil millions of people, in the working-age, are lacking a formal work position. Therefore they are either dragged into the informal market or become entrepreneurs by necessity.  In this scenario, many companies started to look at these people and began to develop accessible financial services for them. By the time some solutions began to emerge, Stone Co. saw a great opportunity to act."
      col2="The main business advantage, compared to our competitors, was that we had an operation based on personal relationships in small and medium cities. And we designed a singular solution that hadn't predecessor in the Brazilian market."
      bgClass="stone-leaf"
   />
   
  </Layout>
)

export default mPOS
