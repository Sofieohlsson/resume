import React from "react";

export default function NavItem({ name }) {
    return(
        <a href={`${name}`}>
            <div>{name}</div>
        </a>
    )
}