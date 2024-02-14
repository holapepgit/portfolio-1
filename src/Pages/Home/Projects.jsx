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
            
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-20 max-w-6xl mx-auto gap-20">
      {projectData.map((project, index) => (
          <div
          key={index}
          className="w-full max-w-xl overflow-hidden bg-gray-100 rounded-lg shadow-lg"
        >
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
};

export default Projects;
