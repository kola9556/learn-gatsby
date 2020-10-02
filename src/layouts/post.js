import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const StyledImage = styled(Image)`
  width: 600px;
  height: 350px;
  object-fit: cover;
`;

const PostLayout = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, author, featuredImage },
      body,
    },
  } = data;
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <StyledImage fixed={featuredImage.childImageSharp.fixed} />
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </>
  );
};

export const query = graphql`
  query singlePostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        title
        featuredImage {
          childImageSharp {
            fixed(width: 500, traceSVG: { background: "#fff", color: "#663399" }, quality: 90) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`;

export default PostLayout;
