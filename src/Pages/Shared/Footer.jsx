import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Contact from "../Home/Contact";

const Footer = () => {
  return (
    <div className=" bg-primary py-4">
      <Contact />

      <div className="text-2xl space-x-8 flex  text-white justify-center py-6">
        <a href="" className="k">
          <FaTwitter />
        </a>
        <a href="" className="k">
          <FaLinkedin />
        </a>
        <a href="" className="k">
          <FaGithub />
        </a>
        <a href="" className="k">
          <FaDev />
        </a>
        <a href="" className="k">
          <FaInstagram />
        </a>
      </div>
      <h1 className="text-gray-200 text-lg text-center font-medium ">
        © 2024 Sajjad Emon. All Rights Reserved 🇮 🇳
      </h1>
    </div>
  );
};

export default Footer;
