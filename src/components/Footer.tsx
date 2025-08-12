import { FaFacebookF, FaTwitter, FaYoutube, FaDribbble, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-gray-800 dark:text-gray-300 py-4 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500 dark:hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-sky-400 dark:hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-red-500 dark:hover:text-white"><FaYoutube /></a>
          <a href="#" className="hover:text-pink-500 dark:hover:text-white"><FaDribbble /></a>
          <a href="#" className="hover:text-blue-400 dark:hover:text-white"><FaBehance /></a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600 dark:text-gray-400 text-center my-2 md:my-0">
          © COPYRIGHTS 2025 - ALL RIGHTS RESERVED.
        </div>

        {/* Back to Top */}
        <div>
          <a href="#top" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm flex items-center">
            ↑ BACK TO TOP
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
