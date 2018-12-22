import $ from 'jquery';
import 'bootstrap';

const bindEvents = () => {
  $('#navHome').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#banner').show();
    $('#contactPage').hide();
    $('#coopiePhoto').hide();
  });
  $('#navBio').on('click', () => {
    $('#bioPage').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#banner').hide();
    $('#contactPage').hide();
  });
  $('#navTech').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').show();
    $('#projectsPage').hide();
    $('#banner').hide();
    $('#contactPage').hide();
    $('#coopiePhoto').hide();
  });
  $('#navProject').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').show();
    $('#banner').hide();
    $('#contactPage').hide();
    $('#coopiePhoto').hide();
  });
  $('#navContact').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#banner').hide();
    $('#contactPage').show();
    $('#coopiePhoto').hide();
  });
};

export default { bindEvents };
