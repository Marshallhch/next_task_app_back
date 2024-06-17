const router = require('express').Router();
const { updateCompletedTask } = require('../controllers/putTask');

router.put('/update_completed_task', updateCompletedTask);

module.exports = router;
