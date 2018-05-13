import React, {Component} from 'react';

class MyTimer extends Component {
  constructor(props){
		super(props)
		this.state = {
      timer: 0,
      interval: f=>f
    }
		this.increment = this.increment.bind(this)
	}

	increment(){
		const { timer } = this.state
		this.setState({timer: timer + 1 })
    console.log('un update a eu lieu')
	}
	componentDidMount(){
		this.setState({interval: setInterval( this.increment, 1000 )})

	}
	render(){
		return(
			<div>{this.state.timer}</div>
		)
	}
}
export default MyTimer;
