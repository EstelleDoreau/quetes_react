import React, { Component } from "react";

class ShoppingList extends Component {
  render() {
    const shoppingList = this.props.shoppingList;
		return (
			<div>
        <ul>
					{shoppingList.map((article, i) => (
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
									this.props.onDeleteArticle(article, i)
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
}

export default ShoppingList;
