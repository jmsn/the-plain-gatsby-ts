import React, { FC } from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import DefaultLayout from '../layouts/default'
import SEO from '../components/seo'
import { groupBy, getDateYear } from '../utils'
import { IndexQuery, MarkdownRemarkEdge } from '../../types/graphql-types'

type IndexProps = PageProps<IndexQuery>

const IndexPage: FC<IndexProps> = ({ data }) => {
  // all posts without dates are assumed to be drafts or pages
  // not to be added to postsList
  const posts = data.allMarkdownRemark.edges.filter(
    (p) => p?.node?.frontmatter?.date != null
  )

  const postsListContainer = groupBy(posts, getDateYear)
    .map(({ year, posts }: any, i: number) => (
      <div key={i}>
        <h4 className="code">{year}</h4>
        {postsList(posts)}
      </div>
    ))
    .reverse()

  return (
    <DefaultLayout>
      <SEO title="Home" />
      <section>
        <ul>{postsListContainer}</ul>
      </section>
    </DefaultLayout>
  )
}

function postsList(posts: MarkdownRemarkEdge[]): JSX.Element[] {
  return posts.map((post) => (
    <li key={post.node.id}>
      <div className="post-date code">
        <small>{post?.node?.frontmatter?.date}</small>
      </div>
      <div className="title">
        <Link to={post?.node?.fields?.slug || ''}>
          {post?.node?.frontmatter?.title || ''}
        </Link>
      </div>
    </li>
  ))
}

export default IndexPage

export const pageQuery = graphql`
  query Index {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YY")
            title
          }
        }
      }
    }
  }
`
