'client use';
import React from "react";

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
            <p style={{
                fontSize: "1em",
                fontWeight: "normal",
                letterSpacing: "1px"
            }}>© 2025 Mr.Naze. All rights reserved.</p>
            <p style={{
                fontSize: "0.9em",
                fontWeight: "normal",
                letterSpacing: "1px"
            }}>Built using Next.js</p>

        </div>
    </div>
);
export default Footer;