// db.js
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 10,
  min: 0,
  idleTimeoutMillis: 20000,
  connectionTimeoutMillis: 5000,
});

pool.on('error', err => {
  console.error('⚠️ Unexpected pg pool error:', err);
});

(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('DB connected at:', res.rows[0].now);
  } catch (err) {
    console.error('Initial connection failed:', err);
  }
})();

module.exports = pool;
