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
        <div
            style={{
                textAlign: "center", fontWeight: "bold", marginBottom: "20px", marginTop: "60px", width: "100%"
            }}
        >
            EDUCATION
        </div>

        {/* Education Timeline Container */}
        <div
            style={{
                display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 30px", position: "relative"
            }}
        >
            {/* Timeline horizontal line */}
            <div
                style={{
                    position: "absolute", top: "48px", left: 0, right: 0, height: "4px", background: "#888", zIndex: 0
                }}
            />

            {/* Timeline start dot */}
            <div
                style={{
                    position: "absolute", top: "40px", left: 0, zIndex: 1
                }}
            >
                <div style={{ width: "20px", height: "20px", background: "#ccc", borderRadius: "50%" }} />
            </div>
            {/* Timeline end dot */}
            <div style={{ position: "absolute", top: "40px", right: 0, zIndex: 1 }}>
                <div style={{ width: "20px", height: "20px", background: "#ccc", borderRadius: "50%" }} />
            </div>

            {/* First Education Column */}
            <div
                style={{
                    flex: 1, textAlign: "center", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }} >
                
                {/* First Column Vertical timeline line */}
                <div
                    style={{
                        position: "absolute", left: "50%", top: "50px", transform: "translateX(-50%)", height: "60px", width: "4px", background: "#888", zIndex: 1 }} />
                
                {/* First Column First Dot */}
                <div
                    style={{
                        position: "absolute", left: "50%", top: "100px", transform: "translateX(-50%)", zIndex: 2 }} >
                    <div style={{ width: "16px", height: "16px", background: "#ccc", borderRadius: "50%" }} />
                </div>

                {/* First School Name and Years */}
                <div style={{ marginTop: "120px", width: "100%" }}>
                    <div
                        style={{
                            fontWeight: "bold", fontFamily: "Inter", fontSize: "0.90em", fontWeight: "300" }} >
                        Alimodian National Comprehensive High School<br />(2015-2021)  
                    </div>

                {/* First Column Timeline continuation */}
                    <div
                        style={{
                            position: "absolute", left: "50%", top: "180px", transform: "translateX(-50%)", height: "60px", width: "4px", background: "#888", zIndex: 1 }} />
                {/* First Column Second Dot */}
                    <div
                        style={{
                            position: "absolute", left: "50%", top: "230px", transform: "translateX(-50%)", zIndex: 2 }} >
                        <div style={{ width: "16px", height: "16px", background: "#ccc", borderRadius: "50%" }} />
                    </div>

                {/* First School Details */}
                    <div
                        style={{
                            fontSize: ".80em", marginTop: "90px", textAlign: "left", marginLeft: "130px", marginRight: "80px", fontWeight: "300" }} >
                        Junior High School – Special Program in the Arts
                        <br />Senior High School – Humanities in Social Science
                    </div>
                </div>
            </div>

            {/* Second Education Column */}
            <div
                style={{
                    flex: 1, textAlign: "center", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }} >
            {/* Second Column Vertical timeline line */}
                <div
                    style={{
                        position: "absolute", left: "50%", top: "50px", transform: "translateX(-50%)", height: "60px", width: "4px", background: "#888", zIndex: 1
                    }} />
            {/* Second Column First Dot */}
                <div
                    style={{
                        position: "absolute", left: "50%", top: "100px", transform: "translateX(-50%)", zIndex: 2 }} >
                    <div style={{ width: "16px", height: "16px", background: "#ccc", borderRadius: "50%" }} />
                </div>

            {/* Second School Name and Years */}
                <div style={{ marginTop: "120px", width: "100%" }}>
                    <div
                        style={{ 
                            fontWeight: "bold", fontFamily: "Inter", fontSize: ".90em", fontWeight: "300" }} >
                        West Visayas State University - Main Campus
                        <br />(2021-2025)
                    </div>

            {/* Second Column Timeline continuation */}
                    <div
                        style={{
                            position: "absolute", left: "50%", top: "180px", transform: "translateX(-50%)", height: "60px", width: "4px", background: "#888", zIndex: 1 }} />
            {/* Second Column Second Dot */}
                    <div 
                        style={{ 
                            position: "absolute", left: "50%", top: "230px", transform: "translateX(-50%)", zIndex: 2 }} >
                        <div style={{ width: "16px", height: "16px", background: "#ccc", borderRadius: "50%" }} />
                    </div>

            {/* Second School Details */}
                    <div
                        style={{
                            fontSize: ".80em", marginTop: "90px", marginLeft: "130px", marginRight: "80px", textAlign: "left", fontWeight: "300" }} >
                        Bachelor of Science in Information System Major in Business Application Development
                    </div>
                </div>

{/* Experience Section */}
<div className="absolute top-[90%]" >

  {/* EXPERIENCE LABEL - Positioned Left of the Line */}
  <div className="absolute top-[140px] text-center text-gray-100 font-bold text-1xl tracking-widest z-10 left-[-8%]">
    EXPERIENCE
  </div>

  {/* Vertical Line with Dots */}
  <div className="absolute left-[-110%] top-[240px] z-10">
    <div className="w-1 h-[700px] bg-gray-500 relative">
      <div className="w-4 h-4 bg-gray-300 rounded-full absolute -top-2 left-1/2 -translate-x-1/2" />
            
        <div className="absolute top-[-20px] left-[4px]">                 
            <div className="w-35 h-1 bg-gray-500 absolute right-50px top-34"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full absolute top-[130px] left-[130px]" />
        </div>

        <div className="absolute top-[230px] left-[4px]">                 
            <div className="w-35 h-1 bg-gray-500 absolute right-50px top-34"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full absolute top-[130px] left-[130px]" />
        </div>


        <div className="absolute top-[460px] left-[4px]">                 
            <div className="w-35 h-1 bg-gray-500 absolute right-50px top-34"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full absolute top-[130px] left-[130px]" />
        </div>

      <div className="w-4 h-4 bg-gray-300 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  </div>

  {/* Timeline Entries - Positioned to the Right of the Line */}
  <div className="relative ml-[-80%] pt-[296px] text-gray-100 space-y-25 max-w-[700px]">

    {/* Entry 1 */}
    <div>
      <h3 className="font-bold max-w-[700px] text-lg text-left">
        Research Officer - Provincial Disaster Risk Reduction Office - Iloilo Province
      </h3>
      <ul className="list-disc ml-5 text-sm mt-2 space-y-1 font-light text-left">
        <li>Develop a comprehensive and data driven risk reduction plan</li>
        <li>Ensure compliance of the department to the requisites of Gawad Kalasag Indicators</li>
        <li>Analyze hazards and other risk related data</li>
        <li>Review and Analyze submitted DRRM plan of respective municipality within the province</li>
      </ul>
    </div>

    {/* Entry 2 */}
    <div>
      <h3 className="font-bold max-w-[700px] text-lg text-left">
        Intern - Provincial Disaster Risk Reduction Office - Iloilo Province
      </h3>
      <ul className="list-disc ml-5 text-sm mt-2 space-y-1 font-light text-left">
        <li>Develop a Website for the Office</li>
        <li>Drafted a Gawad Kalasag Document Tracker</li>
        <li>Analyze hazards and other risk related data</li>
        <li>Assist in administrative task</li>
        <li>Design IEC Material for the Operation Unit</li>
      </ul>
    </div>

    {/* Entry 3 */}
    <div>
      <h3 className="font-bold max-w-[700px] text-lg text-left">
        Owner/CEO – Crustyverse Pizza Hub
      </h3>
      <ul className="list-disc ml-5 text-sm mt-2 space-y-1 font-light text-left">
        <li>Founded the business on February 21, 2021</li>
        <li>MSMEs in local municipality of Iloilo</li>
        <li>Serves homemade pizza and refresher</li>
        <li>Manages the overall operation</li>
      </ul>
    </div>
  </div>
</div>


                
            </div>
        </div>
    </div>
);

export default About;