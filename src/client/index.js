import { List } from './components/pages/article-list/article-list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <BrowserRouter>
    <Switch>
        <Route exact path="/api/articles" component={List} />
        <Redirect from="/" to="/api/articles" />
    </Switch>
  </BrowserRouter>,
  document.body
);

if (module.hot) {
  module.hot.accept();
}