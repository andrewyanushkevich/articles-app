import styled from 'styled-components';

export const Article = styled.article`
  border: 1px solid black;
  width: 100%;
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

export const ArticleButtons = styled.div`
  text-align: right;
  > button {
    margin: 10px;
  }
`;
