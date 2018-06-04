const initialState = {
  listArticles: [
    {
      id: 1,
      prix: 10,
      nom: "Orange",
      stock: "1"
    },
    {
      id: 2,
      prix: 20,
      nom: "Banane",
      stock: "2"
    },
    {
      id: 3,
      prix: 30,
      nom: "Mangue",
      stock: "3"
    },
    {
      id: 4,
      prix: 40,
      nom: "Citron",
      stock: "4"
    }
  ],
};

const addArticle = (state, article) => {
  const listArticles = [...state.listArticles];
  // on décrémente le stock
  listArticles.map(listArticle => {
    if (listArticle.id === article.id) {
      listArticle.stock--;
    }
    return listArticle;
  })
  return {
    ...state,
    listArticles,
  }
}

const deleteArticle = (state, article) => {
  const listArticles = [...state.listArticles];
  // on incrémente le stock
  listArticles.map(listArticle => {
    if (listArticle.id === article.id) {
      listArticle.stock++;
    }
    return listArticle;
  })
  return {
    ...state,
    listArticles,
  }
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return addArticle(state, action.article);
    case 'DELETE_ARTICLE':
      return deleteArticle(state, action.article);
    default:
      return state;
  }
}

export default articles;
