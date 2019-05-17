import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Pagination } from 'antd';

import NewsPreview from '@client/components/blocks/NewsPreview';
import store from '@client/api/store';
import { articlesRequest } from '@client/actions';
import { NEWS_PER_PAGE } from '@client/constants';

class NewsList extends Component {
  handlePageChange = (e) => {
    const { history } = this.props;
    history.replace(`/news?skip=${e * NEWS_PER_PAGE}`);
    store.dispatch(articlesRequest(e));
  }

  componentDidMount() {
    const { history } = this.props;
    history.replace(`/news?skip=10`);
    store.dispatch(articlesRequest(1));
  }

  render() {
    const { articles } = this.props;
    return (
        <div>
            <List 
                size="large"
                dataSource={articles}
                renderItem={(item) => (<List.Item><NewsPreview article={item}/></List.Item>)}
            />
            <Pagination total = {50} onChange={this.handlePageChange}/>
        </div>
    );
  }
}

export default withRouter(NewsList);
