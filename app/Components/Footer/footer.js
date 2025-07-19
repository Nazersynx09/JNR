'client use';
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';


const Footer = () => (
    <div id="footer"
        style={{
            background: "#2b2929ff", // corrected zinc-900 as hex
            color: "#fff",
            fontFamily: "Inter",
            display: "flex",
            flexDirection: "column", 
            alignItems: "center",
            minHeight: "100px",      // Adjusted for footer height
            padding: "20px 0",      // Padding for footer
        }}>
        <div style={{
            textAlign: "center",
            width: "100%",
            padding: "10px"
        }}>
            <div className="max-w-4xl mx-auto grid grid-cols-1 
      text-center items-center p-2 gap-4">
        
        {/* Left - Navigation */}
        <div className="space-x-4 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#project" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        </div>

        {/* Center - Logo and Social */}
        <div className="text-center">
          <h3 className="font-bold text-lg  text-white hover:text-gray-400 transition duration-200">
            ^_^
          </h3>

            <p className="text-white text-sm font-normal p-5"> This is my official portfolio - Mr.Naze</p>

          <div className="flex justify-center gap-4 text-xl">
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-white transition" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
      <div className="mt-6 text-center text-xs text-zinc-600">
        © 2025 Crustyverse. All rights reserved.
      </div>

        </div>
    </div>
);
export default Footer;