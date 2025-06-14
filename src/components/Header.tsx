import React from "react";
import useTheme from "../hooks/useTheme";

interface HeaderProps {
  currentPath: string;
}

const navItems = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/work", title: "Work" },
  { href: "/contact", title: "Contact" },
];

const Header: React.FC<HeaderProps> = ({ currentPath }) => {

    const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="w-full flex items-center justify-end px-4 md:px-20 py-6 dark:bg-gray-900 transition-colors bg-white">
      <ul className="text-black font-semibold text-lg md:text-xl flex space-x-4 md:space-x-8 dark:text-white ">
        {navItems.map((item, idx) => {
          const isActive = item.href === currentPath;

          return (
            <li key={idx} className={`relative ${!isActive ? "group" : ""}`}>
              <a
                href={item.href}
                className={`
                  inline-block relative font-semibold text-lg md:text-xl transition-colors duration-200
                  ${isActive ? "text-[#FF6464]" : "text-black dark:text-white"}
                  ${
                    !isActive
                      ? `
                    after:absolute after:left-0 after:-bottom-1 after:h-[4px] after:rounded-full
                    after:w-0 after:bg-blue-600 after:transition-all after:duration-300
                    group-hover:after:w-full group-focus-visible:after:w-full
                  `
                      : ""
                  }
                `}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      
      <div className="w-40">
        <button
        onClick={toggleTheme}
        className="mx-4 px-3 py-1 border rounded text-sm text-black dark:text-white border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-800 transition-colors"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button></div> 

    </nav>
  );
};

export default Header;