import styled from 'styled-components';
import { Pagination } from 'antd';

export const ArticleList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  & > Button {
  align-self: flex-start;
  margin: ${props => props.theme.spacingUnit}px 0px;
  };
`;
export const StyledPagination = styled(Pagination)`
  align-self: center;
`;
