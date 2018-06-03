import React, { Component } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";


class ShoppingCart extends Component {
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
