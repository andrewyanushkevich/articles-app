import { all } from 'redux-saga/effects';
import watchAddArticle from './AddArticleSaga';
import watchGetArticles from './GetArticlesSaga';

function* rootSaga() {
  yield all([watchGetArticles(), watchAddArticle()]);
}

export default rootSaga;
