import $ from 'jquery';
import 'bootstrap';

const bindEvents = () => {
  $('#navBio').on('click', () => {
    $('#bioPage').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
  });
  $('#navTech').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').show();
    $('#projectsPage').hide();
  });
  $('#navProject').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').show();
  });
};

export default { bindEvents };
