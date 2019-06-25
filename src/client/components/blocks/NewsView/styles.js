import styled from 'styled-components';

export const Article = styled.article`
  width: 50%;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  & > Button {
    align-self: flex-start;
    margin: ${props => props.theme.spacingUnit}px 0px;
  };
`;

export const Title = styled.h2`
  text-align: left;
  display: flex;
  font-size: ${props => props.theme.fontSize}em;
  margin-bottom: ${props => props.theme.spacingUnit}px;
`;

export const Body = styled.p`
  margin-bottom:${props => props.theme.spacingUnit * 2}px;
`;

export const ShareSocialMedia = styled.div`
  margin: ${props => props.theme.spacingUnit}px auto;
  text-align: center;
  width: 5%;
  &:hover {
    cursor: pointer;
  };
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  item-align: center;
  & > img {
    margin-top: ${props => props.theme.spacingUnit}px;
  };
`;
