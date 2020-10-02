import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const GalleryWrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(408px, 1fr));
  grid-auto-rows: 252px;
  grid-column-gap: 22px;
  grid-row-gap: 22px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/images/gallery/" } }) {
      nodes {
        childImageSharp {
          fluid(traceSVG: { background: "#fff", color: "#663399" }, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);

  return (
    <>
      <GalleryWrapper>
        {data.allFile.nodes.map((node) => (
          <StyledImage fluid={node.childImageSharp.fluid} />
        ))}
      </GalleryWrapper>
    </>
  );
};

export default Gallery;
