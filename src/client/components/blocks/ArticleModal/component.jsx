import React, { Component } from 'react';
import NewsForm from 'client/components/forms/NewsForm';
import { Modal, Button } from 'antd';

class ArticleModal extends Component {
  render() {
    const { title, body, id, visible, onCancel } = this.props;
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
          body={body ? body: ""}
          id={id}
          formButtonName={id ? "Edit" : "Create"}
          closeForm={onCancel}
        />
      </Modal>
    )
  }
}

export default ArticleModal;
