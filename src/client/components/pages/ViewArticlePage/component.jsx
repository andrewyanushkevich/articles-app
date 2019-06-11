import React from 'react';

import BasicLayout from 'client/components/layouts/BasicLayout';
import NewsView from 'client/components/blocks/NewsView';

const ViewArticlePage = (props) => {
    return (
        <BasicLayout><NewsView /></BasicLayout>
    );
}

export default ViewArticlePage;
