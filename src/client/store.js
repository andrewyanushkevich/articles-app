import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from 'client/reducers';
import watchGetArticles from 'client/api/sagas/saga';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      logger,
    ),
  ),
);

sagaMiddleware.run(watchGetArticles);

export { store, history };
