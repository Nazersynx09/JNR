'use client';
import React from "react";

const Contact = () => (
   <div id="Contact"
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

    </div>
);

export default Contact;
