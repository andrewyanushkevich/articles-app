import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';

import Router from './api/Router/component';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>, document.getElementById('root')
);
