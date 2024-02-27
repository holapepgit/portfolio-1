import { useState } from "react";

import { Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  // const isMounted = useRef(true);

  return (
    <div
      className={`lg:flex justify-between  items-center  px-4 md:px-8 lg:px-10 py-4 bg-primary w-full z-50 `}>
      <div className="flex justify-between items-center">
        <img
          className="h-12 w-12 rounded-full z-20"
          src="https://github.com/shadcn.png"
          alt=""
        />
        <span
          onClick={() => setOpen(!isOpen)}
          className="block md:hidden bg-black/10 rounded-lg">
          <Hamburger
            color="white"
            size={25}
            toggled={isOpen}
            toggle={() => setOpen(false)}
          />
        </span>
      </div>

      <div
        className={`${
          isOpen ? "left-0" : "-left-[600px]"
        }  w-2/3 lg:w-auto bg-black/90 lg:bg-transparent h-[100vh] lg:h-auto absolute  lg:sticky top-0  p-10 lg:p-0 transition-all duration-300 z-50`}>
        <div className="flex flex-col z-20 lg:flex-row items-start lg:items-center gap-2 md:gap-5 ">
          {navOptions.map((option, index) => (
            <Link
              key={index}
              onClick={() => setOpen(!isOpen)}
              to={option.path}
              className="text-gray-300  hover:text-white text-xl lg:text-lg font-medium  transition-all duration-300">
              {option.name}
            </Link>
          ))}

          <a
            href="./#background"
            className="text-gray-300  hover:text-white text-xl lg:text-lg font-medium  transition-all duration-300 inline-block"
            onClick={() => setOpen(!isOpen)}>
            About
          </a>

          <a
            href="./#contact"
            className="text-gray-300  hover:text-white text-xl lg:text-lg font-medium  transition-all duration-300 inline-block"
            onClick={() => setOpen(!isOpen)}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

const navOptions = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  // {
  //   name: "Blog",
  //   path: "/blog",
  // },
];

export default Navbar;
