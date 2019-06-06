import React, { Component } from 'react';
import NewsForm from 'client/components/forms/NewsForm';

class ArticleModal extends Component {
  render() {
    const { action, article, visible, onCancel } = this.props;
    switch (action) {
      case 'Edit': return (
        <NewsForm 
          formTitle="Edit Article"
          formButtonName="Edit"
          title={article.title}
          body={article.body}
          id={article._id}
          visible={visible}
          onCancel={onCancel}
        />
      );
      case 'Create': return (
        <NewsForm 
          formTitle="Create Article"
          formButtonName="Create"
          title=""
          body=""
          visible={visible}
          onCancel={onCancel}
        />
      );
      default: return <div></div>
    }
  }
}

export default ArticleModal;
