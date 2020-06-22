import React from "react"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import HomeHero from "../components/homePage/HomeHero"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <HomeHero />
    </Layout>
)

export default IndexPage
