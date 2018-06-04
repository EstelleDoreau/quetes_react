import React, { Component } from "react";
import ProductsList from "./../containers/ProductsList";
import Cart from "./../containers/Cart";
import ShoppingList from "./../containers/ShoppingList";


class ShoppingCart extends Component {
	render() {
		return (
			<div>
				<ProductsList />
				<Cart />
        <ShoppingList />
			</div>
		);
	}
}

export default ShoppingCart;
