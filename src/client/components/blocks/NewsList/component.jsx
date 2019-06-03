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
          <NewsForm 
          modalButtonName="Add Article" 
          formTitle="Create Article" 
          formButtonName="Create"/>
          <List 
              size="large"
              dataSource={articles}
              renderItem={(item) => (
              <List.Item>
                <NewsPreview 
                article={item}
                modalButtonName="Edit Article" 
                formTitle="Edit Article" 
                formButtonName="Update"/>
              </List.Item>)}
          />
          <NewsForm />
          <Pagination total = {total} onChange={handlePageChange}/>
        </div>
    );
  }
}

export default withRouter(NewsList);
