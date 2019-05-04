import { createStore } from 'redux';
import { reducer } from './reducers/reducer';

const initialState = {
  articles: [{
    _id: 1, title: 'Article Title', body: 'Body', createdAt: new Date(), unpdatedAt: new Date(),
  }],
};
const store = createStore(reducer, initialState);

export default store;
