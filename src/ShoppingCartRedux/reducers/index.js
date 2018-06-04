import { combineReducers } from 'redux';

import ArticlesReducer from './articles';
import CartReducer from './cart';

// combine all reducers
const allReducers = combineReducers({
  articles: ArticlesReducer,
  cart: CartReducer,
});

export default allReducers;
