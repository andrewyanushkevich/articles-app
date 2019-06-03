import * as actions from 'client/constants';

export const articlesRequest = pageNumber => ({
  type: actions.ARTICLES_REQUEST,
  pageNumber,
});
export const articlesResponse = (articles, total, page) => ({
  type: actions.ARTICLES_RESPONSE,
  articles,
  total,
  page,
});
export const articlesResponseFail = error => ({
  type: actions.ARTICLES_RESPONSE_FAIL,
  error,
});

export const addArticleRequest = article => ({
  type: actions.ADD_ARTICLE_REQUEST,
  article,
});
export const addArticleResponse = article => ({
  type: actions.ADD_ARTICLE_RESPONSE,
  article,
});
export const addArticleResponseFail = error => ({
  type: actions.ADD_ARTICLE_RESPONSE_FAIL,
  error,
});

export const updateArticleRequest = article => ({
  type: actions.UPDATE_ARTICLE_REQUEST,
  article,
});
export const updateArticleResponse = article => ({
  type: actions.UPDATE_ARTICLE_RESPONSE,
  article,
});
export const updateArticleResponseFail = error => ({
  type: actions.UPDATE_ARTICLE_RESPONSE_FAIL,
  error,
});
