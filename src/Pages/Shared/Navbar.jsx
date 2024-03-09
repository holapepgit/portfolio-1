import { useState } from "react";
// import logo from "../../assets/logo2.svg";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`lg:flex justify-between  items-center  px-4 md:px-8 lg:px-10 py-4 bg-primary w-full z-50 `}>
      <div className="flex justify-between items-center">
        {/* <Link to={"/"}>
          <img className="h-12 w-12 rounded-full z-20" src={logo} alt="" />
        </Link> */}
        <span
          onClick={() => setOpen(!isOpen)}
          className="block md:hidden bg-black/10 rounded-lg z-20">
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
        <div className="flex flex-col z-20 lg:flex-row items-start lg:items-center gap-2 md:gap-8 ">
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
            href="/presentation.pdf"
            download
            className="text-gray-300  hover:text-white text-xl lg:text-lg font-medium  transition-all duration-300 inline-block cursor-pointer"
            onClick={() => setOpen(!isOpen)}>
            Download
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
    name: "Project Details",
    path: "/projects",
  },
  {
    name: "Background",
    path: "/background",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default Navbar;
