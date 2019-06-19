import styled from 'styled-components';

export const Article = styled.article`
  border: 1px solid black;
  width: 50%;
  margin: auto;
`;

export const Title = styled.h2`
  border-bottom: 1px solid black;
  text-align: center;
  padding: 20px;
`;

export const Body = styled.p`
  border-bottom: 1px solid black;
  padding: 20px;
`;

export const ShareSocialMedia = styled.div`
  margin: 10px auto;
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
    margin: 20px;
  }
`;
