import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';

import NewsForm from 'client/components/forms/NewsForm';

class ArticleModal extends Component {
  render() {
    const { title, detailedDescription, id, visible, onCancel } = this.props;
    return(
      <Modal 
        visible={visible}
        onCancel={onCancel}
        footer={[
          <Button key="back" onClick={onCancel}>
          Return
          </Button>,]}
        title={id ? "Edit Article" : "Create Article"}
      >
        <NewsForm
          title={title ? title: ""}
          detailedDescription={detailedDescription ? detailedDescription: ""}
          id={id}
          formButtonName={id ? "Edit" : "Create"}
          closeForm={onCancel}
        />
      </Modal>
    )
  }
}

ArticleModal.propTypes = {
  title: PropTypes.string,
  detailedDescription: PropTypes.string,
  id: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default ArticleModal;
