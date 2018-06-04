import React from "react";
import { connect } from 'react-redux';

const Cart = ({ nbArticles, total }) => {
	return (
		<div>
			<h1>Mon panier</h1>
			<p>Nombre article : {nbArticles}</p>
			<p>Total : {total} €</p>
		</div>
	);
}

// class Cart extends React.Component {
// 	render() {
// 		const { nbArticles, total } = this.props;
// 		return (
// 			<div>
// 				<h1>Mon panier</h1>
// 				<p>Nombre article :{nbArticles}</p>
// 				<p>Total : {total} €</p>
// 			</div>
// 		);
// 	}
// }

function mapStateToProps(state) {
  return {
		nbArticles: state.cart.nbArticles,
    total: state.cart.total,
  };
}

export default connect(mapStateToProps)(Cart);
