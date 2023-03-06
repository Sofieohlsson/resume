import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in"; 

export default function PageNotFound() {
    return (
        <div className="m-auto md:w-[60%] min-h-screen px-2 md:px-10 text-center">
            <FadeIn>
            <div className="text-8xl mt-10">404</div>
            <div className="text-4xl">Ooops, page not found</div>
            <Link to="/"><button className="mt-10 p-4 bg-mediumblue hover:bg-darkblue rounded-2xl text-slate-700">Go Home</button></Link>
            </FadeIn>
        </div>
    ); 
}