import { connect } from 'react-redux';

import { getArticleRequest } from 'client/actions';
import NewsPreview from './component';

const mapDispatchToProps = dispatch => ({
  handleGetArticle: (id) => {
    dispatch(getArticleRequest(id));
  },
});

export default connect(undefined, mapDispatchToProps)(NewsPreview);
