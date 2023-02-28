import React from "react";
import FadeIn from 'react-fade-in';

import profilepic from "../assets/images/profilepic.jpg"; 

export default function Home() {
    return (
        
        <div className="m-auto md:w-[60%] min-h-screen px-2 md:px-10">
            <FadeIn>
            <section className="flex justify-center">
            <img src={profilepic} class="rounded-full h-[60%] w-[60%] md:h-[30%] md:w-[30%] pl-2 pt-2 mt-5 mb-5" alt="Logo" />
            </section>
            <div className="mb-7 text-center">
                <div className="text-3xl">Sofie Ohlsson</div>
                <div className="text-l">Frontend developer</div>
            </div>

            <div className="mb-7">
                <div className="text-2xl">About me</div>
                <div>Hi! My name is Sofie. I'm a Stockholm based junior frontend developer.</div>
                <div>This website is made with React and Tailwind, a favorite combo of mine lately. Curious about the code? See it here: <a href="www.github.com">www.github.com/sofieohlsson</a></div>
                <div>What I lack in experience I make up for in my eagerness to learn and constantly wish to improve and become better.</div>
            </div>

            <div className="mb-7">
                <div className="text-2xl">Outside work</div>
                <div>When I'm not working I adore being outdoors hiking in nature, with a camera, good read and a snack. <br></br>During the colder months I enjoy exploring my creativity with all forms of arts and craft. </div>
            </div>
            

            <div className="pb-5 text-center">
                <div className="text-2xl">Contact <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg></div>
                <div>Email: anna.sofie.ohlsson@gmail.com</div>
            </div>
            </FadeIn>
        </div>
        
    ); 
} 