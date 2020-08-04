import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Directory from './components/directory';
const JSON = require("./JSON/characters.json");


class App extends Component {
    constructor () {
      super();
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    state = {
      query: "",
      JSON
    }
  

    handleInputChange = value => {
      this.setState({
          query: value
      });
    }

  render() {
    return (
      <>
      <Nav />
      <Header query={this.state.query} handleInputChange={this.handleInputChange}/>
      <Directory query={this.state.query} JSON={this.state.JSON} />
        </>
    );
  } 
}

export default App;
