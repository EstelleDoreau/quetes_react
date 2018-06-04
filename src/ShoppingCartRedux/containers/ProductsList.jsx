import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addArticle } from '../actions/index';

// class ProductsList extends React.Component {
// 	render() {
// 		const { articles, addArticle } = this.props;
// 		return (
// 			<div>
// 				<ul>
// 					{articles.map(article => (
// 						<li key={article.id}>
// 							<p>
// 								id: {article.id}
// 								<br />
// 								nom : {article.nom}
// 	              <br />
// 	              stock : {article.stock}
// 	              <br />
// 								prix: {article.prix}
// 							</p>
// 							{article.stock > 0 ? <button
// 								onClick={() =>
// 									addArticle(article)
// 								}
// 							>
// 								Ajouter
// 							</button> : <button disabled>Plus de stock</button>}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		);
// 	}
// }

const ProductsList = ({ articles, addArticle }) => {
	return (
		<div>
			<ul>
				{articles.map(article => (
					<li key={article.id}>
						<p>
							id: {article.id}
							<br />
							nom : {article.nom}
              <br />
              stock : {article.stock}
              <br />
							prix: {article.prix}
						</p>
						{article.stock > 0 ? <button
							onClick={() =>
								addArticle(article)
							}
						>
							Ajouter
						</button> : <button disabled>Plus de stock</button>}
					</li>
				))}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
  return {
    articles: state.articles.listArticles
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addArticle }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductsList);
