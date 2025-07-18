'use client';
import React from "react";

// About component: Displays information about the user and their education timeline
const About = () => (
    <div
        id="about"
        // Main container styling
        style={{
            background: "zinc-900", // Background color
            color: "#fff",           // Text color
            minHeight: "300vh",      // Full viewport height
            padding: "40px 0", fontFamily: "Inter", display: "flex", flexDirection: "column", alignItems: "center"
        }}
    >
        {/* Header Section */}
        <div
            style={{
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "30px",
                width: "100%"
            }}
        >
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



                </div>
       
  
    </div>
);

export default About;