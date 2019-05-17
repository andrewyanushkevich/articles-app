import { put, call, takeEvery, fork } from 'redux-saga/effects';
import { articlesResponse, articlesResponseFail } from '@client/actions';
import { ARTICLES_REQUEST } from '@client/constants';

function* getArticles(action) {
  const { pageNumber } = action;
  try {
    const response = yield call(fetch, `/api/articles?page=${pageNumber}`, { 
      method: 'GET', 
      headers: { 'Content-Type': 'application/json' },
    });
    const jsonResponse = yield response.json();
    yield put(articlesResponse(jsonResponse.data));
  } catch (error) {
    yield put(articlesResponseFail(error));
  }
}

export default function* watchGetArticles() {
  yield takeEvery(ARTICLES_REQUEST, getArticles);
}
