import React, { Component } from 'react';
import { Button } from 'antd';

import './NewsPreview.css';

class NewsPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { article } = this.props;
        return (<div className="news">
            <p>{article.title}</p>
            <div>
                {article.body}
            </div>
            <div>
                <Button>View</Button>
            </div>
        </div>);
    }
}

export default NewsPreview;