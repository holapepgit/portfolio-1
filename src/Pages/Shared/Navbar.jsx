import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-12  h-16 items-center  sticky top-0 z-50 backdrop-blur-md bg-[#1e1a20]  ">
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
