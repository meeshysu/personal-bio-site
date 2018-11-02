import $ from 'jquery';
import 'bootstrap';

import projectsData from '../data/dataProject';

const createProjectCards = (projects) => {
  let newProject = '';
  projects.forEach((project) => {
    newProject += `<div id='cards'>
    <h2>${project.title}</h2>
    <img src='${project.screenshot}'></img>
    <div class="content"><p>${project.description}</p>
    <p>${project.technologiesUsed}</p>
    <p>${project.available}</p>
    <p>${project.url}</p>
     <p>${project.githubUrl}</p></div>
    </div>`;
    if (project.available === true) {
      $('#projectsPage').html(newProject);
    }
  });
};

const initializeProjects = () => {
  projectsData.loadProjects().then((projects) => {
    createProjectCards(projects);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeProjects };
