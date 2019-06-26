import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { VKShareButton, VKIcon, VKShareCount } from 'react-share';
import { ThemeProvider } from 'styled-components';

import { theme } from 'client/constants';
import {
  Article, Title, Body, ArticleButtons, ShareSocialMedia,
} from './styles';

class NewsPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEntityModal: false,
      showRemovingWarningModal: false,
      page: 0,
    };
  }

  render() {
    const { 
      article,
      handleEntityDeleteClick,
      handleEntityViewClick,
      handleEntityEditClick,
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Article>
          {article.images.length > 0 && <img srcSet={article.images[0].url} alt="Article" /> }
          <Title>
            {article.title}
          </Title>
          <Body>
            {article.shortDescription}
          </Body>
          <ArticleButtons>
            <Button onClick={handleEntityViewClick} data-id={article._id}>View</Button>
            <Button onClick={handleEntityDeleteClick} data-id={article._id}>Delete</Button>
            <Button onClick={handleEntityEditClick} data-id={article._id}>Edit</Button>
          </ArticleButtons>
          <ShareSocialMedia>
            <VKShareButton
              url={`${location.protocol}//${location.pathname}`}
              title={article.title}
              description={article.detailedDescription}
              image={article.image ? article.image.url : ''}
            />
            <VKIcon
              round="bool"
              size="40"
            />
            <VKShareCount />
          </ShareSocialMedia>
        </Article>
      </ThemeProvider>
    );
  }
}

NewsPreview.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detailedDescription: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(NewsPreview);
