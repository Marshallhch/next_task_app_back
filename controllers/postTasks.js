const database = require('../services/database');
const { v4: uuidv4 } = require('uuid');

exports.postTasks = async (req, res) => {
  const _id = uuidv4();
  const { title, description, date, completed, important, userId } = req.body;
  console.log(title, description, date, completed, important, userId);
  try {
    const result = await database.pool.query(
      `INSERT INTO task (_id, title, description, date, is_completed, is_important, userId) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [_id, title, description, date, completed, important, userId]
    );

    return res.status(201).json({ message: 'Task created successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
