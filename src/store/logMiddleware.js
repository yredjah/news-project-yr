import axios from 'axios';
import {
  ON_SUBMIT_SEARCH,
  setArticle, 
} from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  next(action);
  switch (action.type) {
    
    case ON_SUBMIT_SEARCH:
      const  searchByKeyWord = store.getState().searchByKeyWord;
      const  searchByContry = store.getState().searchByContry;
      const  searchByDate= store.getState().searchByDate;
      axios.get('https://newsapi.org/v2/everything?' + 
      `language=${searchByContry}&` + 
      `q=${searchByKeyWord}&` +
      `from=${searchByDate}&` +
      'sortBy=popularity&' +
      'apiKey=803fdd9b8517490d89d8c85ade466b8d')
        /*.then((response) => {
          return response.json()
        })*/
        .then((result) => {
          store.dispatch(setArticle(result.data.articles));
          console.log(result);
      })
        .catch((error) => {
          console.error(error.message);
          console.error(error.response);
        });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
