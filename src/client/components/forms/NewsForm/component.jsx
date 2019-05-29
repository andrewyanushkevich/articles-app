import React, { Component } from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

import WrappedForm from './form';

class NewsForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          visible: false
        }
    }
    
    showModal = () => {
        this.setState({
          visible: true
        })
        const { changeUrl } = this.props;
        changeUrl();
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
        const { changeUrlBack } = this.props;
        changeUrlBack();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = this.formRef.props.form;
        let submit;
        const { id } = this.props;
        if(typeof id === 'undefined') {
            submit = this.props.handleAddArticle;
        } else {
            submit = this.props.handleEditArticle;
        }
        form.validateFields((err, values) => {
            if(err) return;
            submit(values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };


    saveFormRef = formRef => {
        this.formRef = formRef;
    };
    
    render() {
        const { visible } = this.state;
        const title = this.props.title || '';
        const body = this.props.bosy || '';
        return (
            <div>
                <Button onClick={this.showModal}>
                    Add Article
                </Button>
                <WrappedForm 
                wrappedComponentRef={this.saveFormRef}
                visible={visible}  
                onCancel={this.handleCancel}
                handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default withRouter(NewsForm);
