import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Footer from './footer'


import '../layouts/tachyons/css/tachyons.css'
import '../layouts/custom.css'

// import './tachyons/css/tachyons.css'
// import './custom.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'Jarret Bryan', content: 'Portfolio Site' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="bg-black">
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)