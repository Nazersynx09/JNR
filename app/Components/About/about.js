'use client';
import React from "react";

// About component: Displays information about the user and their education timeline
const About = () => (
    <div id="about"
        // Main container styling
        style={{
                background: "zinc-900", // Background color
                color: "#fff",           // Text color
                minHeight: "100vh",      // Full viewport height
                padding: "40px 0", fontFamily: "Inter", display: "flex", flexDirection: "column", alignItems: "center"
                }}>
                {/* Header Section */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        marginTop: "30px",
                        width: "100%"
                    }} >
                {/* About Me Label */}
                    <h1
                        style={{
                            fontSize: "3em", fontWeight: "bold", letterSpacing: "2px"
                        }}
                    >
                        About Me
                    </h1>
                {/* About Me Description */}
                    <p style={{ fontWeight: "normal" }}>
                        I'm an Information Systems student with a passion for front-end development, data visualization, and clean UI/UX.
                    </p>
                </div>

                {/* Education Label */}
                    <div style={{textAlign: "center", fontWeight: "bold", marginBottom: "20px", marginTop: "60px", width: "100%"}}>
                        EDUCATION
                    </div>

                {/* Education Cards Section */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 center" 
                        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                        {/* Card 1 */}
                        <div className="rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl 
                                        bg-zinc-800 text-white p-6 w-full max-w-[500px] h-full flex flex-col justify-between min-h-[220px] text-center">
                        <h2 className="text-lg font-semibold mb-5 text-blue-500">Alimodian National Comprehensive High School (2015-2021)</h2>
                        <p className="text-sm font-bold">Junior High School</p>
                        <p className="text-sm">Major in Humanities and Social Science</p>
                        <p className="text-sm font-bold">Senior High School</p>
                        <p className="text-sm">Humanities in Social Science</p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl 
                                        bg-zinc-800 text-white p-6 w-full max-w-[500px] h-full flex flex-col justify-between min-h-[220px] text-center">
                        <h2 className="text-lg font-semibold mb-2 text-blue-500">West Visayas State University - Main Campus (2021-2025)</h2>
                        <p className="text-sm font-bold leading-[1.3] mt-3 mb-0">Bachelor of Science in Information System</p>
                        <p className="text-sm leading-[1.2] mb-7 mt-0">Major in Business Application Developmenty</p>
                        </div>
                    </div>

           


                {/* Experience Label */}
                    <div
                        style={{textAlign: "center", fontWeight: "bold", marginBottom: "20px", marginTop: "60px", width: "100%" }}>
                        EXPERIENCE
                    </div>    

                    <div className="column" style={{ display: "flex", flexDirection: "column", alignItems: "center", gridGap: "20px" }}>
                        {/* Card 1 */}
                        <div className="rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl 
                                            bg-zinc-800 text-white p-6 w-full max-w-[800px] h-full flex flex-col justify-between min-h-[220px] text-center">
                            <h2 className="text-lg font-semibold mb-5 text-orange-500">Research Officer - Provincial Disaster Risk Reduction Office - Iloilo Province
                                <span className="block text-lg font-bold text-gray-400">
                                    (May 2025-Present)
                                </span> 
                            </h2>
                            <ul className="list-none mt-0 leading-tight text-sm space-y-1">
                                <li>- Develop a comprehensive and data driven risk reduction plan</li> 
                                <li>- Ensure compliance of the department to the requisite of Gawad Kalasag Indicators</li>
                                <li>- Analyze hazards and other risk related data</li> 
                                <li>- Review and Analyze submitted DRRM plan of respective municipality within the province</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl 
                                        bg-zinc-800 text-white p-6 w-full max-w-[800px] h-full flex flex-col justify-between min-h-[220px] text-center">
                        <h2 className="text-lg font-semibold mb-2 text-orange-500">Internship - Provincial Disaster Risk Reduction Office - Iloilo Province 
                                <span className="block text-lg font-bold text-gray-400">
                                (January -April 2025)
                                </span>
                        </h2>
                            <ul className="list-none mt-0 leading-tight text-sm space-y-1">
                                <li>- Develop a Website for the Office</li>
                                <li>- Crafted a Gawad Kalasag Document Tracker</li>
                                <li>- Analyze hazards and other risk related data</li>
                                <li>- Assist in administrative task</li>
                                <li>- Design IEC Material for the Operation Unit</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl 
                                            bg-zinc-800 text-white p-6 w-full max-w-[800px] h-full flex flex-col justify-start min-h-[220px] text-center">
                            <h2 className="text-lg font-semibold mb-1 text-orange-500">
                                Owner/CEO - Crustyverse Pizza Hub
                                <span className="block text-lg font-bold text-gray-400">
                                    (2021–Present)
                                </span>
                            </h2>
                            <ul className="list-none mt-0 leading-tight text-sm space-y-1">
                                <li>- Founded the business on February 21, 2021</li>
                                <li>- MSMEs in local municipality of Iloilo</li>
                                <li>- Serves homemade pizza and refresher</li>
                                <li>- Manages the overall operation</li>
                            </ul>
                        </div>

                {/* TECH STACK */}
                    <div style={{textAlign: "center", fontWeight: "bold", marginBottom: "20px", marginTop: "50px", width: "100%" }}>
                        TECH STACK
                    </div>    
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 center "
                        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                        {/* Tech Stack Icons */}
                        <div className="text-center shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                        <img src="/html.png" alt="HTML" className="w-16 h-16" />
                        </div>
                        <div className="text-center shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                        <img src="/css.png" alt="CSS" className="w-16 h-16" />
                        </div>
                        <div className="text-center shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                        <img src="/javascript.png" alt="JavaScript" className ="w-16 h-16" />
                        </div>
                        <div className="text-center shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                        <img src="/nodejs.png" alt="Node.js" className="w-16 h-16" />
                        </div>
                        <div className="text-center shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                        <img src="/reactjs.png" alt="React" className="w-16 h-16" />
                        </div>
                        <div className="text-center shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
                        <img src="/tailwind.png" alt="Tailwind" className="w-20 h-15" />
                        </div>
                    </div>

                {/* Progress Bar Section */}
                    <div className="bg-zinc-900 text-white py-10 px-1 w-full" style ={{ marginTop: "50px", marginBottom: "50px", marginLeft: "-250px", marginRight: "200px" }}>
                        <div className=" grid grid-cols-1 md:grid-cols-2 w-full gap-x-12 max-w-screen-xl mx-50">

                            {/* Left Column */}
                            <div className="space-y-6">
                            {/* JavaScript */}
                            <div className="flex items-center gap-4 w-full">
                                <span className="text-sm w-[80px]">JavaScript</span>
                                <div className="flex-1 bg-gray-300 rounded-full h-2.5">
                                <div className="bg-orange-600 h-2.5 rounded-full w-[45%]"></div>
                                </div>
                                <span className="text-sm w-[40px] text-right">45%</span>
                            </div>

                            {/* HTML */}
                            <div className="flex items-center gap-4 w-full">
                                <span className="text-sm w-[80px]">HTML</span>
                                <div className="flex-1 bg-gray-300 rounded-full h-2.5">
                                <div className="bg-orange-600 h-2.5 rounded-full w-[75%]"></div>
                                </div>
                                <span className="text-sm w-[40px] text-right">75%</span>
                            </div>

                            {/* CSS */}
                            <div className="flex items-center gap-4 w-full">
                                <span className="text-sm w-[80px]">CSS</span>
                                <div className="flex-1 bg-gray-300 rounded-full h-2.5">
                                <div className="bg-orange-600 h-2.5 rounded-full w-[65%]"></div>
                                </div>
                                <span className="text-sm w-[40px] text-right">65%</span>
                            </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                            {/* Tailwind */}
                            <div className="flex items-center gap-4 w-full">
                                <span className="text-sm w-[80px]">Tailwind</span>
                                <div className="flex-1 bg-gray-300 rounded-full h-2.5">
                                <div className="bg-orange-600 h-2.5 rounded-full w-[45%]"></div>
                                </div>
                                <span className="text-sm w-[40px] text-right">45%</span>
                            </div>

                            {/* React */}
                            <div className="flex items-center gap-4 w-full">
                                <span className="text-sm w-[80px]">React</span>
                                <div className="flex-1 bg-gray-300 rounded-full h-2.5">
                                <div className="bg-orange-600 h-2.5 rounded-full w-[30%]"></div>
                                </div>
                                <span className="text-sm w-[40px] text-right">30%</span>
                            </div>

                            {/* Next.js */}
                            <div className="flex items-center gap-4 w-full">
                                <span className="text-sm w-[80px]">Next.js</span>
                                <div className="flex-1 bg-gray-300 rounded-full h-2.5">
                                <div className="bg-orange-600 h-2.5 rounded-full w-[70%]"></div>
                                </div>
                                <span className="text-sm w-[40px] text-right">70%</span>
                            </div>
                            </div>

                        </div>
                        </div>






                {/* End of Progress bar Container */}


















            </div>
    </div>
);

export default About;