import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteArticle } from '../actions/index';

// class ShoppingList extends React.Component {
// 	render() {
// 		const { articles, deleteArticle } = this.props;
// 		return (
// 			<div>
// 	      <ul>
// 					{articles.map((article) => (
// 						<li key={article.id}>
// 							<p>
// 	              id: {article.id}
// 	              <br />
// 								nom : {article.nom}
// 	              <br />
// 	              prix: {article.prix}
// 	              <br />
// 	              quantité : {article.qty}
// 	              <br />
// 	              total article : {article.prix * article.qty}
// 							</p>
// 							<button
// 								onClick={() =>
// 									deleteArticle(article)
// 								}
// 							>
// 								Supprimer
// 							</button>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		);
// 	}
// }

const ShoppingList = ({ articles, deleteArticle }) => {
	return (
		<div>
      <ul>
				{articles.map((article) => (
					<li key={article.id}>
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
								deleteArticle(article)
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
    articles: state.cart.listArticlesCart
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteArticle }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ShoppingList);
