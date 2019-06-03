import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import NewsForm from 'client/components/forms/NewsForm';

class NewsPreview extends Component {

    render() {
        const { article, modalButtonName, formTitle, formButtonName } = this.props;
        return (
            <div>
               <div>{article.title}</div>
                <div>
                    {article.body}
                </div>
                <div>
                    <Button>View</Button>
                </div>
                <NewsForm 
                modalButtonName={modalButtonName} 
                formTitle={formTitle}
                formButtonName={formButtonName}
                title={article.title}
                body={article.body}
                id={article._id}/>
            </div>
        );
    }
}

NewsPreview.propTypes = {
    article: PropTypes.object
}

export default NewsPreview;
