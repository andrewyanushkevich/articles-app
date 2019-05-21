import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from '@client/reducers';
import watchGetArticles from '@client/api/sagas/saga';

const initialState = {
  articles: [],
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watchGetArticles);

export default store;
