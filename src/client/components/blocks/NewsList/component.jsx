import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Pagination } from 'antd';

import NewsPreview from '@client/components/blocks/NewsPreview';
import store from '@client/store';
import { NEWS_PER_PAGE } from '@client/constants';

class NewsList extends Component {
  
  componentDidMount() {
    const { handlePageChange } = this.props;
    handlePageChange(1);
  }

  render() {
    const { articles, total, handlePageChange } = this.props;
    return (
        <div>
            <List 
                size="large"
                dataSource={articles}
                renderItem={(item) => (<List.Item><NewsPreview article={item}/></List.Item>)}
            />
            <Pagination total = {total} onChange={handlePageChange}/>
        </div>
    );
  }
}

export default withRouter(NewsList);
