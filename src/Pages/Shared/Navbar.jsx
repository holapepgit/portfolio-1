import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className={`flex justify-between px-12  h-16 items-center  backdrop-blur-md     transition-all  bg-primary`}>
      <img
        className="h-12 w-12 rounded-full"
        src="https://github.com/shadcn.png"
        alt=""
      />
      <ul className="flex  items-center gap-5 font-medium text-md">
        {navOptions.map((option, index) => (
          <li
            key={index}
            className="text-gray-300 hover:text-white transition-all">
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
