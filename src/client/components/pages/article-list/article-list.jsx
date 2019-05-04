import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from '../article/article';
import './article-list.css';

export class List extends Component {
  constructor(props) {
    super(props);

    this.createBtn = this.createBtn.bind(this);
  }

  createBtn() {
    this.props.history.push('/articles/create');
  }

  render() {
    const { history } = this.props;
    return (
      <div className="article-list">
        <div className="create-btn">
          <button onClick={this.createBtn} type="button">Create</button>
        </div>
        <div>
          {this.props.articles.map(item => (
            <Article
              article={item}
              history={history}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

export default connect(mapStateToProps)(List);
