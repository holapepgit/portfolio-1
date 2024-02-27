import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className=" bg-primary py-4">
      <div className="text-2xl space-x-6 flex text-white justify-center py-6 items-center">
        <a href="" className="k">
          <FaWhatsapp className="text-4xl" />
        </a>
        <a href="" className="k">
          <FaPhone className="rotate-90 text-2xl" />
        </a>
      </div>
      <h1 className="text-gray-200 text-lg text-center font-medium ">
        © {year} Railway Corporation. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
