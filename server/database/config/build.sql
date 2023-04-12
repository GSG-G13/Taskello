BEGIN;

DROP TABLE IF EXISTS users,tasks,projects CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  email VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  pname VARCHAR(256) NOT NULL,
  pdesc TEXT NOT NULL 
);



CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(256) NOT NULL ,
  description TEXT NOT NULL,
  created_at TIMESTAMP  NOT NULL DEFAULT NOW(),
  deadline VARCHAR(256) NOT NULL,
  user_id INTEGER REFERENCES users(id),
  project_id INTEGER REFERENCES projects(id)

);


INSERT INTO users (name,email,password) VALUES ('admin',' admin@localhost','admin');
INSERT INTO users (name,email,password) VALUES ('user',' user@localhost','user');

INSERT INTO projects (pname,pdesc) VALUES ('project1','project1 description');
INSERT INTO projects (pname,pdesc) VALUES ('project2','project2 description');

INSERT INTO tasks (title,description,deadline,user_id,project_id) VALUES ('task1','task1 description','2018-12-12',1,1);
INSERT INTO tasks (title,description,deadline,user_id,project_id) VALUES ('task2','task2 description','2018-12-12',1,2);
INSERT INTO tasks (title,description,deadline,user_id,project_id) VALUES ('task3','task3 description','2018-12-12',2,1);
INSERT INTO tasks (title,description,deadline,user_id,project_id) VALUES ('task4','task4 description','2018-12-12',2,2);





COMMIT;
