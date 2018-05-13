import React, {Component} from 'react';

class Author extends Component {
  fonctionAuClic = () => {
	alert("It's " + this.props.name); 
  }

  render() {
	return(
		<button onClick={this.fonctionAuClic}>Who is the author ?</button>
	  );
  }
}

export default Author;