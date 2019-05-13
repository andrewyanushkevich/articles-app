import React, { Component } from 'react';

import Page from '@client/components/blocks/Page';
import NewsList from '@client/components/blocks/NewsList';

class BasicLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page>
                <header></header>
                <NewsList />
                <footer></footer>
            </Page>
        );
    }
}

export default BasicLayout;