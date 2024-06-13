const database = require('../services/database');

exports.getTasks = async (req, res) => {
  const userId = req.params.userId;

  // console.log(userId);

  // userId를 응답으로 보냅니다.
  // res.send(userId);
  try {
    const result = await database.pool.query(
      `SELECT * FROM task WHERE userId = $1`,
      [userId]
    );

    // console.log(result.rows);

    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
