import React from "react";
import FadeIn from "react-fade-in"; 

import license from "../assets/images/license.jpg"; 
import animations from "../assets/images/animations.jpg"; 
import game from "../assets/images/game.jpg"; 
import react from "../assets/images/react.jpg"
import japan from "../assets/images/japan.jpg"

export default function Goals() {

    const text = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl"
    const container = "relative mb-7"; 
    const flexx = "flex justify-center"; 
    const imgstyle = "rounded-3xl opacity-50 hover:opacity-90"; 

    return (
        <div className="m-auto md:w-[60%] min-h-screen px-2 md:px-10">
            <FadeIn>
            <div className="text-3xl flex justify-center mt-5 mb-7 text-center">My top five things I strive to achieve before 2028</div>

            <div className="text-center">

                <div className={container}>
                    <section className={flexx}><img src={game} alt="old school gaming setup" className={imgstyle}></img></section>
                    <div className={text}>Code my own video game</div>
                </div>

                <div className={container}>
                    <section className={flexx}><img src={animations} alt="learning to code" className={imgstyle}></img></section>
                    <div className={text}>Learn advanced website animations</div>
                </div>

                <div className={container}>
                    <section className={flexx}><img src={japan} alt="neon lights town district in japan" className={imgstyle}></img></section>
                    <div className={text}>Visit Japan</div>
                </div>

                <div className="relative pb-5">
                    <section className={flexx}><img src={license} alt="car with dog out the window" className={imgstyle}></img></section>
                    <div className={text}>Get my license</div>
                </div>

                <div className={container}>
                    <section className={flexx}><img src={react} alt="code inspired" className={imgstyle}></img></section>
                    <div className={text}>Master React</div>
                </div>
                
            </div>
            </FadeIn>
        </div>
    )
}