import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
};

export default Projects;
