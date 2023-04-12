const { signIn, signup } = require('../controllers/auth');

const addTaskController = require('../controllers/tasks/addTaskController');
const getAllTasksDataController = require('../controllers/tasks/getAllTasksController')

const express = require('express');
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signIn);

router.post('/add/task', addTaskController);
router.get('/tasks',getAllTasksDataController);

module.exports = router;
