import "aos/dist/aos.css";
import {
  FaDev,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className=" px-4 sm:px-6 py-8 md:py-16 mx-auto bg-primary text-white">
      <div className="flex flex-col-reverse justify-evenly lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="lg:max-w-lg pl-8">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              I&apos;m Sajjad Emon
            </h1>
            <h1 className="text-3xl lg:text-5xl font-bold  pb-8">
              <TypeAnimation
                className="text-2xl text-secondary"
                sequence={["I'm an Architecture", 2500]}
                speed={1}
                repeat={0}
              />
            </h1>

            <p className="mt-3 k font-semibold text-2xl">Contact Me</p>

            <div className="text-3xl space-x-10 flex  mt-4   py-4">
              <a href="" className="k">
                <FaFacebook />
              </a>
              <a href="" className="k">
                <FaGithub />
              </a>
              <a href="" className="k">
                <FaDev />
              </a>
              <a href="" className="k">
                <FaLinkedin />
              </a>
              <a href="" className="k">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-auto mt-6 lg:mt-0 shadow-xl border-4 rounded-md border-secondary  lg:w-[400px] lg:h-[400px]">
          <img
            className="w-60 h-60 max-w-md lg:max-w-none lg:w-[400px] lg:h-[400px] lg:rounded-xl md:rounded-2xl object-cover lg:px-8 bg-gray-800 lg:mr-8 lg:mb-10 lg:-ml-4"
            src="https://i.ibb.co/4M6Yjgj/377149425-896894145363927-5352944729973752699-n-1.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
