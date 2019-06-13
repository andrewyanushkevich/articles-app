import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { VKShareButton, VKIcon, VKShareCount } from 'react-share';

import { Article, Title, Body, ShareSocialMedia } from './styles';

class NewsView extends Component {
  handleCancel = () => {
    const { history } = this.props;
    history.goBack();
  }
  render() {
    const { article } = this.props.data;
    const { location } = this.props;
    return (
      <section>
        <Article>
          <Title>
            {article.title}
          </Title>
          <Body>
            {article.detailedDescription}
          </Body>
          <div>
            <Button onClick={this.handleCancel}>Return</Button>
          </div>
        </Article>
        <ShareSocialMedia>
          <VKShareButton
            url={"https://" + location.pathname}
            title={article.title}
            description={article.detailedDescription}
            image={article.image ? article.image.url: ''}
          >
            <VKIcon 
              round="bool"
              size="40"
            />
            <VKShareCount />
          </VKShareButton>
        </ShareSocialMedia>
      </section>
    );
  }
}

NewsView.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      detailedDescription: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired
    })
  }).isRequired
};

export default withRouter(NewsView);
