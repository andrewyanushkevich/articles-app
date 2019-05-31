import { put, call, takeEvery } from 'redux-saga/effects';
import { articlesResponse, articlesResponseFail } from 'client/actions';
import { ARTICLES_REQUEST, ARTICLES_API_URL } from 'client/constants';

function* getArticles(action) {
  const { pageNumber } = action;
  try {
    const response = yield call(fetch, `${ARTICLES_API_URL}?page=${pageNumber}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const jsonResponse = yield response.json();
    const { articles, total, page } = jsonResponse.data;
    yield put(articlesResponse(articles, total, page));
  } catch (error) {
    yield put(articlesResponseFail(error));
  }
}

export default function* watchGetArticles() {
  yield takeEvery(ARTICLES_REQUEST, getArticles);
}
