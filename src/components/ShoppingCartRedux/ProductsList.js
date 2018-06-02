import React, { Component } from "react";

class ProductsList extends Component {
	render() {
		const articlesList = this.props.articlesList;
		return (
			<div>
				<ul>
					{articlesList.map((article) => (
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
									this.props.onAddArticle(article)
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
}

export default ProductsList;
