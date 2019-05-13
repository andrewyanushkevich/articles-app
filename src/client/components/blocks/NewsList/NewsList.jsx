import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Pagination } from 'antd';

import NewsPreview from '@client/components/blocks/NewsPreview/NewsPreview';

class NewsList extends Component {

  handlePageChange = (e) => {

  }

  render() {
    const defaultPage = 1;
    const total = 50;
    return (
        <div>
            <List 
                size="large"
                dataSource={articles}
                renderItem={(item) => (<List.Item><NewsPreview article={item}/></List.Item>)}
            />
            <Pagination defaultCurrent={defaultPage} total={total} onChange={this.handlePageChange}/>
        </div>
    );
  }
}

export default withRouter(NewsList);
