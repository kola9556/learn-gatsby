import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  object-fit: cover;
`;

const AboutPage = () => (
  <>
    <h1>About Page</h1>
  </>
);

export default AboutPage;
