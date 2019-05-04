import { ADD_ARTICLE } from 'reducers/reducer';

const addArticle = article => ({
  type: ADD_ARTICLE,
  article,
});
const updateArticle = article => ({
  type: 'UPDATE_ARTICLE',
  article,
});

export { addArticle, updateArticle };
