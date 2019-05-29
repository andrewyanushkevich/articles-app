import React, { Component } from 'react';
import { Input, Form, Modal } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class ArticleForm extends Component {

    render() {
        const { form, visible, onCancel, handleSubmit } = this.props;
        const { getFieldDecorator } = form;
        return(
            <Modal
            visible={visible}  
            onCancel={onCancel}
            onOk={handleSubmit}
            title="Create Article"
            okText="Create"
            >
                <Form>
                    <FormItem label="Title" >
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input article title' }],
                        })(<Input/>)}
                    </FormItem>
                    <FormItem label="Body">
                        {getFieldDecorator('body', {
                            rules: [{ required: true, message: 'Please input article body' }],
                        })(<Input.TextArea autosize={true} />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

const WrappedForm = Form.create({name: 'News Form'})(ArticleForm);

export default WrappedForm;
