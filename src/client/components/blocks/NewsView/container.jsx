import { connect } from 'react-redux';

import NewsView from './component';

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps)(NewsView);
