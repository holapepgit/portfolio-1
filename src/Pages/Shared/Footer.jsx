import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className=" bg-primary py-4 border-t border-gray-600">
      <div className="text-2xl space-x-3 mb-3 flex text-white justify-center  items-center">
        <a href="" className="k">
          <FaWhatsapp className="text-4xl" />
        </a>
        <a href="" className="k">
          <FaPhone className="rotate-90 text-2xl" />
        </a>
      </div>
      <h1 className="text-gray-200 lg:text-lg text-center font-medium ">
        © {year} Project Railway. All Rights Reserved.
      </h1>
      <h1 className="text-gray-200 lg:text-lg text-center font-medium ">
        Powered by <span className="font-semibold pt-2">HolaPep</span>
      </h1>
    </div>
  );
};

export default Footer;
