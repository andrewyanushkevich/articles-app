import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as actions from 'client/constants';

const initialState = {
  articles: [],
  total: 0,
  article: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.ARTICLES_RESPONSE:
    return Object.assign({}, state, {
      articles: action.articles,
      total: action.total,
      page: action.page,
    });
  case actions.ADD_ARTICLE_RESPONSE:
    if (state.page === 1) {
      return Object.assign({}, state, {
        articles: [action.article, ...state.articles.slice(0, actions.NEWS_PER_PAGE - 2)],
        total: state.total + 1,
      });
    }
    return Object.assign({}, state, {
      total: state.total + 1,
    });
  case actions.UPDATE_ARTICLE_RESPONSE:
    const list = state.articles.map(elem => (elem._id === action.article._id ? action.article : elem));
    return Object.assign({}, state, {
      articles: list,
    });
  case actions.GET_ARTICLE_RESPONSE:
    return Object.assign({}, state, {
      article: action.article,
    });
  case actions.ARTICLES_RESPONSE_FAIL:
    return action.error;
  case actions.ADD_ARTICLE_RESPONSE_FAIL:
    return action.error;
  default: return state;
  }
};

export default history => combineReducers({
  router: connectRouter(history),
  data: reducer,
});
