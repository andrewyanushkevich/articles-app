import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Pagination, Button } from 'antd';

import NewsPreview from 'client/components/blocks/NewsPreview';
import NewsForm from 'client/components/forms/NewsForm';

class NewsList extends Component {

  componentDidMount() {
    const { handlePageChange } = this.props;
    handlePageChange(1);
  }

  render() {
    const { articles, total } = this.props.data;
    const { handlePageChange } = this.props;
    return (
        <div>
          <NewsForm />
          <List 
              size="large"
              dataSource={articles}
              renderItem={(item) => (<List.Item><NewsPreview article={item}/></List.Item>)}
          />
          <NewsForm />
          <Pagination total = {total} onChange={handlePageChange}/>
        </div>
    );
  }
}

export default withRouter(NewsList);
