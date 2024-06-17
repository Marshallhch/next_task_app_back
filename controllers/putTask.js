const database = require('../services/database');

exports.updateCompletedTask = async (req, res) => {
  const { id, is_completed } = req.body;

  try {
    const result = await database.pool.query(
      `UPDATE task SET is_completed = $1 WHERE _id = $2`,
      [is_completed, id]
    );

    // console.log(result.rows);

    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
