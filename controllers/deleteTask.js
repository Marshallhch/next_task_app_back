const database = require('../services/database');

exports.deleteTask = async (req, res) => {
  const id = req.params.id;

  // console.log(userId);

  // userId를 응답으로 보냅니다.
  // res.send(userId);
  try {
    const result = await database.pool.query(
      `DELETE FROM task WHERE _id = $1`,
      [id]
    );

    // console.log(result.rows);

    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
