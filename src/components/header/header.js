import React from "react";

export default function Header() {
    return (
        <form className="text-center">
            <label>
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}