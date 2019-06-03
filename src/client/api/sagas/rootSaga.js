import { all } from 'redux-saga/effects';
import watchAddArticle from './AddArticleSaga';
import watchGetArticles from './GetArticlesSaga';
import watchUpdateArticle from './UpdateArticleSaga';

function* rootSaga() {
  yield all([watchGetArticles(), watchAddArticle(), watchUpdateArticle()]);
}

export default rootSaga;
