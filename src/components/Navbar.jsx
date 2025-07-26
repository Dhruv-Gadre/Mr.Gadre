import { Link } from "react-router-dom";
import { Linkedin, Github, Menu, X } from 'lucide-react';
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl z-50 rounded-xl overflow-hidden">
      <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-700 shadow-lg">
        <div className="flex justify-between items-center px-4 md:px-8 py-3">
          {/* Logo/Brand */}
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Welcome!
          </h1>

          {/* Centered Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/resume"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Resume
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://www.linkedin.com/in/dhruvgadre0906/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-cyan-500/20"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Dhruv-Gadre"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-gray-600 text-white p-2 rounded-lg hover:from-black hover:to-gray-700 transition-all duration-200 shadow-md hover:shadow-gray-500/20"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden px-4 py-2 border-t border-gray-700">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile CTA buttons */}
            <div className="flex space-x-4 mt-4 pb-2">
              <a
                href="https://www.linkedin.com/in/dhruvgadre0906/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-cyan-500/20 flex items-center justify-center"
              >
                <Linkedin className="mr-2" size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Dhruv-Gadre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-gray-800 to-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-black hover:to-gray-700 transition-all duration-200 shadow-md hover:shadow-gray-500/20 flex items-center justify-center"
              >
                <Github className="mr-2" size={16} />
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}