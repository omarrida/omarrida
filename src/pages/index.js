import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import BlogSectionHeader from "../components/blog-section-header"
import BlogPost from "../components/blog-post"

const IndexPage = () => (
  <Layout>
    {/*Meta*/}
    <SEO title="Omar Rida - In love with software and startups." />

    {/*Personal Info*/}
    <Bio />

    {/*Blog*/}
    <BlogSectionHeader/>
    <BlogPost title="How we told Said to test suite execution time to 1/3 in a day."
              description="How to run your PHP tests in parallel using Paratest and PHPUnit."/>
    <BlogPost title="Refactoring integrations to standalone (open-source) SDKs."
              description="Reduce clutter by extracting integration code out of your app."/>

  </Layout>
)

export default IndexPage
