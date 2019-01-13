import $ from 'jquery';
import 'bootstrap';

import getProjectsFromDb from '../data/dataProject';

import me from '../../images/Headshot2.png';
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
import greenBlueSucc from '../../images/SucculentImages/greenBlueSucc.png';
import lightBlueSucc from '../../images/SucculentImages/lightBlueSucc.png';
import pinkSucc from '../../images/SucculentImages/pinkSucc.png';
import tealSucc from '../../images/SucculentImages/tealSucc.png';
import pinkSucc2 from '../../images/SucculentImages/pinkSucc2.png';
import purpleSucc from '../../images/SucculentImages/purpleSucc.png';
import lightGreenSucc from '../../images/SucculentImages/lightGreenSucc.png';
import brightSucc from '../../images/SucculentImages/brightSucc.png';
import purpleGreenSucc from '../../images/SucculentImages/purpleGreenSucc.png';
import contact from '../../images/Contact.png';
import header from '../../images/Bio.png';
import headertwo from '../../images/TechN.png';
import exportProjects from '../../images/Export.png';
import hens from '../../images/One.png';
import wasHere from '../../images/WasHere.png';

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
$('#greenBlueSucc').attr('src', greenBlueSucc);
$('#lightBlueSucc').attr('src', lightBlueSucc);
$('#pinkSucc').attr('src', pinkSucc);
$('#pinkSucc2').attr('src', pinkSucc2);
$('#tealSucc').attr('src', tealSucc);
$('#purpleSucc').attr('src', purpleSucc);
$('#gitHub-flower').attr('src', purpleSucc);
$('#lightGreenSucc').attr('src', lightGreenSucc);
$('#brightSucc').attr('src', brightSucc);
$('#purpleGreenSucc').attr('src', purpleGreenSucc);
$('#linkedIn-flower').attr('src', brightSucc);
$('#email-flower').attr('src', greenBlueSucc);
$('#contact-picture').attr('src', contact);
$('#header-bio').attr('src', header);
$('#header-tech').attr('src', headertwo);
$('.header-project').attr('src', exportProjects);
$('#bricks-succ').attr('src', hens);
$('#was-here').attr('src', wasHere);


const createProjectCards = (projects) => {
  let newProject = '<img class="header-project"></img>';
  projects.forEach((project) => {
    newProject += `<div id='cards' class='container-cards'> 
    <h2 class="title">${project.title}</h2>
    <img class="screenshot" src='${project.screenshot}'></img>
      <div class="content"><p>${project.description}</p>
        <p>${project.technologiesUsed}</p>
        <p class="url-hover btn btn-light m-3"><a href="${project.url}" target="_blank">Live Demo</a></p>
      <p class="project-hover btn btn-light m-2"><a href="${project.githubUrl}" target="_blank">GitHub Repo</a></p>
      </div>
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
