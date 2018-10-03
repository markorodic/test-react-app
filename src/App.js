import React, { Component } from 'react';
import './App.css';
import Product from './components/Product/index.js';
import Account from './components/Account/index.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/account" component={Account}></Route>
        <Route path="/products/:productId" component={Product}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>
)

class Home extends Component {
  navigateToLogin() {
    this.props.history.push('/login')
  }
  render() {
    return (
      <div>
        <button onClick={this.navigateToLogin.bind(this)}>Login</button>
      </div>
    );
  }
}

class Login extends Component {
  navigateToAccount() {
    this.props.history.push('/account')
  }
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <button onClick={this.navigateToAccount.bind(this)}>Account</button>
      </div>
    );
  }
}

export default Router;
