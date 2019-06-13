import { put, call, takeEvery } from 'redux-saga/effects';

import { requestHeader } from 'client/helpers';
import { getArticleResponse, getArticleResponseFail } from 'client/actions';
import { GET_ARTICLE_REQUEST, ARTICLE_API_URL } from 'client/constants';

function* getArticle(action) {
  const { id } = action;
  try {
    const response = yield call(fetch, `${ARTICLE_API_URL}/${id}`, {
      method: 'GET',
      headers: requestHeader,
    });
    const jsonResponse = yield response.json();
    const { data } = jsonResponse;
    yield put(getArticleResponse(data));
  } catch (error) {
    yield put(getArticleResponseFail(error));
  }
}

export default function* watchGetArticle() {
  yield takeEvery(GET_ARTICLE_REQUEST, getArticle);
}
