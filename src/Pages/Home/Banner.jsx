import { TypeAnimation } from "react-type-animation";
import banner from "../../assets/banner2.jpg";
const Banner = () => {
  return (
    <div className="  px-4 sm:px-6 pb-3 md:py-16 mx-auto bg-primary text-white ">
      <div className="flex  flex-col-reverse justify-evenly lg:flex-row ">
        <div className="lg:w-1/2 lg:pr-8 z-20">
          <div className="pl-2  space-y-2">
            <h1 className="text-2xl lg:text-5xl font-bold lg:mt-10 ">
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
          </div>
        </div>

        <div className="flex items-center justify-center w-auto  lg:mt-0 shadow-xl lg:border-4 rounded-md border-secondary  lg:w-[400px] lg:h-[400px] mb-5 lg:mb-0">
          <img
            className=" max-w-md lg:max-w-none w-full h-full lg:rounded-xl md:rounded-2xl object-cover lg:px-3 bg-gray-800 lg:mr-8 lg:mb-10 lg:-ml-4"
            src={banner}
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
