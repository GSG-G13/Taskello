const connection = require("../config/connection");

const postUserData = (user) => {
  const { name, email, password } = user;
  const userSql = {
    text: "INSERT INTO users(name,email,password) VALUES($1, $2,$3) returning name,email,password",
    values: [name, email, password],
  };
  return connection.query(userSql);
};


const postTaskData=(task)=>{
const {title,desc,deadline,user_id,project_id} = task;
const taskSql = {
  text: "INSERT INTO tasks(title,desc,deadline,user_id) VALUES($1, $2,$3,$4,$5) returning title,desc,deadline",
  values: [title,desc,deadline,user_id,project_id],
};

  return connection.query(taskSql);
};

const postProjectData = (task) => {
  const { pname, pdesc } = project;
  const projectSql = {
    text: "INSERT INTO tasks(pname,pdesc) VALUES($1, $2) returning pname,pdesc",
    values: [pname, pdesc],
  };
  return connection.query(taskSql);
};

module.exports = { postUserData, postTaskData, postProjectData };
