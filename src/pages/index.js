import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Navigation from '../components/Navigation/Navigation';
import Button from '../components/Button/Button';

const ContentWrapper = styled.div`
  width: 55%;
  height: calc(100vh - 95px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const StyledHeader = styled.h1`
  margin: 0 0 30px;
  font-size: 92px;
  font-weight: 700;
  line-height: 0.9;
  max-width: 503px;
`;

const StyledParagraph = styled.p`
  margin: 0 0 30px;
  max-width: 311px;
  font-size: 18px;
`;

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 43%;
  height: 100vh;
  object-fit: cover;
  background-color: blue;
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <StyledHeader>Your new space</StyledHeader>
      <StyledParagraph>
        While artists work from real to the abstract, architects must work from the abstract to the
        real.
      </StyledParagraph>
      <Button>estimate project</Button>
    </ContentWrapper>
    <StyledImage backgroundColor fluid={data.file.childImageSharp.fluid} />
  </>
);

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
