// == Initial State
const initialState = {
  searchByKeyWord: '',
  searchByContry: '',
  searchByDate: '',
};

// == Types
export const ON_SUBMIT_SEARCH = 'ON_SUBMIT_SEARCH';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
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


// == Selectors


// == Export
export default reducer;
