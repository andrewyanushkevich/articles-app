import { connect } from 'react-redux';

import { addArticleRequest, updateArticleRequest } from 'client/actions';
import DeleteForm from './component';

const mapDispatchToProps = dispatch => ({
  handleDeleteArticle: (id) => {
    dispatch(addArticleRequest(id));
  },
});

export default connect(null, mapDispatchToProps)(DeleteForm);
