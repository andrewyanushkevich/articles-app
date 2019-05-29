import { connect } from 'react-redux';
import { push, goBack } from 'connected-react-router';

import { addArticleRequest } from 'client/actions';
import { NEWS_URL } from 'client/constants';
import NewsForm from './component';

const mapDispatchToProps = dispatch => ({
  handleAddArticle: (article) => {
    dispatch(addArticleRequest(article));
  },
  changeUrl: () => {
    dispatch(push(`${NEWS_URL}/create`));
  },
  changeUrlBack: () => {
    dispatch(goBack());
  },
});

export default connect(null, mapDispatchToProps)(NewsForm);
