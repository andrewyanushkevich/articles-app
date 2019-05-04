import store from '@src/store';
import { addArticle, updateArticle } from '../actions/actions';

export const ARTICLES_PAGE_URL = '/articles';

export const add = (article, history) => (dispatch) => {
  /*try {
    const response = await fetch('http://localhost:8080/v1/article', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080/v1/article' },
      body: article,
    });
    alert(response);
    dispatch(addArticle(response));
    history.push(ARTICLES_PAGE_URL);
  } catch (err) {
    alert(err);
  }*/
  return fetch('http://localhost:8080/v1/article', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Accept-Encoding': 'gzip' },
    body: article,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Article has not been updated!');
  }, (networkError) => {
    alert(networkError.message);
  }).then((jsonResponse) => {
    dispatch(addArticle(jsonResponse));
    history.push('/articles');
  });
};

export function update(article, history) {
  fetch('http://localhost:8080/v1/articles/:id', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: article,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Article has not been updated!');
  }, (networkError) => {
    alert(networkError.message);
  }).then((jsonResponse) => {
    store.dispatch(updateArticle(jsonResponse));
    history.push('/articles');
  });
}
