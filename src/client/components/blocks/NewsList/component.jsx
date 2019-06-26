import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Button } from 'antd';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import NewsPreview from 'client/components/blocks/NewsPreview';
import ArticleModal from 'client/components/blocks/ArticleModal';
import { NEWS_URL, NEWS_PER_PAGE, theme } from 'client/constants';
import WarningModal from 'client/components/blocks/WarningModal';

import { ArticleList, StyledPagination } from './styles';

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEntityModal: false,
      showRemovingWarningModal: false,
      page: 0,
    };
  }

  componentDidMount() {
    const { location, handlePageChange } = this.props;
    const url = new URLSearchParams(location.search);
    const page = url.get('skip') / NEWS_PER_PAGE;
    handlePageChange(page);
  }

  handleEntityAddArticle = () => {
    const { history } = this.props;
    this.setState({
      showEntityModal: true,
    });
    history.push(`${NEWS_URL}/create`);
  }

  handleEntityViewClick = (e) => {
    const { history, handleGetArticle } = this.props;
    const { id } = e.target.dataset;
    handleGetArticle(id);
    history.push(`${NEWS_URL}/view/${id}`);
  }

  handleEntityEditClick = (e) => {
    const { history } = this.props;
    const { id } = e.target.dataset;
    this.setState({
      showEntityModal: true,
      id,
    });
    history.push(`${NEWS_URL}/edit/${id}`);
  }

  handleEntityDeleteClick = (e) => {
    const { history, location } = this.props;
    const url = new URLSearchParams(location.search);
    const page = url.get('skip') / NEWS_PER_PAGE;
    const { id } = e.target.dataset;
    this.setState({
      showRemovingWarningModal: true,
      page,
      id,
    });
    history.push(`${NEWS_URL}/delete/${id}`);
  }

  handleWarningModalDismiss = () => {
    const { history } = this.props;
    this.setState({
      showRemovingWarningModal: false,
      id: undefined,
    });
    history.goBack();
  }

  handleWarningModalSubmit = () => {
    const { page, id } = this.state;
    const { handleDeleteArticle, history } = this.props;
    this.setState({
      showRemovingWarningModal: false,
      id: undefined,
    });
    handleDeleteArticle(id, page);
    history.goBack();
  }

  handleRemovingArticleModal= () => {
    const { history } = this.props;
    this.setState({
      showEntityModal: false,
      id: undefined,
    });
    history.goBack();
  }

  render() {
    const { showEntityModal, showRemovingWarningModal, id } = this.state;
    const { articles, total } = this.props.data;
    const { handlePageChange } = this.props;
    const article = articles.find(element => element._id === id) || [];
    return (
      <ThemeProvider theme={theme}>
        <ArticleList>
          <Button onClick={this.handleEntityAddArticle}>Add Article</Button>
          <List
            size="large"
            dataSource={articles}
            renderItem={item => (
              <List.Item>
                <NewsPreview
                  article={item}
                  handleEntityDeleteClick={this.handleEntityDeleteClick}
                  handleEntityViewClick={this.handleEntityViewClick}
                  handleEntityEditClick={this.handleEntityEditClick}
                />
              </List.Item>
            )}
          />
          <Button onClick={this.handleEntityAddArticle}>Add Article</Button>
          <ArticleModal
            visible={showEntityModal}
            onCancel={this.handleRemovingArticleModal}
            id={id}
            title={article.title}
            detailedDescription={article.detailedDescription}
          />
          <WarningModal
            visible={showRemovingWarningModal}
            onCancel={this.handleWarningModalDismiss}
            onOk={this.handleWarningModalSubmit}
          />
          <StyledPagination total={total} onChange={handlePageChange} />
        </ArticleList>
      </ThemeProvider>
    );
  }
}

NewsList.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      detailedDescription: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
    })).isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default withRouter(NewsList);
