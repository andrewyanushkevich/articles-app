import React, { Component } from "react";
import { Modal } from 'antd';

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
    ) 
  }
}

export default WarningModal;
