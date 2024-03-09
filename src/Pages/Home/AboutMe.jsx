import banner from "../../assets/banner.jpg";
const AboutMe = () => {
  return (
    <>
      <div id="background" className=" px-6 py-12 mx-auto bg-white">
        <div className="lg:mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Background</h2>
          <div className="mx-auto w-28 h-1 mb-5 bg-secondary"></div>
        </div>
        <div className="items-center lg:flex justify-evenly">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0   lg:border-4 lg:border-black/70  rounded lg:w-[300px] lg:h-[400px]">
            <img
              className="w-[350px] h-[400px] object-cover lg:max-w-3xl rounded-lg lg:px-3 bg-gray-800  border-red-500 lg:mb-14 lg:ml-14"
              src={banner}
              alt="Catalogue-pana.svg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="lg:max-w-lg text-lg list-disc list-inside">
              <li className="pt-6 text-gray-700  tracking-wide">
                The South East And South-South Nigeria are in strategic
                locations in the Country.
              </li>
              <li className="pt-6 text-gray-700  tracking-wide">
                The combined regions population is estimated to be 65M.
              </li>
              <li className="pt-6 text-gray-700  tracking-wide">
                Nigeria imports over 131 million tons of cargo each year.
              </li>
              <li className="pt-6 text-gray-700 tracking-wide ">
                It is estimated that the trans regional corridor through this
                rail project has the potential to transport 50 million-100
                million tons of cargo each year.
              </li>

              <a
                href="#contact"
                className="w-fit inline-block px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-600 rounded-lg lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                Connect With Us
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
