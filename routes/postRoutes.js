const router = require('express').Router();
const { postTasks } = require('../controllers/postTasks');

router.post('/tasks', postTasks);

module.exports = router;
