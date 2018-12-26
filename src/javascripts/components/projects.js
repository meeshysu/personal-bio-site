import $ from 'jquery';
import 'bootstrap';

import getProjectsFromDb from '../data/dataProject';

import me from '../../images/Headshot.png';
import htmlPhoto from '../../images/TechIcons/HTML150.png';
import cssPhoto from '../../images/TechIcons/CSS150.png';
import githubPhoto from '../../images/TechIcons/GITHUB150.png';
import jsPhoto from '../../images/TechIcons/JavaScriptPhoto.png';
import jqPhoto from '../../images/TechIcons/jquery150.png';
import scssPhoto from '../../images/TechIcons/Sassy1.png';
import bsPhoto from '../../images/TechIcons/BootStrap145.png';
import gitbashPhoto from '../../images/TechIcons/GitBash.png';
import vsPhoto from '../../images/TechIcons/VS.png';
import reactPhoto from '../../images/TechIcons/React60.png';
import blueFlower from '../../images/TechIcons/Leaves.png';
// import succulent from '../../images/TechIcons/Succulents.png';


$('#headshotPhoto').attr('src', me);
$('#htmlPhoto').attr('src', htmlPhoto);
$('#cssPhoto').attr('src', cssPhoto);
$('#githubPhoto').attr('src', githubPhoto);
$('#jsPhoto').attr('src', jsPhoto);
$('#jqPhoto').attr('src', jqPhoto);
$('#scssPhoto').attr('src', scssPhoto);
$('#bsPhoto').attr('src', bsPhoto);
$('#gitbashPhoto').attr('src', gitbashPhoto);
$('#vsPhoto').attr('src', vsPhoto);
$('#reactPhoto').attr('src', reactPhoto);
$('#blueFlower').attr('src', blueFlower);


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
