import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import NewsPage from 'client/components/pages/NewsPage';
import ViewArticlePage from 'client/components/pages/ViewArticlePage';
import { NEWS_URL, NEWS_PER_PAGE } from 'client/constants';
import { history } from 'client/store';

class Router extends Component {
    render() {
        return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={NEWS_URL} component={NewsPage} />
                <Route path={`${NEWS_URL}/delete/:id`} component={NewsPage} />
                <Route path={`${NEWS_URL}/edit/:id`} component={NewsPage} />
                <Route path={`${NEWS_URL}/create`} component={NewsPage} />
                <Route path={`${NEWS_URL}/view/:id`} component={ViewArticlePage} />
                <Redirect from='/' to={`${NEWS_URL}?skip=${NEWS_PER_PAGE}`} />
            </Switch>
        </ConnectedRouter>
        );
    }
}

export default Router;
