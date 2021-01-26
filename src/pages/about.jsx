import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profileimage"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="flex w-100 justify-center flex-row-ns flex-column">
    <div className="profileImageMobile dn-ns db"></div>
      <div className="w-40-ns  f3-ns f5 ma0-ns ma3 lh-copy pr5-ns">
        <p>
          I started my career as a designer after technical school.
          Subsequently, I worked as a design assistant at an advertising agency,
          and then I began my undergrad. Since this time, I have had multiple
          experiences with graphic and digital design.
        </p>
        <p>
          I also spent some time in the US, studying Service Design. When I get
          back to Brazil I worked for small startups and two Brazilian unicorns,
          Stone payments, listed in Nasdaq, and VTEX, the biggest e-commerce
          platform in LATAM.
        </p>
        <p>
          I also spent some time in the US, studying Service Design. When I get
          back to Brazil I worked for small startups and two Brazilian unicorns,
          Stone payments, listed in Nasdaq, and VTEX, the biggest e-commerce
          platform in LATAM.
        </p>
        <h3 className="mb1 normal mt5 b gray-e f3-ns f4">
        Work experience
        </h3>
        <a className="barlow gray-d f4-ns f6">
        View my resumé or check my Linkedin
        </a>
      

        <div className="bt bb gray-b mt4 pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6"> 
            2012 - 2013
          </p>
          <p className="ma2 gray-e b f4-ns f5">
            Latina - Adverteising agency
          </p>
        </div>


        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6"> 
            2013 - 2014
          </p>
          <p className="ma2 gray-e b f4-ns f5">
          eStocks - Reverse logistics Startup
          </p>
        </div>

        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6"> 
            2014 - 2015
          </p>
          <p className="ma2 gray-e b f4-ns f5">
            SCAD - Internship
          </p>
        </div>

        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6"> 
            2016 - 2017
          </p>
          <p className="ma2 gray-e b f4-ns f5">
            Rastro - Adverteising agency
          </p>
        </div>

        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6"> 
            2017 - 2018
          </p>
          <p className="ma2 gray-e b f4-ns f5">
            Stone Payments - Acquirer bank
          </p>
        </div>

        <div className="bb gray-b pt2 pb2">
          <p className="barlow-m ma2 gray-c f5-ns f6"> 
            2018 - present
          </p>
          <p className="ma2 gray-e b f4-ns f5">
            VTEX - Ecommerce platform
          </p>
        </div>
        
    
      </div>
      <div className="profileImage dn db-ns"></div>
    </div>
  </Layout>
)
export default About