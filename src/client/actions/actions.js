import * as actions from '@client/constants';

export const articlesRequest = pageNumber => ({
  type: actions.ARTICLES_REQUEST,
  pageNumber,
});
export const articlesResponse = (articles, total) => ({
  type: actions.ARTICLES_RESPONSE,
  articles,
  total,
});
export const articlesResponseFail = error => ({
  type: actions.ARTICLES_RESPONSE_FAIL,
  error,
});
