import React, { Component } from "react";

export default class Header extends Component {
    state= {
        query: this.props.query
    }

     updateQuery = event => {
         this.setState({[event.target.name]: event.target.value})
         this.props.handleInputChange(event.target.value);
     }

    render() {
        return (
            <form className="text-center form">
                <label>
                    <span>Search: </span>
                    <input type="text" name="query" placeholder="Search any column" value={this.state.query} onChange={this.updateQuery} />
                </label>
            </form>
        )
    }
}