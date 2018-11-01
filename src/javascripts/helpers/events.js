import $ from 'jquery';
import 'bootstrap';

const navBarSelection = () => {
  $('#navToBio').click(() => {
    $('.pageContainerForNav').show();
    $('.pageContainerForNav').not('.bioPage').hide();
  });
  $('#navToBio').click(() => {
    $('.pageContainerForNav').show();
    $('.pageContainerForNav').not('.technologiesPage').hide();
  });
  $('#navToBio').click(() => {
    $('.pageContainerForNav').show();
    $('.pageContainerForNav').not('.projectsPage').hide();
  });
};
export default { navBarSelection };

// const navBioElem = document.getElementById('navToBio');
// const bio = () => {
//   document.getElementById('projectsPage').classList.add('hideStuff');
//   document.getElementById('technologiesPage').classList.add('hideStuff');
//   document.getElementById('bioPage').classList.remove('hideStuff');
// };
// navBioElem.addEventListener('click', bio);

// const navProjectsElem = document.getElementById('navToTech');
// const bioTwo = () => {
//   document.getElementById('projectsPage').classList.add('hideStuff');
//   document.getElementById('technologiesPage').classList.remove('hideStuff');
//   document.getElementById('bioPage').classList.add('hideStuff');
// };
// navProjectsElem.addEventListener('click', bioTwo);

// const navProjectsEl = document.getElementById('navToProjects');
// const bioThree = () => {
//   document.getElementById('projectsPage').classList.remove('hideStuff');
//   document.getElementById('technologiesPage').classList.add('hideStuff');
//   document.getElementById('bioPage').classList.add('hideStuff');
// };
// navProjectsEl.addEventListener('click', bioThree);
