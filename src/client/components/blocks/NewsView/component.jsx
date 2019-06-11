import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

import { Article, Title, Body } from './styles';

class NewsView extends Component {
  handleCancel = () => {
    const { history } = this.props;
    history.goBack();
  }
  render() {
    const { article } = this.props.data;
    return (
      <Article>
        <Title>
          {article.title}
        </Title>
        <Body>
          {article.body}
        </Body>
        <div>
          <Button onClick={this.handleCancel}>Return</Button>
        </div>
      </Article>
    );
  }
}

NewsView.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  }).isRequired
};

export default withRouter(NewsView);
