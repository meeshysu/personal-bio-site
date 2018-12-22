import $ from 'jquery';
import 'bootstrap';

import getProjectsFromDb from '../data/dataProject';

import techImage from '../../images/TalentStrip.png';
import coopie from '../../images/Coopie.jpg';

$('#technologiesPage').attr('src', techImage);
$('#coopiePhoto').attr('src', coopie);

const createProjectCards = (projects) => {
  let newProject = '';
  projects.forEach((project) => {
    newProject += `<div id='cards' class='container-cards'> 
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
  getProjectsFromDb.getProjectsFromDb()
    .then((data) => {
      createProjectCards(data);
      console.log(data.data);
    }).catch((error) => {
      console.error(error);
    });
};

export default {
  initializeProjects,
};
