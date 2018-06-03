const initialState = {
  panier: [],
  nombreArticle: 0,
  total: 0
};

const activeArticle = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_ARTICLE':
      return { ...state, article: action.article };
    case 'UNSELECTED_ARTICLE':
      return { ...state, article: action.article };
    default:
      return state;
  }
}

export default activeArticle;
