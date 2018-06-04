export const addArticle = (article) => {
  return {
    type: 'ADD_ARTICLE',
    article,
  }
};

export const deleteArticle = (article) => {
  return {
    type: 'DELETE_ARTICLE',
    article,
  }
};
