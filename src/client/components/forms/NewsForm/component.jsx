import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import { withRouter } from 'react-router-dom';

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
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }


    render() {
        const { visible } = this.state;
        const title = this.props.title || '';
        const body = this.props.bosy || '';
        return (
            <div>
            <Button onClick={this.showModal}>
                Create Article
            </Button>
            <Modal
            visible={visible}  
            onCancel={this.handleCancel}
            >
                <div>
                    <span>
                        Title
                    </span>
                    <Input size="large" defaultValue={title} >
                    </Input>
                </div>
                <div>
                    <span>
                        Body
                    </span>
                    <Input.TextArea defaultValue={body} autosize={true}>
                    </Input.TextArea>
                </div>
            </Modal>
            </div>
        );
    }
}

export default withRouter(NewsForm);
