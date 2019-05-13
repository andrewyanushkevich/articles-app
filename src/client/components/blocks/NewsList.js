import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button, List, Pagination } from 'antd';

import NewsPreview from './NewsPreview';
import './NewsList.css';

class NewsList extends Component {
  constructor(props) {
    super(props);
  }

  handlePageChange = (e) => {
      const currentPage = e;
      const { history } = this.props;
      fetch(`/api/articles/page=${currentPage}&itemsPerPage=5`, {
        method: 'GET'
      }).then((res) => {
          if(res.ok) {
              return res.json();
          }
      }).then((jsonresponse) => {
        history.push(`/news?skip=${currentPage * 10}`);
      })
  }

  render() {
    return (
        <div className="news-list">
            <List 
                size='large'
                dataSource={articles}
                renderItem={(item) => (<List.Item><NewsPreview article={item}/></List.Item>)}
            />
            <Pagination defaultCurrent={1} total={50} onChange={e => this.handlePageChange(e)}/>
        </div>
    );
  }
}

export default withRouter(NewsList);
