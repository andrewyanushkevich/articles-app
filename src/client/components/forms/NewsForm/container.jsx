import { connect } from 'react-redux';

import { addArticleRequest } from 'client/actions';
import WrappedForm from './component';

const mapDispatchToProps = dispatch => ({
  handleAddArticle: (article) => {
    dispatch(addArticleRequest(article));
  },
});

export default connect(null, mapDispatchToProps)(WrappedForm);
