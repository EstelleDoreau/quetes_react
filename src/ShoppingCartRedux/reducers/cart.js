const initialState = {
  listArticlesCart: [],
  nbArticles: 0,
  total: 0,
};

const addArticle = (state, article) => {
  const listArticlesCart = [...state.listArticlesCart];
  const find = listArticlesCart.find(articleCart => articleCart.id === article.id);
  if (find) {
    listArticlesCart.map(articleCart => {
      if (articleCart.id === article.id) {
        articleCart.qty++;
      }
      return articleCart;
    })
  }
  // sinon on l'ajoute
  else {
    listArticlesCart.push({
      id: article.id,
      prix: article.prix,
      nom: article.nom,
      qty: 1,
    })
  }

  return {
    ...state,
    listArticlesCart,
    nbArticles: ++state.nbArticles,
    total: state.total + article.prix,
  }
}

const deleteArticle = (state, article) => {
  const listArticlesCart = [...state.listArticlesCart];
  // si l'article existe dans le panier et que sa quantité est supérieur à 1, on décrémente sa quantité
  const find = listArticlesCart.find(articleCart => articleCart.id === article.id && articleCart.qty > 1);
  if (find) {
    listArticlesCart.map(articleCart => {
      if (articleCart.id === article.id) {
        articleCart.qty--;
      }
      return articleCart;
    })
  }
  // sinon on le supprime
  else {
    const indexCart = listArticlesCart.indexOf(listArticlesCart.find(articleCart => articleCart.id === article.id && articleCart.qty === 1));
    listArticlesCart.splice(indexCart, 1);
  }

  return {
    ...state,
    listArticlesCart,
    nbArticles: --state.nbArticles,
    total: state.total - article.prix,
  }
}

const panier = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return addArticle(state, action.article);
    case 'DELETE_ARTICLE':
      return deleteArticle(state, action.article);
    default:
      return state;
  }
}

export default panier;
