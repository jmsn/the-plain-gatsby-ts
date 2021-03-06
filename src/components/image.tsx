import React, { FC } from 'react';
import { graphql, useStaticQuery, PageProps } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { ImageQuery } from '../../types/graphql-types';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image: FC<PageProps> = () => {
  const { placeholderImage } = useStaticQuery<ImageQuery>(
    graphql`
      query Image {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <Img fluid={placeholderImage?.childImageSharp?.fluid as FluidObject} />
  );
};

export default Image;
