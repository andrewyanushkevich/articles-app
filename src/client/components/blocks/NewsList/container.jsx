import { connect } from 'react-redux';
import { articlesRequest } from '@client/actions';
import {NEWS_PER_PAGE} from '@client/constants';

import NewsList from './component';

function mapStateToProps(state) {
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
