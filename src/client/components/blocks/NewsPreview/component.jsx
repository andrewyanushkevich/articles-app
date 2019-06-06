import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

import ArticleModal from 'client/components/blocks/ArticleModal';
import WarningModal from 'client/components/blocks/WarningModal';
import { NEWS_PER_PAGE, NEWS_URL } from 'client/constants';

class NewsPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEntityModal: false,
      showRemovingWarningModal: false,
      action: '',
      page: 0,
    };
  }

  handleEntityViewClick = () => {
    this.setState({
      showEntityModal: true,
      action: 'View',
    });
  }

  handleEntityEditClick = () => {
    const { history, article } = this.props;
    this.setState({
      showEntityModal: true,
      action: 'Edit',
    });
    history.push(`${NEWS_URL}/${article._id}`);
  }

  handleEntityDeleteClick = () => {
    const { history, location, article } = this.props;
    const url = new URLSearchParams(location.search);
    const page = url.get("skip") / NEWS_PER_PAGE;
    this.setState({
      showRemovingWarningModal: true,
      page,
    });
    history.push(`${NEWS_URL}/${article._id}`);
  }

  handleWarningModalDismiss = () => {
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

  handleEntityClose = () => {
    const { history } = this.props;
    this.setState({
      showEntityModal: false,
    });
    history.goBack();
  }

  render() {
    const { showEntityModal, showRemovingWarningModal, action } = this.state;
    const { article } = this.props;
    return (
      <div>
        <div>
          {article.title}
        </div>
        <div>
          {article.body}
        </div>
        <div>
          <Button onClick={this.handleEntityViewClick}>View</Button>
          <Button onClick={this.handleEntityDeleteClick}>Delete</Button>
          <Button onClick={this.handleEntityEditClick}>Edit</Button>
        </div>
        <ArticleModal 
            article={article}
            action={action}
            visible={showEntityModal}
            onCancel={this.handleEntityClose}
        />
        <WarningModal 
          visible={showRemovingWarningModal}
          onCancel={this.handleWarningModalDismiss}
          onOk={this.handleWarningModalSubmit}
        />
      </div>
    );
  }
}

NewsPreview.propTypes = {
    article: PropTypes.object
}

export default withRouter(NewsPreview);
