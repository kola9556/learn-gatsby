import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import Gallery from '../components/Gallery/Gallery';

const Heading = styled.h1`
  font-size: 42px;
`;

const TextWrapper = styled.p`
  width: 20vw;
  font-size: 18px;
`;

const GalleryPage = ({ data }) => (
  <>
    <Heading>gallery</Heading>
    <TextWrapper>
      While artists work from real to the abstract, architects must work from the abstract to the
      real.
    </TextWrapper>
    <Gallery />
  </>
);

export default GalleryPage;
