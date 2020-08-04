import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class Directory extends Component {

    filterResults = (JSON, query) => {

        return JSON.filter(person => 
            (person.name.toLowerCase().includes(query) || 
            person.role.toLowerCase().includes(query) || 
            person.make.toLowerCase().includes(query) || 
            person.model.toLowerCase().includes(query) || 
            person.year.toLowerCase().includes(query) || 
            person.status.toLowerCase().includes(query))
        );
    }

    render() {
        return (
            <div className="container text-center">
                <table style={{width:"100%"}}>
                    <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Car Status</th>
                    </tr>
                    {this.filterResults(this.props.JSON, this.props.query.toLowerCase()).map(person => {
                        return (
                            <tr>
                                <td>
                                    <img alt={person.name} src={`https://drive.google.com/thumbnail?id=${person.image}`}/>
                                    </td>
                                <td>{person.name}</td>
                                <td>{person.role}</td>
                                <td>{person.make}</td>
                                <td>{person.model}</td>
                                <td>{person.year}</td>
                                <td>{person.status}</td>
                            </tr>
                            )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
    
}