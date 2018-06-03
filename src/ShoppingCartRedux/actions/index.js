export const addArticle = (article) => {
  let { articlesList, panier, nombreArticle, total } = {...this.state};
  // si l'article existe dans le panier, on incrémente sa quantité
  const find = panier.find(articlePanier => articlePanier.id === article.id);
  if (find) {
    panier.map(articlePanier => {
      if (articlePanier.id === article.id) {
        return articlePanier.qty++;
      }
    })
  }
  // sinon on l'ajoute
  else {
    panier.push({
      id: article.id,
      prix: article.prix,
      nom: article.nom,
      qty: 1,
    })
  }
  // on décrémente le stock
  articlesList.map(articleList => {
    if (articleList.id === article.id) {
      return articleList.stock--;
    }
  })
  nombreArticle++;
  total += article.prix;
  this.setState({
    articlesList,
    panier,
    nombreArticle,
    total,
  });

  return {
    type: 'SELECTED_ARTICLE',
    article,
  }
};

export const deleteArticle = (article, indexPanier) => {
  let { articlesList, panier, nombreArticle, total } = {...this.state};
  // si l'article existe dans le panier et que sa quantité est supérieur à 1, on décrémente sa quantité
  const find = panier.find(articlePanier => articlePanier.id === article.id && articlePanier.qty > 1);
  if (find) {
    panier.map(articlePanier => {
      if (articlePanier.id === article.id) {
        return articlePanier.qty--;
      }
    })
  }
  // sinon on le supprime
  else {
    panier.splice(indexPanier, 1);
  }
  // on incrémente le stock
  articlesList.map(articleList => {
    if (articleList.id === article.id) {
      return articleList.stock++;
    }
  })
  nombreArticle--;
  total -= article.prix;
  this.setState({
    panier,
    nombreArticle,
    total,
  });

  return {
    type: 'UNSELECTED_ARTICLE',
    article,
    indexPanier,
  }
};
