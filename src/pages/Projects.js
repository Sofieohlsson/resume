import React from "react";
import FadeIn from "react-fade-in"; 

export default function Projects() {

    const container = "mb-7";
    const textsize = "text-2xl text-emerald-900"; 

    return (
        <div className="m-auto md:w-[60%] min-h-screen px-2 md:px-10">
            <FadeIn>
            <div className="mt-5 mb-7">
                <div className="text-3xl text-emerald-800">Sofie Ohlsson</div>
                <div>Frontend developer</div>
            </div>

            <div className={container}>
                <div className={textsize}>Skills</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>Javascript</div>
                <div>React</div>
            </div>

            <div className={container}>
                <div className={textsize}>Languages</div>
                <div>Swedish</div>
                <div>English</div>
            </div>

            <div className={container}>
                <div className={textsize}>Education</div>
                <div>
                    <div className="text-sm">Nackademin, Stockholm - Frontend developer</div>
                    <div className="text-sm">August 2018 - May 2020</div>
                    <div>Studied coding at Nackademin for two years.</div>
                </div>

            </div>

            <div className={container}>
                <div className={textsize}>Experience</div>
                <div>
                    <div className="text-sm">Alphaspel, Stockholm - IT/sales</div>
                    <div className="text-sm">July 2020 - January 2023</div>
                    <div>I graduated as a frontend developer during the first summer of the pandemic. A lot of companies had just started working remotely and weren't looking to hire. Alphaspel did not have an IT-department when I applied but offered a role that would be 50% IT and 50% in sales.</div>
                </div>
            </div>

            <div className="pb-4">
                <div className={textsize}>Prior my coding carrier</div>
                <div>Before I got into coding and found joy in building websites, I tried a few different paths. From office assistant to makeup artist. I also lived in Sydney for a while, where I found my passion for hiking. Frontend combines my interest for technology and creativity, and with an ever changing line of work I can see myself doing this in the long run.</div>
            </div>
            </FadeIn>

        </div>
    )
}

