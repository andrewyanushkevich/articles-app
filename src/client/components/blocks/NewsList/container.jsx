import { connect } from 'react-redux';

import NewsList from './component';

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

export default connect(mapStateToProps)(NewsList);
