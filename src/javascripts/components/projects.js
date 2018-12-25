import $ from 'jquery';
import 'bootstrap';

import getProjectsFromDb from '../data/dataProject';

import me from '../../images/Headshot.png';
import htmlPhoto from '../../images/TechIcons/HTML.png';
import cssPhoto from '../../images/TechIcons/CSS.png';

$('#headshotPhoto').attr('src', me);
$('.html-icon').attr('src', htmlPhoto);
$('.css-icon').attr('src', cssPhoto);


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
