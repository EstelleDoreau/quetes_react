import React, {Component} from 'react';

class Student extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [{
			    name: 'Bruce Banner',
			    alias: 'Hulk',
			    age: 28
			},{
			    name: 'Tony Stark',
			    alias: 'Iron Man',
			    age: 35
			},{
			    name: 'Henry Pym',
			    alias: 'Ant Man',
			    age: 29
			},{
			    name: 'Peter Parker',
			    alias: 'Spiderman',
			    age: 22
			},{
			    name: 'Peter Quill',
			    alias: 'Star Lord',
			    age: 26
			},{
			    name: 'James Howlett',
			    alias: 'Wolverine',
			    age: 33
			},{
			    name: 'Matt Murdok',
			    alias: 'Daredevil',
			    age: 34
			}]
		}
	}

	sortNameAsc = () => {
		let tab = this.state.list;
		tab.sort( function(a, b){
			return a.name > b.name
		});
		this.setState({
			list: tab
		})
	}

	sortAgeAsc = () => {
		let tab = this.state.list;
		tab.sort( function(a, b){
			return a.age - b.age
		});
		this.setState({
			list: tab
		})
	}

	sortAliasAsc = () => {
		let tab = this.state.list;
		tab.sort( function(a, b){
			return a.alias > b.alias
		});
		this.setState({
			list: tab
		})
	}

	sortNameDesc = () => {
		let tab = this.state.list;
		tab.sort( function(a, b){
			return a.name < b.name
		});
		this.setState({
			list: tab
		})
	}

	sortAgeDesc = () => {
		let tab = this.state.list;
		tab.sort( function(a, b){
			return a.age + b.age
		});
		this.setState({
			list: tab
		})
	}

	sortAliasDesc = () => {
		let tab = this.state.list;
		tab.sort( function(a, b){
			return a.alias < b.alias
		});
		this.setState({
			list: tab
		})
	}

  	render() {
		return(
			<div>
				<button onClick={this.sortNameAsc.bind(this)}>Trier par nom ASC</button>
				<button onClick={this.sortAgeAsc.bind(this)}>Trier par age ASC</button>
				<button onClick={this.sortAliasAsc.bind(this)}>Trier par alias ASC</button>

				<button onClick={this.sortNameDesc.bind(this)}>Trier par nom DESC</button>
				<button onClick={this.sortAgeDesc.bind(this)}>Trier par age DESC</button>
				<button onClick={this.sortAliasDesc.bind(this)}>Trier par alias DESC</button>

				<ul>
					{this.state.list.map(x => {
	                    return <li>
							<p>{x.name}</p>
							<p>{x.alias}</p>
							<p>{x.age}</p>
						</li>;
	                })}
				</ul>
			</div>
		);
	}
}

export default Student;