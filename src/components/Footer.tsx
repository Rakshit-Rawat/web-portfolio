import React from "react";
import {
  IconBrandMeta,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-white dark:bg-gray-900 py-12 transition-colors"
      aria-label="Footer with social media links and copyright"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-20">
        <nav className="flex justify-center" aria-label="Social media">
          <ul className="flex space-x-8">
            <li>
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="Facebook - Opens in a new tab"
              >
                <IconBrandMeta size={40} aria-hidden="true" focusable="false" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram - Opens in a new tab"
              >
                <IconBrandInstagram size={40} aria-hidden="true" focusable="false" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300 transition-colors duration-200"
                aria-label="Twitter - Opens in a new tab"
              >
                <IconBrandTwitter size={40} aria-hidden="true" focusable="false" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500 transition-colors duration-200"
                aria-label="LinkedIn - Opens in a new tab"
              >
                <IconBrandLinkedin size={40} aria-hidden="true" focusable="false" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center mt-8">
          <small className="text-gray-600 dark:text-gray-400 text-sm select-none" aria-live="polite">
            &copy; 2025 All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
