import styled from 'styled-components';

import { SPACING_UNIT, FONT_SIZE } from 'client/constants';

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${SPACING_UNIT * 2}px 0px;
  & > img {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h2`
  text-align: left;
  display: flex;
  font-size: ${FONT_SIZE}em;
  @media only screen and (max-width: 600px) {
    font-size: ${FONT_SIZE / 2}em;
  }
`;

export const Body = styled.p`
`;

export const ArticleButtons = styled.div`
  align-self: flex-start;
  > Button {
    margin-right: ${SPACING_UNIT}px;
  }
`;

export const ShareSocialMedia = styled.div`
  margin: ${SPACING_UNIT}px auto;
  width: 5%;
  text-align: center;
  &:hover {
    cursor: pointer;
  };
`;
