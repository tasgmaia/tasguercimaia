import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
     <div className="ma4-ns pa5-ns flex w-80-l flex-column flex-row-ns ph4 mt4">
      <div className="mb3">
        <svg
          width="50"
          height="50"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.6974 66.955C5.33062 60.2315 0.74154 50.954 0.0609378 39.379C-0.519902 29.5512 3.06712 20.0501 10.1547 12.6185C17.8076 4.59929 28.5953 0 39.7509 0C61.6388 0 79.4454 17.608 79.4454 39.2518C79.4454 49.4501 75.4837 59.1244 68.2919 66.4925L76.6542 74.7616C77.2461 75.3469 77.4545 76.2106 77.1907 76.9976C76.9291 77.7824 76.2419 78.3568 75.4127 78.4796C74.7654 78.5738 68.3163 79.488 59.4285 79.488C45.8764 79.488 26.6532 77.3615 13.6974 66.955Z"
            fill="#1C57F3"
          />
        </svg>
      </div>
      <div className=" ph4-ns">
        <p>
          Hey, call me Tas. I am a designer transforming the commerce industry
          at{' '}
          <a href="https://vtex.com/us-en/" target="_blank" class="link">
            VTEX
          </a>
          .
        </p>
        <div>
          <p>
            I started my career as a designer after technical school.
            Subsequently, I worked as a design assistant at an advertising
            agency, and then I began my undergrad. Since this time, I have had
            multiple experiences with graphic and digital design.
          </p>
          <p>
            I also spent some time in the US, studying &nbsp;Service Design.
            When I get back to Brazil I worked for small startups and two
            Brazilian unicorns,{' '}
            <a href="https://www.stone.com.br/" target="_blank" className="link">
              Stone
            </a>{' '}
            payments, listed in Nasdaq, and VTEX, the biggest e-commerce
            platform in LATAM. &nbsp;
          </p>
          <p>
            Find me on{' '}
            <a
              href="https://medium.com/@tasguerci"
              target="_blank"
              className="link"
            >
              Medium
            </a>
            ,{' '}
            <a
              href="https://www.linkedin.com/in/tasguerci/"
              target="_blank"
              className="link"
            >
              Linkedin
            </a>{' '}
            or{' '}
            <a
              href="https://dribbble.com/tasguerci"
              target="_blank"
              className="link"
            > Dribble</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
