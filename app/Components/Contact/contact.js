'use client';
import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FaEnvelope className="text-white" />,
    text: "jennelreola@example.com",
    link: "mailto:jennelreola@example.com",
  },
  {
    icon: <FaFacebook className="text-white" />,
    text: "Jnmxl.xzngg",
    link: "https://facebook.com/Jnmxl.xzngg",
  },
  {
    icon: <FaLinkedin className="text-white" />,
    text: "Jennel Nazarenne Reola",
    link: "https://linkedin.com/in/nazersynz",
  },
  {
    icon: <FaGithub className="text-white" />,
    text: "Nazersynz",
    link: "https://github.com/Nazersynz",
  },
  {
    icon: <FaMapMarkerAlt className="text-white" />,
    text: "5028, Iloilo, Philippines",
    link: null,
  },
];

const Contact = () => (
  <div id="Contact"
    style={{
      background: "#18181b",
      color: "#fff",
      fontFamily: "Inter",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "40vh",
      paddingTop: "50px",
      paddingBottom: "100px",
    }}>

    <div className="w-50 h-1 bg-orange-500 rounded mb-2 "></div>


    <div style={{ textAlign: "center", width: "100%", padding: "10px" }}>
      <h1 style={{ fontSize: "3em", fontWeight: "bold", letterSpacing: "2px" }}>
        Contact Me
      </h1>
      <p className="text-lg">“Want to work together? I’d love to hear from you!”</p>
    </div>

    <div className="flex flex-col items-center gap-4 w-full max-w-md px-6 py-8">
      {contactDetails.map((item, index) => (
        <div key={index} className="flex items-center gap-3 text-white text-sm md:text-base">
          <span className="text-xl">{item.icon}</span>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {item.text}
            </a>
          ) : (
            <span>{item.text}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Contact;
