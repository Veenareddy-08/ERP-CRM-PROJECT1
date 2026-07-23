import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import pool from "./config/db";

const PORT = process.env.PORT || 5000;

async function startServer() {

  try {

    const connection = await pool.getConnection();

    console.log("✅ MySQL Connected Successfully");

    connection.release();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {

    console.log("❌ MySQL Connection Failed");
    console.log(error);

  }

}

startServer();