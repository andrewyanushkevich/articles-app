import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { ARTICLES_RESPONSE, ARTICLES_RESPONSE_FAIL } from 'client/constants';

const initialState = {
  articles: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ARTICLES_RESPONSE:
    return Object.assign({}, state, {
      articles: action.articles,
      total: action.total,
    });
  case ARTICLES_RESPONSE_FAIL:
    return action.error;
  default: return state;
  }
};

export default history => combineReducers({
  router: connectRouter(history),
  data: reducer,
});
