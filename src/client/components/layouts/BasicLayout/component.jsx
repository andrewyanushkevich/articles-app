import React from 'react';

import Page from 'client/components/blocks/Page';

const BasicLayout = ({ children }) => {
    return (
        <Page>{children}</Page>
    );
}

export default BasicLayout;
