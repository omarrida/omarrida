import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import BlogSectionHeader from "../components/blog-section-header"
import BlogPost from "../components/blog-post"

const IndexPage = () => (
  <Layout>
    {/*Meta*/}
    <SEO
      title="Omar Rida"
      description="Senior software engineer and startup founder. Currently based in NYC and building solutions for private real estate funds."
    />

    {/*Personal Info*/}
    <Bio />

    {/*Blog*/}
    <BlogSectionHeader/>
    <BlogPost title="How we cut test suite execution time to 1/3 in a day."
              description="How to run your PHP tests in parallel using Paratest and PHPUnit."
              medium="https://medium.com/realblocks-blog/parallel-testing-for-laravel-how-we-cut-test-suite-execution-time-to-1-3-in-one-day-544e458f48ad"
    />
    <BlogPost title="Refactoring integrations to standalone (open-source) SDKs."
              description="Reduce clutter by extracting integration code out of your app."
              medium="https://medium.com/realblocks-blog/parallel-testing-for-laravel-how-we-cut-test-suite-execution-time-to-1-3-in-one-day-544e458f48ad"
    />

  </Layout>
)

export default IndexPage
