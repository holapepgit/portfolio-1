const AboutMe = () => {
  return (
    <>
      <div className="container px-6 py-16 mx-auto bg-white">
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
              <h1 className="text-3xl font-semibold lg:text-5xl pb-8 pt-4">
                About
              </h1>

              <p className="pt-6 text-gray-700 ">
                Hey, My name is Garv Nanwani and I am currently a Second Year
                Undergraduate Student at Jamia Millia Islamia, New Delhi.
              </p>
              <p className="pt-6 text-gray-700 ">
                My field of Interests are programming and psychology.
              </p>
              <p className="pt-6 text-gray-700 ">
                I have been coding for around 2 years now. I love to design
                websites and build full stack applications using MERN stack
                preferably.
              </p>
              <p className="pt-6 text-gray-700 ">
                I am also a guest writer at daily.dev where I write technical
                articles related to development and programming in general.
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
