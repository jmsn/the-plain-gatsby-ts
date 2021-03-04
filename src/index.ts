export interface SiteMetadata {
  title: string
  description: string
  author: string
  avatar: string
  siteUrl: string
}

export interface Edge {
  node: {
    id: string
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
    }
  }
}

export interface PageQuery {
  site: {
    siteMetadata: SiteMetadata
  }
  allMarkdownRemark: {
    edges: Edge[]
  }
}
