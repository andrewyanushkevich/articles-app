import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

class NewsPreview extends Component {

    render() {
        const { article } = this.props;
        return (<div>
                    <div>{article.title}</div>
                    <div>
                        {article.body}
                    </div>
                    <div>
                        <Button>View</Button>
                    </div>
                </div>
        );
    }
}

NewsPreview.propTypes = {
    article: PropTypes.object
}

export default NewsPreview;