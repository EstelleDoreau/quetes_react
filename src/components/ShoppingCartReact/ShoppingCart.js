import React, { Component } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";


class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  	this.state = {
      articlesList: [
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
  		panier: [],
  		nombreArticle: 0,
  		total: 0
  	};
    this.addArticle = this.addArticle.bind(this);
  }

	addArticle = (article) => {
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
	};

  deleteArticle = (article, indexPanier) => {
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
  };


	render() {
		return (
			<div>
				<ProductsList articlesList={this.state.articlesList} onAddArticle={this.addArticle} />
				<Cart
					panier={this.state.panier}
					articles={this.state.nombreArticle}
					total={this.state.total}
				/>
        <ShoppingList shoppingList={this.state.panier} onDeleteArticle={this.deleteArticle} />
			</div>
		);
	}
}

export default ShoppingCart;
