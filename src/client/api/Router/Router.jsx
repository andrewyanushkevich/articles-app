import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import NewsPage from '@client/components/pages/NewsPage/NewsPage.jsx';

class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <Switch>
                <Route path='/news' component={NewsPage} />
                <Redirect from='/' to='/news?skip=10' />
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Router;