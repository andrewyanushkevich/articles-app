import styled from 'styled-components';

import { SPACING_UNIT, FONT_SIZE } from 'client/constants';

export const Article = styled.article`
  width: 50%;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  & > Button {
    align-self: flex-start;
    margin: 20px 0px;
  };
`;

export const Title = styled.h2`
  text-align: left;
  display: flex;
  font-size: ${FONT_SIZE}em;
  margin-bottom: ${SPACING_UNIT}px;
`;

export const Body = styled.p`
  margin-bottom: ${SPACING_UNIT}px;
`;

export const ShareSocialMedia = styled.div`
  margin: ${SPACING_UNIT}px auto;
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
    margin-top: ${SPACING_UNIT}px;
  };
`;
