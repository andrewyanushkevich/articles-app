import React from 'react';

import BasicLayout from 'client/components/layouts/BasicLayout';
import NewsList from 'client/components/blocks/NewsList';

const NewsPage = props => (
  <BasicLayout><NewsList /></BasicLayout>
);

export default NewsPage;
