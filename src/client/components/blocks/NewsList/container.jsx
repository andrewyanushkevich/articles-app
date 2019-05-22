import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { articlesRequest } from 'client/actions';
import NewsList from './component';
import {  NEWS_PER_PAGE, NEWS_URL } from 'client/constants';

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  handlePageChange: (pageNumber) => {
    dispatch(articlesRequest(pageNumber));
    dispatch(push(`${NEWS_URL}?skip=${pageNumber * NEWS_PER_PAGE}`));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
