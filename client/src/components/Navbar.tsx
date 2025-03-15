import { useState } from "react";
import { motion } from "framer-motion";
import logo from "/images/logo1.svg";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:bg-[#d7d4d4] md:max-w-[65rem] mx-auto rounded-full backdrop-blur-sm sticky top-0 md:top-6 z-50">
      <div className="px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Heally Logo" className="w-20 h-20" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center px-8 py-2">
            <a
              href="#"
              className="text-gray-600 text-sm font-medium hover:text-gray-900 px-4"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 text-sm font-medium hover:text-gray-900 px-4"
            >
              Contact
            </a>
            <div className="relative group px-4">
              <button className="text-gray-600 text-sm font-semibold hover:text-gray-900 inline-flex items-center">
                Leisure activities
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <a
              href="#"
              className="text-gray-600 text-sm font-medium hover:text-gray-900 px-4"
            >
              About
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 text-sm font-medium hover:text-gray-900">
              Login
            </button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            Leisure activities
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            Login
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            Sign Up
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
