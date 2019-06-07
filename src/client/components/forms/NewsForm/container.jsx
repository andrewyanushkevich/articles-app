import { connect } from 'react-redux';

import { addArticleRequest, updateArticleRequest } from 'client/actions';
import NewsForm from './component';

const mapDispatchToProps = dispatch => ({
  handleAddArticle: (article) => {
    dispatch(addArticleRequest(article));
  },
  handleEditArticle: (article) => {
    dispatch(updateArticleRequest(article));
  },
});

export default connect(undefined, mapDispatchToProps)(NewsForm);
