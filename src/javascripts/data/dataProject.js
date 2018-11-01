import $ from 'jquery';

const loadProjects = () => {
  const projectsPromise = new Promise((resolve, reject) => {
    $.get('../db/projects.json')
      .done((data) => {
        resolve(data.projects);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return projectsPromise;
};

export default { loadProjects };
