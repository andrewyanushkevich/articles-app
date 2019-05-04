import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container } from 'reactstrap';

import View from '../view-article/view';
import './article.css';

class Article extends Component {
  constructor(props) {
    super(props);
    this.editBtn = this.editBtn.bind(this);
    this.viewBtn = this.viewBtn.bind(this);
  }

  editBtn(e) {
    e.preventDefault();
    this.props.history.push(`/articles/${this.props.article._id}/edit`);
  }

  viewBtn() {
    ReactDOM.render(<View />, document.body);
  }

  render() {
    const article = this.props.article;

    return (
      <div className="article">
        <div className="article-id">{article._id}</div>
        <div className="article-title">{article.title}</div>
        <div className="article-body">{article.body}</div>
        <div className="article-buttons">
          <Container>
            <Button onClick={this.editBtn} type="button">Edit</Button>
          </Container>
          <Container>
            <View buttonLabel="view" article={article} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Article;
