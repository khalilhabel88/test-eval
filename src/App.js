import React from 'react';
import './App.css';
import CartList from './components/CartList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListPosts from './components/ListPosts';
import DetailsList from './components/DetailsList';
function App() {
  return (
    <div className="head">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={CartList} />
        <Route path="/posts/:id" component={ListPosts}/>
        <Route path="/details/:id" component={DetailsList}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;