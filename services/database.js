const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'arthof1436!',
  port: '5432',
  database: 'tasks',
});

module.exports = { pool };
