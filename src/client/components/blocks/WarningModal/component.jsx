import React, { Component } from "react";
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
    ) 
  }
}

WarningModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func
}

export default WarningModal;
