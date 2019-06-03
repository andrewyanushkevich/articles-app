import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class DeleteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    handleDelete = () => {
        const { id, handleDeleteArticle } = this.props;
        this.setState({
            visible: false,
        })
        handleDeleteArticle(id);
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        })
    }
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    render() {
        const { visible } = this.state;
        return (
            <div>
                <Button onClick={this.showModal}>
                    Delete
                </Button>
                <Modal 
                onOk={this.handleDelete}
                onCancel={this.handleCancel}
                okText="Yes"
                cancelText="No"
                visible={visible}
                >
                    <div>
                        Are you sure ?
                    </div>
                </Modal>
            </div>
        )
    }
}

DeleteForm.propTypes = {
    id: PropTypes.string,
    handleDeleteArticle: PropTypes.func,
}

export default withRouter(DeleteForm);
