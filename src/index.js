import 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';
import './main.scss';
import './Styles/contact.scss';
import './Styles/biography.scss';
import './Styles/technology.scss';
import './Styles/projects.scss';
import './Styles/homePage.scss';
import apiKeys from '../db/apiKeys.json';

import initializeProjects from './javascripts/components/projects';
import navbarClick from './javascripts/helpers/events';


const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  initializeProjects.initializeProjects();
  navbarClick.bindEvents();
};
initializeApp();
