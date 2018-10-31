const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

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
      printToDom(newProject, 'projectsPage');
    }
  });
};

createProjectCards();


// Event Listener SPA Begins

const navBioElem = document.getElementById('navToBio');
const bio = () => {
  document.getElementById('projectsPage').classList.add('hideStuff');
  document.getElementById('technologiesPage').classList.add('hideStuff');
  document.getElementById('bioPage').classList.remove('hideStuff');
};
navBioElem.addEventListener('click', bio);

const navProjectsElem = document.getElementById('navToTech');
const bioTwo = () => {
  document.getElementById('projectsPage').classList.add('hideStuff');
  document.getElementById('technologiesPage').classList.remove('hideStuff');
  document.getElementById('bioPage').classList.add('hideStuff');
};
navProjectsElem.addEventListener('click', bioTwo);

const navProjectsEl = document.getElementById('navToProjects');
const bioThree = () => {
  document.getElementById('projectsPage').classList.remove('hideStuff');
  document.getElementById('technologiesPage').classList.add('hideStuff');
  document.getElementById('bioPage').classList.add('hideStuff');
};
navProjectsEl.addEventListener('click', bioThree);
