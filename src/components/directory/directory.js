import React, { Component } from "react";
import { render } from "@testing-library/react";
import styles from "./style.css";

export default class Directory extends Component {
    state = {
        nameAsc: true,
        makeAsc: true,
        yearAsc: true,
        modelAsc: true,
        statusAsc: true,
    }

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

    sortBy = (sortReq) => {
        let bool = this.state[sortReq+"Asc"];
        switch (sortReq) {
            case 'name':
                this.setState({ nameAsc: (!bool) });
                break;
            case 'make':
                this.setState({ makeAsc: !bool });
                break;
            case 'year':
                this.setState({ yearAsc: !bool });
                break;
            case 'model':
                this.setState({ modelAsc: !bool });
                break;
            case 'status':
                this.setState({ statusAsc: !bool });
                break;
            default:
                return
        }
        let arrSort = this.props.JSON;
        for (let x = 0; x < arrSort.length; x++) {
            for (let y = x + 1; y < arrSort.length; y++) {
                let temp1 = arrSort[x];
                let temp2 = arrSort[y];
                if (bool ? arrSort[x][sortReq] > arrSort[y][sortReq] : arrSort[x][sortReq] < arrSort[y][sortReq]) {
                    arrSort[x] = temp2;
                    arrSort[y] = temp1;
                }
            }
        }
        this.props.updateJSON(arrSort)
    }

    render() {
        return (
            <div className="container text-center">
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th><a href="#" onClick={() => this.sortBy("name")}>Name {this.state.nameAsc ? <i class="fas fa-sort-up"></i> :<i class="fas fa-sort-down"></i> }</a></th>
                            <th>Role</th>
                            <th><a href="#" onClick={() => this.sortBy("make")}>Make {this.state.makeAsc ? <i class="fas fa-sort-up"></i> :<i class="fas fa-sort-down"></i> }</a></th>
                            <th><a href="#" onClick={() => this.sortBy("model")}>Model {this.state.modelAsc ? <i class="fas fa-sort-up"></i> :<i class="fas fa-sort-down"></i> }</a></th>
                            <th><a href="#" onClick={() => this.sortBy("year")}>Year {!(this.state.yearAsc) ? <i class="fas fa-sort-up"></i> :<i class="fas fa-sort-down"></i> }</a></th>
                            <th><a href="#" onClick={() => this.sortBy("status")}>Car Status {this.state.statusAsc ? <i class="fas fa-sort-up"></i> :<i class="fas fa-sort-down"></i> }</a></th>
                        </tr>
                        {this.filterResults(this.props.JSON, this.props.query.toLowerCase()).map(person => {
                            return (
                                <tr>
                                    <td className={person.name.split(" ")[0]+"Img"}>
                                        <img  alt={person.name} src={`https://drive.google.com/thumbnail?id=${person.image}`} />
                                    </td>
                                    <td className={person.name.split(" ")[0]}>{person.name}</td>
                                    <td className={person.name.split(" ")[0]}>{person.role}</td>
                                    <td className={person.name.split(" ")[0]}>{person.make}</td>
                                    <td className={person.name.split(" ")[0]}>{person.model}</td>
                                    <td className={person.name.split(" ")[0]}>{person.year}</td>
                                    <td className={person.name.split(" ")[0]}>{person.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}