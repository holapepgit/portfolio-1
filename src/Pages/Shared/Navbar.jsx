import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between px-3 lg:px-12  h-16 items-center  sticky top-0 z-50 backdrop-blur-md     transition-all ${
        scrolling ? "bg-[#1e1a20]/50" : " "
      }`}>
      <img
        className="h-12 w-12 rounded-full"
        src="https://github.com/shadcn.png"
        alt=""
      />
      <ul className="flex text-gray-100 items-center gap-5 font-medium text-md">
        {navOptions.map((option, index) => (
          <li key={index}>
            <Link to={option.path}>{option.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const navOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export default Navbar;
