import { put, call, takeEvery } from 'redux-saga/effects';

import { addArticleResponse, addArticleResponseFail } from 'client/actions';
import { ADD_ARTICLE_REQUEST, ARTICLE_API_URL } from 'client/constants';

function* addArticle(action) {
  const { article } = action;
  const formData = new FormData();
  formData.append('title', article.title);
  formData.append('detailedDescription', article.detailedDescription);
  article.images.forEach((element) => {
    formData.append('images', element); 
  });
  try {
    const response = yield call(fetch, `${ARTICLE_API_URL}`, {
      method: 'POST',
      body: formData,
    });
    const jsonResponse = yield response.json();
    const { data } = jsonResponse;
    yield put(addArticleResponse(data));
  } catch (error) {
    yield put(addArticleResponseFail(error));
  }
}

export default function* watchAddArticle() {
  yield takeEvery(ADD_ARTICLE_REQUEST, addArticle);
}
