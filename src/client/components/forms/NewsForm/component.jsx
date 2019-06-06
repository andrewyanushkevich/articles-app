import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ArticleForm from './form';

class WrappedForm extends Component {
    
  render() {
    const { 
        handleAddArticle, handleEditArticle, formTitle, formButtonName, id, visible, onCancel, title, body
    } = this.props;
    return (
      <Modal
        visible={visible}
        footer={[
        <Button key="back" onClick={onCancel}>
        Return
        </Button>,]}
        title={formTitle}
        onCancel={onCancel}
      >
        <ArticleForm 
          title={title}
          body={body}
          handleAddArticle={handleAddArticle}
          handleEditArticle={handleEditArticle}
          history={history}
          formButtonName={formButtonName}
          id={id}
          closeForm={onCancel}
        />
      </Modal>
    );
  }
}

WrappedForm.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    handleAddArticle: PropTypes.func,
    handleEditArticle: PropTypes.func,
}

export default withRouter(WrappedForm);
