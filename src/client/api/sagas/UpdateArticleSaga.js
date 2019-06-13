import { put, call, takeEvery } from 'redux-saga/effects';

import { requestHeader } from 'client/helpers';
import { updateArticleResponse, updateArticleResponseFail } from 'client/actions';
import { UPDATE_ARTICLE_REQUEST, ARTICLE_API_URL } from 'client/constants';

function* updateArticle(action) {
  const { article } = action;
  try {
    const response = yield call(fetch, `${ARTICLE_API_URL}/${article.id}`, {
      method: 'PUT',
      headers: requestHeader,
      body: JSON.stringify(article),
    });
    const jsonResponse = yield response.json();
    const { data } = jsonResponse;
    yield put(updateArticleResponse(data));
  } catch (error) {
    yield put(updateArticleResponseFail(error));
  }
}

export default function* watchUpdateArticle() {
  yield takeEvery(UPDATE_ARTICLE_REQUEST, updateArticle);
}
