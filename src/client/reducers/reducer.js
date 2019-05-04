const ADD_ARTICLE = 'ADD_ARTICLE';
let newState = {};

const reducer = (state, action) => {
  switch (action.type) {
  case ADD_ARTICLE:
    state.articles.push(action.article);
    newState = state;
    return newState;
  default: return state;
  }
};

export { ADD_ARTICLE, reducer };
