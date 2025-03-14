import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.svg";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 py-6">
          <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Heally Logo"
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 items-center">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Private Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Terms and Conditions
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-xl md:text-base">
              <a
                href="https://x.com/heallyhub"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/josephayinde/"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/heallyhub/"
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Team announcement */}
        <div className="mt-6">
          <h3 className="text-center text-sm md:text-base text-gray-600">
            Team announcement coming soon. Built with love💖
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
