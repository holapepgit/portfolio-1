const AboutMe = () => {
  return (
    <>
      <div className=" px-6 py-16 mx-auto bg-white">
        <div className="lg:mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Background</h2>
          <div className="mx-auto w-48 h-1 mb-5 bg-secondary"></div>
        </div>
        <div className="items-center lg:flex justify-evenly">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0  lg:shadow-xl lg:border-4 lg:border-black lg:w-[300px] lg:h-[400px]">
            <img
              className="w-[300px] h-[400px] object-cover lg:max-w-3xl rounded-lg lg:px-8 bg-gray-800  border-red-500 lg:mb-14 lg:ml-14"
              src="https://i.ibb.co/XF1rVcX/423062906-8151874321506327-212631828011859121-n.jpg"
              alt="Catalogue-pana.svg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <p className="pt-6 text-gray-700  text-sm lg:text-base">
                • The South East And South-South Nigeria are in strategic
                locations in the Country.
              </p>
              <p className="pt-6 text-gray-700  text-sm lg:text-base">
                The combined regions population is estimated to be 65M.
              </p>
              <p className="pt-6 text-gray-700  text-sm lg:text-base">
                • Nigeria imports over 131 million tons of cargo each year.
              </p>
              <p className="pt-6 text-gray-700 text-sm lg:text-base ">
                • It is estimated that the transregional corridor through this
                rail project has the potential to transport 50 million-100
                million tons of cargo each year.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-600 rounded-lg lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                Connect With Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
