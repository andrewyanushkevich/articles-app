import React from 'react';

import BasicLayout from '@client/components/layouts/BasicLayout/BasicLayout';

import NewsList from '@client/components/blocks/NewsList/NewsList';

const NewsPage = (props) => {
        return (
            <BasicLayout><NewsList /></BasicLayout>
        );
}

export default NewsPage;
