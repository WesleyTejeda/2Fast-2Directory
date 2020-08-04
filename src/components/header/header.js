import React, { Component } from "react";

export default class Header extends Component {
    state = {
        query: this.props.state.query
    }
      
    handleInputChange = event => {
    console.log(event.target);
    this.setState({
        [event.target.name]: event.target.value
    });
    }
    
    
    handleSubmit = event => {
    event.preventDefault();
    };

    render() {
    return (
        <form className="text-center form">
            <label>
                <span>Search: </span>
                <input type="text" name="query" placeholder="Search any column" value={this.state.query} onChange={this.handleInputChange} />
            </label>
        </form>
    )
    }
}