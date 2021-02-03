import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profileimage"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="contentMW pt6-ns flex w-100 justify-center flex-row-ns flex-column">
      <div className="profileImage dn-ns db"></div>
      <div className="w-40-ns  lh-copy f4-ns f5 ma0-ns ma3 pr5-ns">
        <h3 className="mt0 normal b gray-e f3-ns f4">About</h3>
        <p className="lh-copy">
          I started my career as a designer after technical school. I worked as
          a design assistant at an advertising agency, and after a while, I
          began my undergrad. Since this time, I have had multiple experiences
          with both graphic and digital design.
        </p>
        <p className="lh-copy">
          During my undergrad, I had the opportunity to spend two years in the
          US as an exchange student. There I could learn much more about digital
          and service design. The knowledge I gathered there help me to build
          systemic thinking and a structured process until these days.
        </p>
        <p className="lh-copy">
          When I got back to Brazil I continued my path in the direction of
          becoming a product designer. I worked on a digital agency that helped
          digital entrepreneurs to build and test concepts. After a while, I
          started to work on more structured companies. I helped to shape
          experiences on two Brazilian unicorns when they were scaling their
          business and products.
        </p>
        <h3 className="mb1 normal mt6-ns mt5 b gray-e f3-ns f4">
          Work experience
        </h3>
        <a className="barlow gray-d f4-ns f6">
          For more information go to my{" "}
          <a
            href="https://www.linkedin.com/in/tasguerci/"
            target="_blank"
            class="underline-link normal gray-e"
          >
            Linkedin
          </a>
          .
        </a>

        <div className="bt bb gray-b mt4 pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6">2012 - 2013</p>
          <p className="ma2 gray-e b f4-ns f5">Latina - Advertising agency</p>
        </div>

        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6">2013 - 2014</p>
          <p className="ma2 gray-e b f4-ns f5">
            eStocks - Reverse logistics Startup
          </p>
        </div>

        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6">2014 - 2015</p>
          <p className="ma2 gray-e b f4-ns f5">SCAD - Exchange student</p>
        </div>

        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6">2016 - 2017</p>
          <p className="ma2 gray-e b f4-ns f5">Rastro - Advertising agency</p>
        </div>

        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6">2017 - 2018</p>
          <p className="ma2 gray-e b f4-ns f5">
            Stone Payments - Acquirer bank
          </p>
        </div>

        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6">2018 - present</p>
          <p className="ma2 gray-e b f4-ns f5">VTEX - Ecommerce platform</p>
        </div>
      </div>
      <div className="profileImage dn db-ns"></div>
    </div>
  </Layout>
)
export default About
