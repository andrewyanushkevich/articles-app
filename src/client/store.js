import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from 'client/reducers';
import rootSaga from 'client/api/sagas/rootSaga';

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

sagaMiddleware.run(rootSaga);

export { store, history };
