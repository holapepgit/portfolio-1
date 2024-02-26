import { useState, useEffect } from "react";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

<<<<<<< HEAD
    return (
      <div className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-8 md:py-12 lg:py-20 max-w-6xl mx-auto gap-6 md:gap-8 lg:gap-20">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-xs sm:max-w-md md:max-w-xl overflow-hidden bg-gray-100 rounded-lg shadow-lg"
            >
              <img
                className="object-cover w-full h-48 sm:h-56 md:h-64"
                src={project.image}
                alt="project avatar"
              />
              <div className="py-4 px-6 md:px-8 lg:px-10">
                <h1 className="block text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-2">
                  {project.name}
                </h1>
                <p className="text-sm sm:text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
=======
  return (
    <div className="bg-white py-20 px-5 lg:px-0">
      <div className="lg:mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="mx-auto w-24 h-1 mb-5 bg-secondary"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-3  max-w-6xl mx-auto gap-20">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-xl overflow-hidden bg-gray-100 rounded-lg shadow-lg">
            <img
              className="object-cover w-full h-72"
              src={project.image}
              alt="project avatar"
            />
            <div className="py-5 text-center">
              <h1 className="block text-xl font-bold">{project.name}</h1>
              <p className="text-sm p-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
>>>>>>> bcdab7f246e4ce1da7ddd08edbdffcd7b633dd54
};

export default Projects;
