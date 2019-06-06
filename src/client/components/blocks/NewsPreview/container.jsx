import { connect } from 'react-redux';

import { deleteArticleRequest } from 'client/actions';
import NewsPreview from './component';

const mapDispatchToProps = dispatch => ({
  handleDeleteArticle: (id, page) => {
    dispatch(deleteArticleRequest(id, page));
  },
});

export default connect(null, mapDispatchToProps)(NewsPreview);