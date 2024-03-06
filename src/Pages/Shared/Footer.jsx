import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
<<<<<<< HEAD
    <div className=" bg-primary py-4">
      {/* <div className="text-2xl space-x-6 flex text-white justify-center py-6 items-center">
        <a href="" className="k">
          <FaWhatsapp className="text-4xl" />
        </a>
        <a href="" className="k">
          <FaPhone className="rotate-90 text-2xl" />
        </a>
      </div> */}
      <h1 className="text-gray-200 text-lg text-center font-medium ">
        Developed by - HolaPep
=======
    <div className=" bg-primary py-4 border-t border-gray-600 ">
      <h1 className="text-gray-200 lg:text-lg text-center font-medium ">
        © {year} Project Railway. All Rights Reserved.
      </h1>
      <h1 className="text-gray-200 lg:text-lg text-center font-medium ">
        Powered by{" "}
        <span className="font-semibold pt-2">
          <Link className="underline" to={"https://www.holapep.com/"}>
            holaPep
          </Link>
        </span>
>>>>>>> 212bb7af389b60f74f83a08976c2209d27f3fc43
      </h1>
    </div>
  );
};

export default Footer;
