import axios from 'axios';
import {
  ON_SUBMIT_SEARCH,
} from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  // console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  next(action);
  // POUR EXEMPLE: Requetes avec Axios
  // Je dois réagir uniquement à certains types d'action
  switch (action.type) {
    
    case ON_SUBMIT_SEARCH:
      // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.get('https://newsapi.org/v2/everything?' + 
      'country=${searchByContry}' + 
      'q=${searchByKeyWord}' +
      'from=${searchByDate}' +
      'sortBy=popularity&' +
      'apiKey=803fdd9b8517490d89d8c85ade466b8d', {
        searchByKeyWord: store.getState().searchByKeyWord,
        searchByContry: store.getState().searchByContry,
        searchByDate: store.getState().searchByDate,
      })
        .then((response) => {
          // console.log(response.data);
          return response.json()
        })
        .then((result) => {
          this.setState({ articles: result.articles });
          console.log(result);
      })
        // en cas d'echec : catch
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
