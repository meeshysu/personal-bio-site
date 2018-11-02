import viewProject from './javascripts/components/projects';
import navbarClick from './javascripts/helpers/events';
import 'bootstrap';
import './main.scss';

const initializeApp = () => {
  viewProject.initializeProjects();
  navbarClick.bindEvents();
};
initializeApp();
