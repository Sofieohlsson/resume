import React from "react";

import linkedin from "../../assets/images/LinkedIn_logo_initials.png"


export default function Footer() {
    return (
        <footer className="w-full bg-lightgrey border-gray-200 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap items-center justify-evenly mx-auto">
            <a href="https://www.linkedin.com/in/sofieohlsson/" target="_blank"><img src={linkedin} alt="linkedin logo" className="w-10 h-auto" /></a>
        </div>
        </footer>
    )
};