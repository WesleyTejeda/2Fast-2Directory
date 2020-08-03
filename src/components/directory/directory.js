import React from "react";
const JSON = require("../../JSON/characters.json");

export default function Directory() {
    return (
        <div className="container">
            <table style={{width:"100%"}}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Car Status</th>
                </tr>
                {JSON.map(person => {
                    return (
                        <tr>
                            <td>
                                {/* <image src={require(person.image)}/> */}
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
            </table>
        </div>
    );
}