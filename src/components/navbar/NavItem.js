import React from "react";

export default function NavItem({ name }) {
    return(
        <a href={`/resume/${name}`}>
            <div>{name}</div>
        </a>
    )
}