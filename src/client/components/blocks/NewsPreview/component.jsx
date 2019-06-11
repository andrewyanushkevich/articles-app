import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

import ArticleModal from 'client/components/blocks/ArticleModal';
import WarningModal from 'client/components/blocks/WarningModal';
import { NEWS_PER_PAGE, NEWS_URL } from 'client/constants';
import { Article, Title, Body, ArticleButtons } from './styles';

class NewsPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEntityModal: false,
      showRemovingWarningModal: false,
      page: 0,
    };
  }

  handleEntityViewClick = () => {
    const { history, article, handleGetArticle } = this.props;
    handleGetArticle(article._id);
    history.push(`${NEWS_URL}/view/${article._id}`);
  }

  handleEntityEditClick = () => {
    const { history, article } = this.props;
    this.setState({
      showEntityModal: true,
    });
    history.push(`${NEWS_URL}/edit/${article._id}`);
  }

  handleEntityDeleteClick = () => {
    const { history, location, article } = this.props;
    const url = new URLSearchParams(location.search);
    const page = url.get("skip") / NEWS_PER_PAGE;
    this.setState({
      showRemovingWarningModal: true,
      page,
    });
    history.push(`${NEWS_URL}/delete/${article._id}`);
  }

  handleWarningModalDismiss = (e) => {
    const { history } = this.props;
    this.setState({
      showRemovingWarningModal: false,
    });
    history.goBack();
  }

  handleWarningModalSubmit = () => {
    const { page } = this.state;
    const { article, handleDeleteArticle, history } = this.props;
    this.setState({
      showRemovingWarningModal: false,
    });
    handleDeleteArticle(article._id, page);
    history.goBack();
  }

  handleArticleModalDismiss = () => {
    const { history } = this.props;
    this.setState({
      showEntityModal: false,
    });
    history.goBack();
  }

  render() {
    const { showEntityModal, showRemovingWarningModal } = this.state;
    const { article } = this.props;
    return (
      <Article>
        <Title>
          {article.title}
        </Title>
        <Body>
          {article.body}
        </Body>
        <ArticleButtons>
          <Button onClick={this.handleEntityViewClick}>View</Button>
          <Button onClick={this.handleEntityDeleteClick}>Delete</Button>
          <Button onClick={this.handleEntityEditClick}>Edit</Button>
        </ArticleButtons>
        <ArticleModal 
            id={article._id}
            title={article.title}
            body={article.body}
            visible={showEntityModal}
            onCancel={this.handleArticleModalDismiss}
        />
        <WarningModal 
          visible={showRemovingWarningModal}
          onCancel={this.handleWarningModalDismiss}
          onOk={this.handleWarningModalSubmit}
        />
      </Article>
    );
  }
}

NewsPreview.propTypes = {
    article: PropTypes.object,
    Article: PropTypes.element,
    Title: PropTypes.element, 
    Body: PropTypes.element, 
    ArticleButtons: PropTypes.element,
    handleGetArticle: PropTypes.func,
    handleDeleteArticle: PropTypes.func
}

export default withRouter(NewsPreview);
