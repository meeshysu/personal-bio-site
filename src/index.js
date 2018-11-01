import initializeProjects from './javascripts/components/projects';
import navBarSelection from './javascripts/helpers/events';

const initializeApp = () => {
  initializeProjects();
  navBarSelection();
};
initializeApp();
