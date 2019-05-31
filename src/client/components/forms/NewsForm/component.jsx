import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ArticleForm from './form';
import { NEWS_URL } from 'client/constants';

class WrappedForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          visible: false
        }
    }
    
    showModal = () => {
        const { history } = this.props;
        this.setState({
          visible: true
        })
        history.push(`${NEWS_URL}/create`);
    }

    handleCancel = () => {
        const { history } = this.props;
        this.setState({
            visible: false
        })
        history.goBack();
    }
    
    render() {
        const { visible } = this.state;
        const { handleAddArticle, handleEditArticle } = this.props;
        const title = this.props.title || '';
        const body = this.props.bosy || '';
        return (
            <div>
                <Button onClick={this.showModal}>
                    Add Article
                </Button>
                <Modal
                visible={visible}
                footer={[
                <Button key="back" onClick={this.handleCancel}>
                Return
                </Button>,]}
                onCancel={this.handleCancel}
                title="Create Article"
                okText="Create"
                >
                    <ArticleForm 
                    onCancel={this.handleCancel}
                    title={title}
                    body={body}
                    handleAddArticle={handleAddArticle}
                    handleEditArticle={handleEditArticle}
                    history={history}
                />
                </Modal>
            </div>
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
