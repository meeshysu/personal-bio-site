import 'bootstrap';
import axios from 'axios';

// const loadProjects = () => new Promise((resolve, reject) => {
//   axios.get('http://localhost:3003/projects')
//     .then((data) => {
//       const cleanData = data.data.projects;
//       resolve(cleanData);
//     })
//     .catch((error) => {
//       reject(error);
//     });
// });

const loadProjects = () => axios.get('http://localhost:3003/projects');

export default { loadProjects };
