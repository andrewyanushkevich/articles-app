import { connect } from 'react-redux';

import { deleteArticleRequest, getArticleRequest } from 'client/actions';
import NewsPreview from './component';

const mapDispatchToProps = dispatch => ({
  handleDeleteArticle: (id, page) => {
    dispatch(deleteArticleRequest(id, page));
  },
  handleGetArticle: (id) => {
    dispatch(getArticleRequest(id));
  },
});

export default connect(undefined, mapDispatchToProps)(NewsPreview);
