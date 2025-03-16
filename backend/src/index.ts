import express from "express";
import { Pool } from "pg";

const app = express();
const port = 3000;

// Configura la conexión a PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "myapp_db",
  password: "yourpassword",
  port: 5432,
});

// Rutas del servidor
app.get("/api/data", async (req, res) => {
  const result = await pool.query("SELECT * FROM data");
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
