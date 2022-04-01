import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="contentMW pt6-l flex w-100 justify-center flex-row-l flex-column">
      <div className="profileImage dn-l db"></div>
      <section className="w-40-l mw6 lh-copy f4-l f5 ma0-l ma3 pr5-l">
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

        <div className="bb gray-b pb3">
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
        
        </div>
        <a className="flex flex-column-reverse" >
          <Experience
          date="2012 - 2013"
          company="Latina - Advertising agency"
          />
          <Experience
          date="2013 - 2014"
          company="eStocks - Reverse logistics Startup"
          />
          <Experience
          date="2014 - 2015"
          company="SCAD - Exchange student"
          />
          <Experience
          date="2016 - 2017"
          company="Rastro - Advertising agency"
          />
          <Experience
          date="2017 - 2018"
          company="Stone Payments - Acquirer bank"
          />
          <Experience
          date="2018 - 2021"
          company="VTEX - Ecommerce platform"
          />
          <Experience
          date="2021 - present"
          company="Globo - Mediatech"
          />
        </a>
        
      </section>
      <div className="profileImage dn dn-m db-ns"></div>
    </div>
  </Layout>
)
export default About
