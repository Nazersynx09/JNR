'use client';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const graphicProjects = [
  {
    title: 'Poster Design',
    role: 'Graphic Artist',
    details: '[ Branding & Layouts ]',
  },
  {
    title: 'Company Branding Kit',
    role: 'Freelance Designer',
    details: '[ Logos, Cards, Guidelines ]',
  },
];

const dataVizProjects = [
  {
    title: 'Dashboard Visualization',
    role: 'Data Analyst',
    details: '[ Charting with D3.js ]',
  },
  {
    title: 'Survey Analytics',
    role: 'Data Scientist',
    details: '[ Python & Plotly ]',
  },
];

const Projects = () => (
    <div id="projects"
    style={{
        background: "#18181b", // corrected zinc-900 as hex
        color: "#fff",
        fontFamily: "Inter",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "200vh",      // Full viewport height
        paddingTop: "70px",     // add spacing from top
        paddingBottom: "100px",  // optional spacing below
    }}>
    
    <div style={{
        textAlign: "center",
        width: "100%",
        padding: "10px"
    }}>
        <h1 style={{
            fontSize: "3em",
            fontWeight: "bold",
            letterSpacing: "2px"
        }}> Projects </h1>
        <p className="text-lg">Here are some of the projects I've worked on.</p>
    </div>

    {/* Web Based Proj Label */}
                    <div style={{textAlign: "center", fontWeight: "bold", marginBottom: "20px", marginTop: "60px", width: "100%"}}>
                            WEB BASED PROJECTS
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-4xl w-full">
                            {/* <!-- Project Card 1 --> */}
                            <a href="#" className="space-y-2 text-center">
                            {/* <!-- Blurred Box Placeholder --> */}
                            <div className="w-[400px] h-[400px] bg-gray-600 bg-opacity-50 rounded-lg flex items-center justify-center text-3xl font-bold filter blur-sm hover:blur-none transition">
                                •••
                            </div>
                            {/* <!-- Project Info --> */}
                            <div>
                                <p className="text-sm font-semibold">Livelihood Data Driven Recommendation and Monitoring System (SLP-DSWD)</p>
                                <p className="text-xs text-gray-300">(Front-End Developer | Project Leader | Documentation)</p>
                                <p className="text-xs text-gray-400">[ Finished ]</p>
                            </div>
                            </a>

                            {/* <!-- Project Card 2 --> */}
                            <a href="#" className="space-y-2 text-center">
                            <div className="w-[400px] h-[400px] bg-gray-600 bg-opacity-50 rounded-lg flex items-center justify-center text-3xl font-bold filter blur-sm hover:blur-none transition">
                                •••
                            </div>
                            <div>
                                <p className="text-sm font-semibold">PDRRMO - Iloilo Website</p>
                                <p className="text-xs text-gray-300">(Front-End Developer)</p>
                                <p className="text-xs text-gray-400">[ Finished ]</p>
                            </div>
                            </a>

                            {/* <!-- Project Card 3 --> */}
                            <a href="#" className="space-y-2 text-center">
                            <div className="w-[400px] h-[400px] bg-gray-600 bg-opacity-50 rounded-lg flex items-center justify-center text-3xl font-bold filter blur-sm hover:blur-none transition">
                                •••
                            </div>
                            {/* <!-- Project Info --> */}
                            <div>
                                <p className="text-sm font-semibold">CRUSTYVERSE Pizza Hub Website</p>
                                <p className="text-xs text-gray-300">(Full Stack Developer)</p>
                                <p className="text-xs text-gray-400">[ In Progress ]</p>
                            </div>
                            </a>

                            {/* <!-- Project Card 4 --> */}
                            <a href="#" className="space-y-2 text-center">
                            <div className="w-[400px] h-[400px] bg-gray-600 bg-opacity-50 rounded-lg flex items-center justify-center text-3xl font-bold filter blur-sm hover:blur-none transition">
                                •••
                            </div>
                            {/* <!-- Project Info --> */}
                            <div>
                                <p className="text-sm font-semibold">Personal Website</p>
                                <p className="text-xs text-gray-300">(Full Stack Developer)</p>
                                <p className="text-xs text-gray-400">[ ... ]</p>
                            </div>
                            </a>

                        </div>
                    </div>

                    {/* GRAPHICS DESIGN PROJECTS */}
    <div style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px", marginTop: "80px", width: "100%" }}>
      GRAPHICS DESIGN PROJECTS
    </div>

    <div className="w-full max-w-5xl px-4">
      <Swiper modules={[Navigation]} navigation spaceBetween={30} slidesPerView={1}>
        {graphicProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <a href="/" className="space-y-2 text-center block">
              <div className="w-full h-[400px] bg-gray-600 bg-opacity-50 rounded-lg flex items-center justify-center text-3xl font-bold filter blur-sm hover:blur-none transition">
                •••
              </div>
              <div>
                <p className="text-sm font-semibold">{project.title}</p>
                <p className="text-xs text-gray-300">({project.role})</p>
                <p className="text-xs text-gray-400">{project.details}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* DATA VISUALIZATION PROJECTS */}
    <div style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px", marginTop: "70px", width: "100%" }}>
      DATA VISUALIZATION PROJECTS
    </div>

    <div className="w-full max-w-5xl px-4">
      <Swiper modules={[Navigation]} navigation spaceBetween={30} slidesPerView={1}>
        {dataVizProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <a href="/" className="space-y-2 text-center block">
              <div className="w-full h-[400px] bg-gray-600 bg-opacity-50 rounded-lg flex items-center justify-center text-3xl font-bold filter blur-sm hover:blur-none transition">
                •••
              </div>
              <div>
                <p className="text-sm font-semibold">{project.title}</p>
                <p className="text-xs text-gray-300">({project.role})</p>
                <p className="text-xs text-gray-400">{project.details}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
                            

</div>

);

export default Projects;