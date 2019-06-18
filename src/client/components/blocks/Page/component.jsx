import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`margin: auto`;

const Page = ({ children }) => (
  <PageWrapper>{children}</PageWrapper>
);

export default Page;
