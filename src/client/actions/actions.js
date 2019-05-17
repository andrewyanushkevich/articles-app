import { ARTICLES_REQUEST, ARTICLES_RESPONSE, ARTICLES_RESPONSE_FAIL } from '@client/constants';

const articlesRequest = pageNumber => ({
  type: ARTICLES_REQUEST,
  pageNumber,
});
const articlesResponse = articles => ({
  type: ARTICLES_RESPONSE,
  articles,
});
const articlesResponseFail = error => ({
  type: ARTICLES_RESPONSE_FAIL,
  error,
});

export { articlesRequest, articlesResponse, articlesResponseFail };
