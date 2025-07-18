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
                minHeight: "100vh",      // Full viewport height
                paddingTop: "50px",     // add spacing from top
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
                }}> Contact Me </h1>
                <p className="text-lg">“Want to work together? I’d love to hear from you!”</p>
            </div>
            <div className="flex justify-center items-center w-full max-w-4xl px-4">
                <form className="w-full max-w-lg space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">Send Message</button>
                </form>
            </div> 
    </div>
);

export default Contact;
