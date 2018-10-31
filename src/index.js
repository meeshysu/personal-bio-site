const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = (projects) => {
  let newProject = '';
  for (let i = 0; i < projects.length; i++) {
    newProject += `<div id='cards'>
    <h2>${projects[i].title}</h2>
    <img src='${projects[i].screenshot}'></img>
    <div class="content"><p>${projects[i].description}</p>
    <p>${projects[i].technologiesUsed}</p>
    <p>${projects[i].available}</p>
    <p>${projects[i].url}</p>
     <p>${projects[i].githubUrl}</p></div>
    </div>`;
    if (projects[i].available === true) {
      printToDom(newProject, 'projectsPage');
    }
  }
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
