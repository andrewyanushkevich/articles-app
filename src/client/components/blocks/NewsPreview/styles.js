import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.spacingUnit * 2}px 0px;
  & > img {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h2`
  text-align: left;
  display: flex;
  font-size: ${props => props.theme.fontSize}em;
  @media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize / 2}em;
  }
`;

export const Body = styled.p`
  margin-bottom: ${props => props.theme.spacingUnit * 2}px;
`;

export const ArticleButtons = styled.div`
  align-self: flex-start;
  > Button {
    margin-right: ${props => props.theme.spacingUnit}px;
  }
`;

export const ShareSocialMedia = styled.div`
  margin: ${props => props.theme.spacingUnit}px auto;
  width: 5%;
  text-align: center;
  &:hover {
    cursor: pointer;
  };
`;
