import React, { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

class WarningModal extends Component {
  render() {
    const { visible, onCancel, onOk } = this.props;
    return (
      <Modal
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
      >
        <p>
            Are you sure ?
        </p>
      </Modal>
    );
  }
}

WarningModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
};

export default WarningModal;
