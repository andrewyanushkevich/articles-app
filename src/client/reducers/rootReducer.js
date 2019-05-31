import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import {
  ARTICLES_RESPONSE, ARTICLES_RESPONSE_FAIL, ADD_ARTICLE_RESPONSE,
  ADD_ARTICLE_RESPONSE_FAIL, NEWS_PER_PAGE,
} from 'client/constants';

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
      page: action.page,
    });
  case ADD_ARTICLE_RESPONSE:
    if (state.page === 1) {
      return Object.assign({}, state, {
        articles: [action.article, ...state.articles.slice(0, NEWS_PER_PAGE - 2)],
        total: state.total + 1,
      });
    }
    return Object.assign({}, state, {
      total: state.total + 1,
    });
  case ARTICLES_RESPONSE_FAIL:
    return action.error;
  case ADD_ARTICLE_RESPONSE_FAIL:
    return action.error;
  default: return state;
  }
};

export default history => combineReducers({
  router: connectRouter(history),
  data: reducer,
});
