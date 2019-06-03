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
        const { history, id } = this.props;
        this.setState({
          visible: true
        })
        typeof id === 'undefined' ? history.push(`${NEWS_URL}/create`) : history.push(`${NEWS_URL}/${id}`);
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
        const { handleAddArticle, handleEditArticle, modalButtonName, formTitle, formButtonName, id } = this.props;
        const title = this.props.title || '';
        const body = this.props.body || '';
        return (
            <div>
                <Button onClick={this.showModal}>
                    {modalButtonName}
                </Button>
                <Modal
                visible={visible}
                footer={[
                <Button key="back" onClick={this.handleCancel}>
                Return
                </Button>,]}
                title={formTitle}
                >
                    <ArticleForm 
                    title={title}
                    body={body}
                    handleAddArticle={handleAddArticle}
                    handleEditArticle={handleEditArticle}
                    history={history}
                    formButtonName={formButtonName}
                    id={id}
                    closeForm={this.handleCancel}
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
