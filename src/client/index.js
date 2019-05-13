import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import NewsPage from './components/pages/NewsPage';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/news' component={NewsPage} />
        <Redirect from='/' to='/news?skip=10' />
      </Switch>
    </BrowserRouter>, document.getElementById('root'),
);
