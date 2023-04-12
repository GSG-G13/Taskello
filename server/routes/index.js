const { signIn, signup } = require('../controllers/auth');

const addTaskController = require('../controllers/tasks/addTaskController');
const {
  getAllTasksDataController,
} = require('../controllers/tasks/getAllTasksController');
const {
  getAllUsersController,
} = require('../controllers/users/getAllUsersController');

const express = require('express');
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signIn);

router.post('/add/task', addTaskController);
router.get('/tasks', getAllTasksDataController);
router.get('/users', getAllUsersController);


module.exports = router;
