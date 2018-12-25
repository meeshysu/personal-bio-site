import $ from 'jquery';
import 'bootstrap';

const bindEvents = () => {
  $('#navHome').on('click', () => {
    $('#bioContainer').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#banner').show();
    $('#contactPage').hide();
    $('#headshotPhoto').hide();
  });
  $('#navBio').on('click', () => {
    $('#bioContainer').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#banner').hide();
    $('#headshotPhoto').show();
  });
  $('#navTech').on('click', () => {
    $('#bioContainer').hide();
    $('#technologiesPage').show();
    $('#projectsPage').hide();
    $('#banner').hide();
    $('#contactPage').hide();
    $('#headshotPhoto').hide();
  });
  $('#navProject').on('click', () => {
    $('#bioContainer').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').show();
    $('#banner').hide();
    $('#contactPage').hide();
    $('#headshotPhoto').hide();
  });
  $('#navContact').on('click', () => {
    $('#bioContainer').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#banner').hide();
    $('#contactPage').show();
    $('#headshotPhoto').hide();
  });
};

export default { bindEvents };
