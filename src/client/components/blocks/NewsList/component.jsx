import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Pagination, Button } from 'antd';
import PropTypes from 'prop-types'
import { VKShareButton, VKIcon, VKShareCount } from 'react-share';;

import NewsPreview from 'client/components/blocks/NewsPreview';
import ArticleModal from 'client/components/blocks/ArticleModal';
import { NEWS_URL, NEWS_PER_PAGE } from 'client/constants';

import { ArticleList } from './styles';

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEntityModal: false,
    };
  }

  handleEntityAddArticle = () => {
    const { history } = this.props;
    this.setState({
      showEntityModal: true,
    });
    history.push(`${NEWS_URL}/create`);
  }

  handleRemovingArticleModal= () => {
    const { history } = this.props;
    this.setState({
      showEntityModal: false,
    });
    history.goBack();
  }

  componentDidMount() {
    const { location, handlePageChange } = this.props;
    const url = new URLSearchParams(location.search);
    const page = url.get("skip") / NEWS_PER_PAGE;
    handlePageChange(page);
  }

  render() {
    const { showEntityModal } = this.state;
    const { articles, total } = this.props.data;
    const { handlePageChange } = this.props;
    return (
      <ArticleList>
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
          onCancel={this.handleRemovingArticleModal}
        />
        <Pagination total = {total} onChange={handlePageChange}/>
      </ArticleList>
    );
  }
}

NewsList.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      detailedDescription: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired
    })).isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
}

export default withRouter(NewsList);
