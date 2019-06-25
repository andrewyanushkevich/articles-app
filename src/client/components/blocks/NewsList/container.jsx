import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { articlesRequest, deleteArticleRequest, getArticleRequest } from 'client/actions';
import { NEWS_PER_PAGE, NEWS_URL } from 'client/constants';

import NewsList from './component';

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  handlePageChange: (pageNumber) => {
    dispatch(articlesRequest(pageNumber));
    dispatch(push(`${NEWS_URL}?skip=${pageNumber * NEWS_PER_PAGE}`));
  },
  handleDeleteArticle: (id, page) => {
    dispatch(deleteArticleRequest(id, page));
  },
  handleGetArticle: (id) => {
    dispatch(getArticleRequest(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
