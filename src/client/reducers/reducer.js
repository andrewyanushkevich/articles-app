import { ARTICLES_RESPONSE, ARTICLES_RESPONSE_FAIL } from '@client/constants'

const reducer = (state, action) => {
  switch (action.type) {
  case ARTICLES_RESPONSE:
    return Object.assign({}, state, {
      articles: action.articles,
    });
  case ARTICLES_RESPONSE_FAIL:
    return action.error;
  default: return state;
  }
};
export { reducer };
