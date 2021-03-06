import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { VKShareButton, VKIcon, VKShareCount } from 'react-share';
import { ThemeProvider } from 'styled-components';

import { theme } from 'client/constants';
import {
  Article, Title, Body, ShareSocialMedia, Images,
} from './styles';

class NewsView extends Component {
  handleCancel = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { location } = this.props;
    const { article } = this.props;
    const images = article.images ? article.images : [];
    return (
      <ThemeProvider theme={theme}>
        <section>
          <Article>
            <Title>
              {article.title}
            </Title>
            <Body>
              {article.detailedDescription}
              <Images>
                {images.map(item => <img srcSet={item.url} key={item.name} alt="Article" />)}
              </Images>
            </Body>
            <Button onClick={this.handleCancel}>Return</Button>
          </Article>
          <ShareSocialMedia>
            <VKShareButton
              url={`https://${location.pathname}`}
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
        </section>
      </ThemeProvider>
    );
  }
}

NewsView.defaultProps = {
  article: {
    title: '',
    detailedDescription: '',
    shortDescription: '',
  },
};

NewsView.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      detailedDescription: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default withRouter(NewsView);
