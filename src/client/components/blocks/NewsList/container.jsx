import { connect } from 'react-redux';
import { articlesRequest } from '@client/actions';

import NewsList from './component';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    total: state.total,
    page: state.page,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePageChange: (pageNumber) => {
      dispatch(articlesRequest(pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
