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
    const article = this.props.data.article || {};
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
    article: PropTypes.object
}

export default withRouter(NewsView);
