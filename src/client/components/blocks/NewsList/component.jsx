import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Pagination } from 'antd';

import NewsPreview from '@client/components/blocks/NewsPreview';

class NewsList extends Component {
  handlePageChange = (e) => {

  }

  render() {
    return (
        <div>
            <List 
                size="large"
                dataSource={articles}
                renderItem={(item) => (<List.Item><NewsPreview article={item}/></List.Item>)}
            />
            <Pagination onChange={this.handlePageChange}/>
        </div>
    );
  }
}

export default withRouter(NewsList);
