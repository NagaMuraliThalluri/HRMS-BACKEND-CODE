const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",          
  host: "localhost",
  database: "student_db",
  password: "Naga@1234",
  port: 5432,
});

// Test connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Connection error:", err);
  } else {
    console.log("Connected to DB at:", res.rows[0].now);
  }
});

module.exports = pool;