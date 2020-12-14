import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopWrapper = styled.div`
  display: flex;
  width: 75%;
  margin: 50px 0;
  justify-content: space-between;
  align-items: center;
`;

const TopImage = styled(Image)`
  width: 750px;
  height: auto;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 45px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 100px 0;
  width: 65%;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
`;

const Heading = styled.h2`
  font-size: 28px;
  text-align: center;
`;

const StyledImage = styled(Image)`
  width: 85%;
  height: auto;
  object-fit: cover;
`;

const PostLayout = ({ data }) => {
  const {
    datoCmsArticle: { title, author, featuredImage, articleContent },
  } = data;
  return (
    <>
      <PostWrapper>
        <TopWrapper>
          <TopImage fixed={featuredImage.fixed} />
          <Title>{title}</Title>
        </TopWrapper>

        <ContentWrapper>
          <p>{author}</p>
          {articleContent.map((item) => {
            const itemKey = Object.keys(item)[2];

            switch (itemKey) {
              case 'paragraphContent':
                return <StyledParagraph key={item.id}>{item.paragraphContent}</StyledParagraph>;
              case 'headingContent':
                return <Heading key={item.id}>{item.headingContent}</Heading>;
              case 'imageData':
                return <StyledImage key={item.id} fluid={item.imageData.fluid} />;
              default:
                return <p>...</p>;
            }
          })}
        </ContentWrapper>
      </PostWrapper>
    </>
  );
};

export const query = graphql`
  query singlePostQuery($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      author
      featuredImage {
        fixed(width: 750, height: 520) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      articleContent {
        ... on DatoCmsParagraph {
          id
          paragraphContent
        }
        ... on DatoCmsHeading {
          id
          headingContent
        }
        ... on DatoCmsArticleImage {
          id
          imageData {
            fluid(maxWidth: 800) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default PostLayout;
