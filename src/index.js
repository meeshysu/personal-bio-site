import viewProject from './javascripts/components/projects';
import navbarClick from './javascripts/helpers/events';

const initializeApp = () => {
  viewProject.initializeProjects();
  navbarClick.bindEvents();
};
initializeApp();
