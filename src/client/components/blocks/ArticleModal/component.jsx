import React from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';

import NewsForm from 'client/components/forms/NewsForm';

const ArticleModal = (props) => {
  const { title, detailedDescription, id, visible, onCancel } = props;
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
        Cancel
        </Button>,
        <Button
          form="newsForm"
          htmlType="submit"
          key="submit"
        >
          {id ? 'Save' : 'Create'}
        </Button>]}
      title={id ? 'Edit Article' : 'Create Article'}
    >
      <NewsForm
        title={title || ''}
        detailedDescription={detailedDescription || ''}
        id={id}
        closeForm={onCancel}
      />
    </Modal>
  );
};

ArticleModal.propTypes = {
  title: PropTypes.string,
  detailedDescription: PropTypes.string,
  id: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ArticleModal;
