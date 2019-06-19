import { put, call, takeEvery } from 'redux-saga/effects';

import { addArticleResponse, addArticleResponseFail } from 'client/actions';
import {
  ADD_ARTICLE_REQUEST,
  ARTICLE_API_URL,
  TITLE_FIELD,
  DETAILED_DESCRIPTION_FIELD,
  IMAGES_FIELD,
} from 'client/constants';

function* addArticle(action) {
  const { article } = action;
  const formData = new FormData();
  formData.append(TITLE_FIELD, article.title);
  formData.append(DETAILED_DESCRIPTION_FIELD, article.detailedDescription);
  for (let i = 0; i < article.images.length; i += 1) {
    formData.append(IMAGES_FIELD, article.images[i]);
  }
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
