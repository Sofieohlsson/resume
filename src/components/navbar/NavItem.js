import React from "react";

export default function NavItem({ name }) {
    return(
        <a href={`$/cv/{name}`}>
            <div>{name}</div>
        </a>
    )
}