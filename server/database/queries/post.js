const connection=require('../config/connection');


const postData=(user,task,project )=>{
     
    let {name,email,password} = user;
  const userSql = {
    text: "INSERT INTO users(name,email,password) VALUES($1, $2,$3) returning name,email,password",
    values: [name,email,password],
  };

  
  let {title,desc,deadline} = task;
  const taskSql = {
    text: "INSERT INTO tasks(title,desc,deadline) VALUES($1, $2,$3,$4) returning title,desc,deadline",
    values: [title,desc,deadline],
  };


  let {pname,pdesc} = project;
  const projectSql = {
    text: "INSERT INTO tasks(pname,pdesc) VALUES($1, $2) returning pname,pdesc",
    values: [name,desc],
  };

  return connection.query(userSql , taskSql, projectSql);
};

module.exports = postData;