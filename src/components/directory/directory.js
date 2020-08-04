import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class Directory extends Component {

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
                    {this.props.JSON.map(person => {
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