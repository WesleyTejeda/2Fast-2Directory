import React from "react";

export default function Header() {
    return (
        <form className="text-center">
            <label>
                <span>Search: </span>
                <input type="text" name="name" />
            </label>
        </form>
    )
}