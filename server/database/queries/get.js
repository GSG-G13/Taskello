const connection = require('../config/connection');

const getData = () => {
  const sql = {
    text: 'SELECT title,desc,deadline FROM tasks ',
  };
  return connection.query(sql);
};

/* title desc deadline emp project  */

const getAllTasksDataQuery = () => {
  const sql = {
    text: 'select tasks.title,tasks.description,tasks.deadline,users.name,projects.pname from tasks join users ON users.id = tasks.user_id join projects ON projects.id = tasks.project_id ',
  };
  return connection.query(sql);
};

const getAllUsersQuery = () => {
  const sql = {
    text: 'SELECT * FROM users',
  };
  return connection.query(sql);
};


module.exports = {getData, getAllTasksDataQuery,getAllUsersQuery};
