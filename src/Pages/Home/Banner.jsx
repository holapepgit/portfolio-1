import "aos/dist/aos.css";
import {
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="  px-4 sm:px-6 pb-3 md:py-16 mx-auto bg-primary text-white ">
      <div className="flex  flex-col-reverse justify-evenly lg:flex-row ">
        <div className="lg:w-1/2 lg:pr-8 z-20">
          <div className="pl-2  space-y-2">
            <h1 className="text-2xl lg:text-5xl font-bold  ">
              Regional Railway Network
            </h1>
            <h1 className="text-3xl lg:text-5xl font-bold   ">
              <TypeAnimation
                className="lg:text-2xl text-xl text-secondary"
                sequence={[
                  "Efficient Transportation",
                  2000,
                  "Streamlining Transportation",
                  2000,
                ]}
                speed={10}
                repeat={3}
              />
            </h1>
            <p className="  k font-semibold lg:text-2xl text-lg">Contact with Us</p>

            <div className=" lg:space-x-6 space-x-4 flex py-2 items-center">
              <a href="" className="k">
                <FaWhatsapp className="text-4xl"/>
              </a>
              <a href="" className="k">
                <FaPhone  className="rotate-90 text-2xl"/>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-auto  lg:mt-0 shadow-xl lg:border-4 rounded-md border-secondary  lg:w-[400px] lg:h-[400px] mb-5 lg:mb-0">
          <img
            loading="lazy"
            className=" max-w-md lg:max-w-none lg:w-[400px] lg:h-[400px] lg:rounded-xl md:rounded-2xl object-cover lg:px-3 bg-gray-800 lg:mr-8 lg:mb-10 lg:-ml-4"
            src="https://i.ibb.co/kG9rpgD/8737a131-4448-44d3-adb8-39e0647fe3c6.jpg"
            alt="Profile"
          />
        </div>
      </div>

      <div className=" absolute w-[500px] opacity-50 h-[200px] right-1/2 top-0 bg-gradient-to-t  from-[#8029ab] to-[#240c30] blur-[70px] " />
      <div className=" absolute w-[300px] right-0 opacity-50 h-[200px]  top-0 bg-gradient-to-t  from-[#8029ab] to-[#240c30] blur-[70px] " />
    </div>
  );
};

export default Banner;
