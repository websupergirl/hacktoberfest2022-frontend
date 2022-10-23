import React from "react"
import { graphql } from "gatsby"
import BlogLayout from "../components/blog-layout"
import WpSEO from "../components/wp/seo"

import "../styles/normalize.css"
import "../styles/style.css"

export default function Blog({ data }) {
  return (
    <BlogLayout>
      <WpSEO title="blog" />
      <h2>My WordPress Blog</h2>
      {data.allWpPost.nodes.map(node => (
        <div>
          <h3>{node.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <p>Read more</p>
        </div>
      ))}
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        title
        excerpt
        slug
        date
      }
    }
  }
`