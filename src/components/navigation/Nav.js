import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import RNC from 'react-native-css';


class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
    this.props.history.listen(() => {
      // view new URL
      console.log('New URL', this.props.history.location.pathname);
    });
  }


  render() {
    const styles = RNC`
    .link {
      padding: 10px;
      color: black;
    }`
    return (
      <div>
        <NavLink exact style={styles.link} activeStyle={{ color: 'red' }} to="/"> Accueil </NavLink>
        <NavLink style={styles.link} activeStyle={{ color: 'red' }} to="/notre-histoire"> Notre histoire </NavLink>
      </div>
    );
  }
}


export default withRouter(Nav);
