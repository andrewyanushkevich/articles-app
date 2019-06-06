import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Pagination, Button } from 'antd';

import NewsPreview from 'client/components/blocks/NewsPreview';
import ArticleModal from 'client/components/blocks/ArticleModal'
import { NEWS_URL } from 'client/constants';

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEntityModal: false,
    };
  }

  handleEntityAddArticle = () => {
    const { history } =this.props;
    this.setState({
      showEntityModal: true,
    });
    history.push(`${NEWS_URL}/create`);
  }

  handleEntityClose = () => {
    const { history } = this.props;
    this.setState({
      showEntityModal: false,
    });
    history.goBack();
  }

  componentDidMount() {
    const { handlePageChange } = this.props;
    handlePageChange(1);
  }

  render() {
    const { showEntityModal } = this.state;
    const { articles, total } = this.props.data;
    const { handlePageChange } = this.props;
    return (
      <div>
        <Button onClick={this.handleEntityAddArticle}>Add Article</Button>
          <List 
            size="large"
            dataSource={articles}
            renderItem={(item) => (
              <List.Item>
                <NewsPreview 
                article={item}
                />
              </List.Item>)}
          />
        <Button onClick={this.handleEntityAddArticle}>Add Article></Button>
        <ArticleModal
          visible={showEntityModal}
          action="Create"
          onCancel={this.handleEntityClose}
        />
        <Pagination total = {total} onChange={handlePageChange}/>
      </div>
    );
  }
}

export default withRouter(NewsList);
