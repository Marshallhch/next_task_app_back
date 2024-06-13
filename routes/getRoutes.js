const router = require('express').Router();
const { getTasks } = require('../controllers/getTasks');

router.get('/get_tasks/:userId', getTasks);

module.exports = router;
