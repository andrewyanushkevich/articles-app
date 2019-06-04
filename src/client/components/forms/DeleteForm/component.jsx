import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { NEWS_PER_PAGE, NEWS_URL } from 'client/constants';
import Div from './styles';

class DeleteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        }
    }

    handleDelete = () => {
        const { page } = this.state;
        const { id, handleDeleteArticle, history } = this.props;
        this.setState({
            visible: false,
        })
        handleDeleteArticle(id, page);
        history.goBack();
    }

    handleCancel = () => {
        const { history } = this.props;
        this.setState({
            visible: false,
        })
        history.goBack();
    }

    showModal = () => {
        const { history, location, id } = this.props;
        const url = new URLSearchParams(location.search);
        const page = url.get("skip") / NEWS_PER_PAGE;
        this.setState({
            visible: true,
            page,
        })
        history.push(`${NEWS_URL}/${id}`);
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
                    <Div>
                        Are you sure ?
                    </Div>
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
