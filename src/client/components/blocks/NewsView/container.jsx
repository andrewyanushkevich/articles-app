import { connect } from 'react-redux';

import NewsView from './component';

const mapStateToProps = state => ({
  article: state.data.article,
});

export default connect(mapStateToProps)(NewsView);
