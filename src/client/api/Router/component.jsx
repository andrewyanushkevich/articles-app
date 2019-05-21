import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import NewsPage from '@client/components/pages/NewsPage';
import { NEWS_URL, NEWS_PER_PAGE } from '@client/constants'

class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <Switch>
                <Route path={NEWS_URL} component={NewsPage} />
                <Redirect from='/' to={`${NEWS_URL}?skip=${NEWS_PER_PAGE}`} />
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Router;
