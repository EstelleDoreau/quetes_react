import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingCartRedux/containers/ShoppingList';
import ProductsList from './ShoppingCartRedux/containers/ProductsList';
import Cart from './ShoppingCartRedux/components/Cart';
{ /*import ShoppingCart from './components/ShoppingCartReact/ShoppingCart';*/}
{ /*import Router from './components/navigation/Router';*/}
{ /*import Author from './components/Author';*/}
{ /*import StudentList from './components/StudentList';*/}
{ /*import Password from './components/Password';*/}
{ /*import MyTimer from './components/MyTimer';*/}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        { /*<Author name="Bob" />*/}
        { /*<StudentList />*/}
        { /*<Password />*/}
        { /*<MyTimer />*/}
        { /*<Router />*/}

        { /*<ShoppingCart />*/}

          <div>
    				<ProductsList />
    				<Cart />
            <ShoppingList />
    			</div>

      </div>
    );
  }
}

export default App;
