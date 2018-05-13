import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './../Home';
import History from './../History';
import Nav from './Nav';

class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <BrowserRouter>
              <div>
                  <Nav />

                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/notre-histoire" component={History} />
                  </Switch>
              </div>
          </BrowserRouter>
        );
    }
};

export default Router;
