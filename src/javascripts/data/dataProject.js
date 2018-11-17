import 'bootstrap';
import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjectsFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((result) => {
      const allProjectsObject = result.data;
      const allProjectsArray = [];
      if (allProjectsObject != null) {
        Object.keys(allProjectsObject).forEach((projectId) => {
          const newProject = allProjectsObject[projectId];
          newProject.id = projectId;
          allProjectsArray.push(newProject);
        });
      }
      resolve(allProjectsArray);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { getProjectsFromDb };
