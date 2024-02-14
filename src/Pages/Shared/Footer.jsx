import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
      <div className=" bg-primary py-12">
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
        <h1 className="text-white text-xl text-center font-medium pb-6">
          © 2024 Sajjad Emon. All Rights Reserved 🇮 🇳
        </h1>
      </div>
    );
};

export default Footer;