import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Directory from './components/directory';
const JSON = require("./JSON/characters.json");


class App extends Component {
  state = {
      query: "",
      JSON
  }

  render() {
    return (
      <>
      <Nav />
      <Header state={this.state.query}/>
      <Directory state={this.state.query} JSON={this.state.JSON} />
        </>
    );
  } 
}

export default App;
