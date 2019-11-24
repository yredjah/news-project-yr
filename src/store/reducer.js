// == Initial State
const initialState = {

  articles: [], 

  searchByKeyWord: '',
  searchByContry: '',
  searchByDate: '',
};

// == Types
export const ON_SUBMIT_SEARCH = 'ON_SUBMIT_SEARCH';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
const ON_SET_ARTICLE = 'ON_SET_ARTICLE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case ON_SET_ARTICLE:
      return {
        ...state,
        articles: action.articles, 
      };

    default:
      return state;
  }
};

// == Action Creators
export const onInputChange = (name, value) => ({
  type: ON_INPUT_CHANGE,
  name,
  value,
});

export const onSubmitSearch = () => ({
  type: ON_SUBMIT_SEARCH,
});

export const setArticle = articles => ({
  type: ON_SET_ARTICLE,
  articles, 
}); 


// == Selectors


// == Export
export default reducer;
