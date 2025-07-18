'use client'; // Add this if you're using the App Router

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Use any icon library or emoji

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-zinc-900 shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
        {/* Brand */}
        <a href="#top" className="text-xl font-semibold hover:text-gray-400">^_^</a>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li>
            <a href="#top" className="hover:text-gray-400 ...">Home</a>

          </li>

          <li>
            <a
              href="#about"
              className="hover:text-gray-400 hover:underline underline-offset-4 transition-colors duration-200"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-400 hover:underline underline-offset-4 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-gray-400 hover:underline underline-offset-4 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Button (Mobile Only) */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-zinc-800 py-4 space-y-4 text-sm">
          <li>
            <a
              href="/"
              className="hover:text-gray-400 hover:underline underline-offset-4 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-400 hover:underline underline-offset-4 transition-colors duration-200"
              onClick={toggleMenu}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-400 hover:underline underline-offset-4 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-gray-400 hover:underline underline-offset-4 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
