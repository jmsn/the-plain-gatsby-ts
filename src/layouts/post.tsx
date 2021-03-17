import React, { FC } from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import DefaultLayout from './default';
import SEO from '../components/seo';
import { MarkdownRemark, PostQuery } from '../../types/graphql-types';

type PostContext = { prev?: MarkdownRemark; next?: MarkdownRemark };
type PostProps = PageProps<PostQuery, PostContext>;

const PostTemplate: FC<PostProps> = ({
  data: { markdownRemark },
  pageContext,
}) => {
  const frontmatter = markdownRemark?.frontmatter;
  const title = frontmatter?.title || '';
  const date = frontmatter?.date || '';
  const html = markdownRemark?.html || '';
  const { next, prev } = pageContext;

  return (
    <DefaultLayout>
      <SEO title={title} />
      <article>
        <div className="center">
          <h1 className="title">{title}</h1>
          <span className="code">
            <small>{date}</small>
          </span>
        </div>
        <div className="divider" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <div className="page-navigation code">
        {prev && (
          <Link
            className="prev"
            to={prev?.fields?.slug || ''}
            title={prev?.frontmatter?.title || ''}
          >
            &lt;&lt;
          </Link>
        )}
        <span> &middot; </span>
        <Link to="/" className="home" title="Back Home">
          {' '}
          Home{' '}
        </Link>
        <span> &middot; </span>
        {next && (
          <Link
            className="next"
            to={next?.fields?.slug || ''}
            title={next?.frontmatter?.title || ''}
          >
            &gt;&gt;
          </Link>
        )}
      </div>
    </DefaultLayout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
