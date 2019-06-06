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
        <div>
            Are you sure ?
        </div>
      </Modal>
    ) 
  }
}

export default WarningModal;
