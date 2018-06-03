import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteArticle } from '../actions/index';

const ShoppingList = ({ panier, deleteArticle }) => {
	return (
		<div>
      <ul>
				{panier.map((article, i) => (
					<li key={i}>
						<p>
              id: {article.id}
              <br />
							nom : {article.nom}
              <br />
              prix: {article.prix}
              <br />
              quantité : {article.qty}
              <br />
              total article : {article.prix * article.qty}
						</p>
						<button
							onClick={() =>
								deleteArticle(article, i)
							}
						>
							Supprimer
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
  return {
    panier: state.panier
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteArticle }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ShoppingList);
