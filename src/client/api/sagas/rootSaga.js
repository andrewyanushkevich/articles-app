import { all } from 'redux-saga/effects';
import watchAddArticle from './AddArticleSaga';
import watchGetArticles from './GetArticlesSaga';
import watchUpdateArticle from './UpdateArticleSaga';
import watchDeleteArticle from './DeleteArticleSaga';

function* rootSaga() {
  yield all([watchGetArticles(), watchAddArticle(), watchUpdateArticle(), watchDeleteArticle()]);
}

export default rootSaga;
