const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const createTask = require('../controllers/createTaskController');
const delTask = require('../controllers/deleteTaskController');

router.get('/',homeController.home);
router.post('/create-task',createTask.cre);
router.get('/delete-task',delTask.deleteTask);
module.exports = router;