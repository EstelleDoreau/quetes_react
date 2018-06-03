import { combineReducers } from 'redux';

import ArticlesReducer from './articles';
import ActiveArticleReducer from './activeArticle';

// combine all reducers
const allReducers = combineReducers({
  articles: ArticlesReducer,
  activeArticle: ActiveArticleReducer
})

export default allReducers;
