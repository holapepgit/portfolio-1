import { GoNorthStar } from "react-icons/go";

const Projects = () => {
  return (
    <div className="bg-primary">
      <div className="flex justify-center  relative">
        <img
          className="object-cover w-full lg:h-[500px]  lg:w-full "
          src="https://i.ibb.co/PG9m9Yp/marc-olivier-jodoin-HIi-NFXcbt-Q-unsplash.jpg"
        />
        <div className="flex absolute  bg-black/60 inset-0 z-10  justify-center items-center">
          <GoNorthStar className="text-5xl text-gray-200" />
          <h1 className="  lg:text-5xl text-2xl font font-semibold text-white px-2">
            THE PROJECT PHASES
          </h1>
          <GoNorthStar className="text-5xl text-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
