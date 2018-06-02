import React, { Component } from "react";

class Cart extends Component {
	render() {
		return (
			<div>
				<h1>Mon panier</h1>
				{/*<p>{JSON.stringify(this.props.panier, 1, 1)}</p>*/}
				<p>Nombre article :{this.props.articles}</p>
				<p>Total : {this.props.total} €</p>
			</div>
		);
	}
}

export default Cart;
