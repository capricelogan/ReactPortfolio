import React from 'react';
//import portfolio from "./portfolio.css";

const projects = [
  {
    id: 1,
    name: 'Project 1',
    thumbnail: 'https://via.placeholder.com/150',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 2,
    name: 'Project 2',
    thumbnail: 'https://via.placeholder.com/150',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 3,
    name: 'Project 3',
    thumbnail: 'https://via.placeholder.com/150',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
];

const Projects = () => {
  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <img src={project.thumbnail} alt={project.name} />
          <ul>
            {project.features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
