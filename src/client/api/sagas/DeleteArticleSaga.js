import { put, call, takeEvery } from 'redux-saga/effects';

import { requestHeader } from 'client/helpers';
import { articlesRequest, deleteArticleResponseFail } from 'client/actions';
import { DELETE_ARTICLE_REQUEST, ARTICLE_API_URL } from 'client/constants';

function* deleteArticle(action) {
  const { id, page } = action;
  try {
    yield call(fetch, `${ARTICLE_API_URL}/${id}`, {
      method: 'DELETE',
      headers: requestHeader,
    });
    yield put(articlesRequest(page));
  } catch (error) {
    yield put(deleteArticleResponseFail(error));
  }
}

export default function* watchDeleteArticle() {
  yield takeEvery(DELETE_ARTICLE_REQUEST, deleteArticle);
}
